import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing:border-box;
       font-family: 'Nunito Sans', sans-serif;
       font-size: 62.5%;

       a{
            text-decoration:none;
       }
   }
   #root{
       margin:0 auto;
   }

   ::-webkit-scrollbar {
    width: 6px;
    height: 5px;
  }

  ::-webkit-scrollbar-corner {
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: hsl(0, 0%, 98%);
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: hsl(207, 26%, 17%);
  }
`;

export default GlobalStyle;
