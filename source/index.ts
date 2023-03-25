import type { Plugin } from "esbuild";
import browserSync from "browser-sync";

const bs = browserSync.create();

export default (
  options: browserSync.Options = {}
): Plugin => ({
  name: "browser-sync",
  setup: ({ onEnd }) => {
    onEnd(() => {
      if (bs.active) {
        bs.reload();
      } else {
        bs.init(options);
      }
    });
  }
});
