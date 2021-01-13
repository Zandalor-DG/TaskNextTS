import OriginApp, { AppContext } from "next/app";
import { AppPropsType } from "next/dist/next-server/lib/utils";
import { createGlobalStyle } from "styled-components";
import ThemeComponent from "../components/themeComponent";
import { readCookie } from "../utils/readCookies";

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
  console.log(">>your cookies are", context.ctx?.req?.headers.cookie);
  const cookiesData = readCookie("theme", context);

  const appProps = await OriginApp.getInitialProps(context);
  return {
    ...appProps,
    cookiesData,
  };
};

export default App;
