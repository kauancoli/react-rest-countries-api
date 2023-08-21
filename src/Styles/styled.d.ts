import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      backgroundColor: string;
      textColor: string;
      inputColor: string;
      elementColor: string;
    };
  }
}
