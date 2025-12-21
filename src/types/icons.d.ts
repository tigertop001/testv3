  // ?sfc 后缀 - 作为 Vue 组件
  declare module '@/assets/icons/*.svg?sfc' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  
  // 默认导入 - 作为 URL
  declare module '@/assets/icons/*.svg' {
    const src: string
    export default src
  }
  
  // ?raw 后缀 - 原始 SVG
  declare module '@/assets/icons/*.svg?raw' {
    const content: string
    export default content
  }