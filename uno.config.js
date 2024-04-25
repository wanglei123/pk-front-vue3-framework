// uno.config.ts
import {presetIcons, presetWind, defineConfig, transformerDirectives} from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'


export default defineConfig({
  shortcuts: {
    'bg-image': 'h-full w-full bg-cover bg-no-repeat bg-center-top'
  },
  presets: [
    presetWind(),
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        'display': 'inline-block' // 设置图标样式，为inline-block
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  // 设置主题颜色
  theme: {
    colors: {
      main: '#4E98F4'
    }
  }
})