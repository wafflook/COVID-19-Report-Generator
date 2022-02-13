/**
 * dat-gui JavaScript Controller Library
 * https://github.com/dataarts/dat.gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import fs from 'fs';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import cleanup from 'rollup-plugin-cleanup';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';

const banner = fs.readFileSync(path.join(__dirname, 'licenseBanner.txt'));

export default {
  input: 'src/dat/index.js',
  output: [{
    // TODO: Remove default exports, and this line, in v0.8.0.
    exports: 'named',
    file: './build/dat.gui.js',
    format: 'umd',
    name: 'dat',
    sourcemap: false,
    banner: banner
  }, {
    file: './build/dat.gui.module.js',
    format: 'es',
    sourcemap: true,
    banner: banner
  }],
  watch: {
    include: 'src/**'
  },
  plugins: [
    resolve(),
    sass({
      insert: false,  // https://github.com/dataarts/dat.gui/issues/233 (___$insertStyle() Disable)
      output: 'build/dat.gui.css',
      options: {outputStyle: 'expanded'}  // 出力は非圧縮
    }),
    babel({
      plugins: ['external-helpers'],
      exclude: 'node_modules/**'
    }),
    cleanup()
  ]
};
