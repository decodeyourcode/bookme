import styled, { createGlobalStyle } from "styled-components";
import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../components/Navbar/Navbar.component";

function TraderHome() {
  return (
    <div>
      <Styles.Wrapper>
        <CSSReset />
        <NavbarComponent />
        <Outlet />
      </Styles.Wrapper>
    </div>
  );
}

const Styles = {
  Wrapper: styled.main`
    display: flex;
    background-color: #eeeeee;
    height: 100vh;
  `,
};

const CSSReset = createGlobalStyle`
  *,
  *::before, 
  *::after {
    margin: 0; 
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; /*1rem = 10px*/
    box-sizing: border-box;    
  }  

  body {
    font-size: 1.4rem;
    font-family: sans-serif;  
  }
`;
export default TraderHome;
