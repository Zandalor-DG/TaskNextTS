import OriginApp, { AppContext } from "next/app";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import { createGlobalStyle } from "styled-components";
import ThemeComponent from "../src/components/themeComponent";
import { readCookie } from "../src/utils/readCookies";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

interface Props extends AppPropsType {
  cookiesData: string;
}
const App = ({ cookiesData, Component, pageProps }: Props) => {
  return (
    <>
      <GlobalStyle />
      <ThemeComponent cookiesData={cookiesData}>
        <Component {...pageProps} />
      </ThemeComponent>
    </>
  );
};

App.getInitialProps = async (context: AppContext) => {
  const cookiesData = readCookie("theme", context);

  const appProps = await OriginApp.getInitialProps(context);
  return {
    ...appProps,
    cookiesData,
  };
};

export default App;
