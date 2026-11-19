import type { BbPluginApi } from "@get-bb/plugin-sdk";

export default async function plugin(bb: BbPluginApi) {
  bb.log.info("ru-ui loaded");

  const settings = bb.settings.define({
    enabled: {
      type: "boolean",
      label: "Translate chrome labels",
      default: true,
    },
  });

  const publish = async () => {
    const { enabled } = await settings.get();
    bb.realtime.publish("ru-ui-config", { enabled });
  };

  settings.onChange(() => {
    void publish();
  });
  await publish();

  bb.cli.register({
    name: "ru-ui",
    summary: "Russian UI translation status",
    commands: [
      {
        name: "status",
        summary: "Show whether chrome translation is enabled",
        usage: "bb ru-ui status [--json]",
      },
      {
        name: "on",
        summary: "Enable Russian chrome labels",
        usage: "bb ru-ui on",
      },
      {
        name: "off",
        summary: "Disable Russian chrome labels",
        usage: "bb ru-ui off",
      },
    ],
    async run(argv) {
      const json = argv.includes("--json");
      const [command] = argv.filter((arg) => arg !== "--json");
      switch (command) {
        case undefined:
        case "status": {
          const { enabled } = await settings.get();
          if (json) {
            return {
              exitCode: 0,
              stdout: JSON.stringify({
                enabled,
                locale: enabled ? "ru" : "en",
              }),
            };
          }
          return {
            exitCode: 0,
            stdout: enabled
              ? "Russian UI: on (chrome labels)"
              : "Russian UI: off",
          };
        }
        case "help":
        case "--help":
          return {
            exitCode: 0,
            stdout: [
              "Usage:",
              "  bb ru-ui status [--json]",
              "  bb ru-ui on",
              "  bb ru-ui off",
            ].join("\n"),
          };
        case "on":
          await settings.experimental_set({ enabled: true });
          return { exitCode: 0, stdout: "Russian UI enabled." };
        case "off":
          await settings.experimental_set({ enabled: false });
          return { exitCode: 0, stdout: "Russian UI disabled." };
        default:
          return {
            exitCode: 1,
            stderr: "Usage: bb ru-ui status|on|off [--json]",
          };
      }
    },
  });

  bb.onDispose(() => {
    bb.log.info("ru-ui disposed");
  });
}
