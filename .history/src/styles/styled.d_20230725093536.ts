import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    colors: {
      primary: string
    head: string
    900: string
    800: string
    700: string
    100: string
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