import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Layouts from 'vite-plugin-vue-layouts'
import prism from 'markdown-it-prism'
import Markdown from 'unplugin-vue-markdown/vite'
import { unheadVueComposablesImports } from '@unhead/vue'
// import postcssViewportPlugin from 'postcss-px-to-viewport-8-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({
      extensions: ['.vue', '.md']
    }),
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    VueDevTools(),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/ // .md
      ],
      imports: [
        // presets
        'vue',
        // 'vue-router',
        VueRouterAutoImports,
        '@vueuse/core',
        'pinia',
        unheadVueComposablesImports
      ]
    }),
    Components({
      resolvers: [IconsResolver()],
      include: [/\.vue$/, /\.md$/],
      dirs: ['src/components'],
      dts: true
    }),
    Icons({
      autoInstall: true
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      pagesDirs: 'src/pages',
      defaultLayout: 'myDefault'
    }),
    Markdown({
      headEnabled: true,
      markdownItUses: [
        prism,
      ],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    // postcss: {
    //   plugins: [postcssViewportPlugin({
    //     unitToConvert: 'px', // 需要转换的单位，默认为 'px'
    //     viewportWidth: 750, // 设计稿的视窗高度
    //     unitPrecision: 5, // 单位转换后保留的精度
    //     propList: ['*'], // 转换为vw的属性列表
    //     viewportUnit: 'vw', // 希望使用的视窗单位
    //     fontViewportUnit: 'vw', // 字体使用的视窗单位
    //     selectorBlackList: [], // 需要忽略的css选择器，不会为视窗单位，使用原有的px等单位
    //     minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值才会被转换
    //     mediaQuery: false, // 媒体查询里的单位是否需要转换单位
    //     replace: true, // 是否直接更换属性，而不添加备用属性
    //     exclude: /node_modules/, // 忽略某些文件夹下的文件或特定文件，如 node_modules
    //     include: /\/src\//, // 如果设置了include,那将只有匹配到的文件才会被转换
    //     landscape: false, // 是否添加根据 landspaceWidth 生成的媒体查询条件
    //     landscapeUnit: 'vw', // 横屏时使用的单位
    //     landscapeWidth: 1125 // 横屏时全名用视窗宽度
    //   })]
    // }
  }
})
