import esbuild from "esbuild";
import browserSync from "../dist/index.js";

const absolute = relative => new URL(relative, import.meta.url).pathname;
const watch = process.argv.includes("--watch");

if (watch) {
  const context = await esbuild.context({
    entryPoints: [ absolute("source/script.js") ],
    bundle: true,
    plugins: [
      browserSync({
        server: absolute("public"),
        ui: false,
        notify: false,
        files: [ absolute("public/index.html") ]
      })
    ],
    outdir: absolute("public")
  });
  context.watch();
} else {
  await esbuild.build({
    entryPoints: [ absolute("source/script.js") ],
    bundle: true,
    outdir: absolute("public")
  });
}
