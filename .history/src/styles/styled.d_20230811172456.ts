import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      head: string
      100: string

      sbcolor: string
      gray: string
      black: string
      white: string
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
