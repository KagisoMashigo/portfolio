import IndexPage from './components';
import React from "react";
import  {useDarkMode} from "./components/useDarkMode"
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/themes"
import Toggle from "./components/Toggler"


function App() {

  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>

  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles/>
    <div className="App">
    <Toggle theme={theme} toggleTheme={themeToggler} />
      <IndexPage>
        
      </IndexPage>
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
