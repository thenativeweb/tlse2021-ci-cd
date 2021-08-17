import { build } from 'esbuild';
import fs from 'fs';
import htmlPlugin from '@chialab/esbuild-plugin-html';
import path from 'path';

await fs.promises.rm('build', {
  force: true,
  recursive: true
});

/* eslint-disable no-process-env */
const isProduction = process.env.NODE_ENV === 'production';
const isWatchMode = process.env.WATCH === 'true';
/* eslint-enable no-process-env */

await build({
  entryPoints: [ path.join('lib', 'index.html') ],

  assetNames: '[name]',
  outdir: 'build',

  bundle: true,
  minify: isProduction,
  sourcemap: isProduction ? false : 'inline',
  target: [ 'esnext' ],
  logLevel: 'info',
  watch: isWatchMode,

  plugins: [
    htmlPlugin()
  ]
});
