const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const path = require("path");
module.exports = {
    baseUrl: './',

    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },

    configureWebpack: {
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'html2canvas': 'html2canvas'
        },
        plugins: [
            new BundleAnalyzerPlugin({
                //  可以是`server`，`static`或`disabled`。
                //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
                //  在“静态”模式下，会生成带有报告的单个HTML文件。
                //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
                analyzerMode: 'disabled',
                //  将在“服务器”模式下使用的主机启动HTTP服务器。
                analyzerHost: '127.0.0.1',
                //  将在“服务器”模式下使用的端口启动HTTP服务器。
                analyzerPort: 8888, 
                //  路径捆绑，将在`static`模式下生成的报告文件。
                //  相对于捆绑输出目录。
                reportFilename: 'report.html',
                //  模块大小默认显示在报告中。
                //  应该是`stat`，`parsed`或者`gzip`中的一个。
                //  有关更多信息，请参见“定义”一节。
                defaultSizes: 'parsed',
                //  在默认浏览器中自动打开报告
                openAnalyzer: true,
                //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
                generateStatsFile: false, 
                //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
                //  相对于捆绑输出目录。
                statsFilename: 'stats.json',
                //  stats.toJson（）方法的选项。
                //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
                //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
                statsOptions: null,
                logLevel: 'info' // 日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
            }),
            new CompressionPlugin({
                test: /\.(js|css)(\?.*)?$/i,//需要压缩的文件正则
                threshold: 10240,//文件大小大于这个值时启用压缩
                deleteOriginalAssets: false//压缩后保留原文件
            }),
            
        ]
    },

    devServer: {
        open: true,
        port: 8882,
        https: false,
        hotOnly: false,
        proxy: null, // 设置代理
        // proxy: {
        //     '/api': {
        //         target: 'http://api.map.baidu.com/',  // target host
        //         changeOrigin: true,  // needed for virtual hosted sites
        //         pathRewrite: {
        //             '^/api': ''  // rewrite path
        //         }
        //     },
        // },
        before: app => {}
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
            path.resolve(__dirname, "./src/style/varibles.less")//需要自行添加
        ]
      }
    }
};
