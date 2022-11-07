// module.exports = {
//   lintOnSave: false,
//   devServer: {
//     proxy: {
//       '/api': { 
//         target: 'http://localhost:8000', 
//         changeOrigin: true, 
//         ws: true,
//         pathRewrite: { 
//           '^/api': ''
//         }
//       }
//     }
//   }
// }
// const UglifyPlugin = require('uglifyjs-webpack-plugin')
// const PrerenderSPAPlugin = require('prerender-spa-plugin')
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
// const path = require('path')

module.exports = {
    lintOnSave: false,
};