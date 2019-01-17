/* eslint-disable typescript/no-var-requires */
const path = require('path');
const { environment } = require('@rails/webpacker');

// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const { ContextReplacementPlugin } = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // required for vue-loader v15.x
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin'); // syncs with the `baseUrl` and `paths` in `tsconfig.json`
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin'); // allows using `transpileOnly` in `tsconfig.json`; does type checking in a separate process to speed up compilation

const vue = require('./loaders/vue');
const css = require('./loaders/css');
const sass = require('./loaders/sass');
const babel = require('./loaders/babel');
const typescript = require('./loaders/typescript');

// environment.plugins.append('BundleAnalyzer', new BundleAnalyzerPlugin());
// environment.plugins.append('IgnoreMomentLocales', new ContextReplacementPlugin(/moment[/\\]locale$/, /^en(\.js)?$/));
environment.plugins.append('VueLoader', new VueLoaderPlugin());

// reduces compile time like crazy
environment.plugins.append('ForkTsCheckerWebpackPlugin', new ForkTsCheckerWebpackPlugin({
  vue: true,

  // makes webpack wait for type checking to finish before "emitting"; allows
  // type errors to remain present in the build output from webpack and in
  // webpack-dev-server's darkened overlay
  async: false,
}));

environment.loaders.append('vue', vue);
environment.loaders.append('css', css);
environment.loaders.append('sass', sass);
environment.loaders.append('babel', babel);
environment.loaders.append('typescript', typescript);

environment.config.merge({
  resolve: {
    plugins: [
      // uses `tsconfig.json` path settings to inform webpack of resolution
      // paths, so that intellisense resolves the same way the compiler will
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '..', '..', 'tsconfig.json'),
      }),
    ],
  },
});

module.exports = environment;
