import { createContext, useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, nightTheme } from "../interfaces/Data/theme";

interface Props {
  cookiesData: string;
}

export const UserThemeContext = createContext(() => {});

const ThemeComponent: React.FC<Props> = ({ cookiesData, children }) => {
  const [state, setState] = useState(cookiesData === "light");

  useEffect(() => {
    if (state) {
      document.cookie = "theme=light";
    } else {
      document.cookie = "theme=night";
    }
  }, [state]);

  const themeChangeHandler = () => {
    setState((prevState) => !prevState);
  };

  return (
    <ThemeProvider theme={state ? lightTheme : nightTheme}>
      <GlobalStyle />
      <UserThemeContext.Provider value={themeChangeHandler}>
        {children}
      </UserThemeContext.Provider>
    </ThemeProvider>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
  }
`;

export default ThemeComponent;

// () => {
//   const themeHandler = useContext(ThemeContext);

//   const someHandler = () => {
//     themeHandler();
//   };
// };

// const Div = styled.div`
//   background: ${(props) => props.theme.background};
// `;
