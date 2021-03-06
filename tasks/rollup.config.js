const path = require('path');
const { promises: fs } = require('fs');
const { default: babel } = require('@rollup/plugin-babel');
const paths = require('./paths');

module.exports = {
  input: `${paths.source}/PrimaryNavigation.js`,
  output: [
    {
      file: `${paths.build}/cjs/index.js`,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: `${paths.build}/esm/index.js`,
      format: 'esm',
      sourcemap: true
    },
    {
      file: `${paths.build}/umd/index.js`,
      format: 'umd',
      sourcemap: true,
      name: 'PrimaryNavigation'
    }
  ],
  plugins: [
    (() => ({
      name: 'package-type',
      async writeBundle(output) {
        let prefix;
        let type;
        if (output.file.includes(`${paths.build}/cjs/`)) {
          prefix = `${paths.build}/cjs/`;
          type = 'commonjs';
        } else if (output.file.includes(`${paths.build}/esm/`)) {
          prefix = `${paths.build}/esm/`;
          type = 'module';
        } else if (output.file.includes(`${paths.build}/umd/`)) {
          prefix = `${paths.build}/umd/`;
          type = 'commonjs';
        }
        if (typeof prefix !== 'undefined') {
          const pkgPath = path.join(prefix, 'package.json');
          try {
            await fs.unlink(pkgPath);
          } catch (error) {}
          await fs.writeFile(
            pkgPath,
            JSON.stringify({ type }),
            'utf8'
          );
        }
      }
    }))(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**'
    })
  ]
};
