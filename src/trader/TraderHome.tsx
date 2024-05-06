import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Book, Settings, User } from "react-feather";
import Diary from "./Diary";

function TraderHome() {

    const [windowDimension, setWindowDimension] = useState(0);
    
    useEffect(() => {
        setWindowDimension(window.innerWidth);
      }, []);
    
    useEffect(() => {
        function handleResize() {
            setWindowDimension(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowDimension <= 640;

    return (
        <div>
             <Diary/>
        <Styles.Wrapper>
            <CSSReset />
            {isMobile ? (
        <MobileNavbar.Wrapper>
          <MobileNavbar.Items>
            <MobileNavbar.Item>
              <MobileNavbar.Icon>
                <Book size={16} />
              </MobileNavbar.Icon>
              Diary
            </MobileNavbar.Item>
            <MobileNavbar.Item>
              <MobileNavbar.Icon>
                <Settings size={16} />
              </MobileNavbar.Icon>
              Settings
            </MobileNavbar.Item>
            <MobileNavbar.Item>
              <MobileNavbar.Icon>
                <User size={16} />
              </MobileNavbar.Icon>
              Account
            </MobileNavbar.Item>
          </MobileNavbar.Items>
        </MobileNavbar.Wrapper>
      ) : (
        <Navbar.Wrapper>
          <Navbar.Logo>Logo</Navbar.Logo>
          <Navbar.Items>
            <Navbar.Item>Diary</Navbar.Item>
            <Navbar.Item>Settings</Navbar.Item>
            <Navbar.Item>Account</Navbar.Item>
          </Navbar.Items>
        </Navbar.Wrapper>
      )}
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

const Navbar = {
    Wrapper: styled.nav`
      flex: 1;
  
      align-self: flex-start;
  
      padding: 1rem 3rem;
  
      display: flex;
      justify-content: space-between;
      align-items: center;
  
      background-color: white;
    `,
    Logo: styled.h1`
      border: 1px solid gray;
      padding: 0.5rem 1rem;
    `,
    Items: styled.ul`
      display: flex;
      list-style: none;
    `,
    Item: styled.li`
      padding: 0 1rem;
      cursor: pointer;
    `,
  };

  const MobileNavbar = {
    Wrapper: styled(Navbar.Wrapper)`
      align-self: flex-end;
  
      justify-content: center;
    `,
    Items: styled(Navbar.Items)`
      flex: 1;
      padding: 0 2rem;
  
      justify-content: space-around;
    `,
    Item: styled(Navbar.Item)`
      display: flex;
      flex-direction: column;
      align-items: center;
  
      font-size: 1.2rem;
    `,
    Icon: styled.span``,
  };

export default TraderHome;