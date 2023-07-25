import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
      secundary: string
      background: string
      text: string
    }
    size: {
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
  }
}