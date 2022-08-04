import { useContext, useEffect, useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import GlobalStyle from './GlobalStyle';
import { Reset } from 'styled-reset';
import styled, { ThemeProvider } from 'styled-components';
import Search from './components/Search';
import { lightTheme } from './theme';
import UserInfo from './components/UserInfo';
import UserProfile from './components/UserProfile';
import { useQuery } from "react-query";
import { fetchUser, GitUserProvider, GitUserContext } from "./api";
import { set } from "react-hook-form";

const Container = styled.div`
  background-color: ${(props)=>props.theme.bgColor};
`

const Wrap = styled.div`
  width: 95vw;
  max-width: 1170px;
  margin: auto;
`

function App() {
  const [log, setLog] = useState("122223")
  const { data, isLoading } = useQuery("user", fetchUser);
  return (
    <ThemeProvider theme={lightTheme}>
      <Container>
        <GlobalStyle/>
        <Wrap>
          <Search/>
          <UserInfo/>
          <UserProfile/>
        </Wrap>
      </Container>
      {/* <ReactQueryDevtools initialIsOpen={false}/> */}
    </ThemeProvider>
  );
}

export default App;
