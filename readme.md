# @rbnlffl/esbuild-plugin-browser-sync

[![latest version on npm](https://img.shields.io/npm/v/@rbnlffl/esbuild-plugin-browser-sync)](https://www.npmjs.com/package/@rbnlffl/esbuild-plugin-browser-sync)
[![npm downloads a month](https://img.shields.io/npm/dm/@rbnlffl/esbuild-plugin-browser-sync)](https://www.npmjs.com/package/@rbnlffl/esbuild-plugin-browser-sync)
[![browser-sync dep](https://img.shields.io/npm/dependency-version/@rbnlffl/esbuild-plugin-browser-sync/browser-sync)](https://github.com/BrowserSync/browser-sync)
[![required node version](https://img.shields.io/node/v/@rbnlffl/esbuild-plugin-browser-sync)](https://github.com/nodejs/Release)
[![package license](https://img.shields.io/npm/l/@rbnlffl/esbuild-plugin-browser-sync)](license)

> easily integrate [`browser-sync`](https://github.com/BrowserSync/browser-sync) into your [`esbuild`](https://github.com/esbuild/esbuild) development flow 🌊

## install

```bash
yarn install --dev @rbnlffl/esbuild-plugin-browser-sync
```

## use

```typescript
import esbuild from "esbuild";
import browserSync from "@rbnlffl/esbuild-plugin-browser-sync";

const context = await esbuild.context({
  /* esbuild config */
  plugins: [
    browserSync({ /* options */ })
  ]
});
context.watch();
```

## config

all of the supplied configuration options get directly forwarded to `browser-sync`. you can find the official docs here: https://browsersync.io/docs/options

## caveats

since `esbuild` doesn't expose to its plugins whether it's in watch mode or not, whenever you include this bad boy, it will spin up a brand new `browser-sync` session for you. even if you just once call `esbuild.build`. so be mindful of that.

furthermore, if you are in `esbuild`'s watch mode, and you've configured `browser-sync` to watch certain files, as well, make sure there are no overlaps in your [`files`](https://browsersync.io/docs/options#option-files) prop and the actual sources you're piping to `esbuild`. the plugin will automatically trigger a [`reload`](https://browsersync.io/docs/api#api-reload) every time one of the source files that `esbuild` knows of, change. this may otherwise lead to multiple reloads, and unnecessary work for your cpu.

the best way to use this plugin is to have `esbuild` take care of watching the source files, and instruct `browser-sync` to watch assets that are outside of what you process via esbuild, like html files, an svg sprite, images, and so on. this allows you to have a smooth and very performant dx for web pages.

## license

[mit](license)
