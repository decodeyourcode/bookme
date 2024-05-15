import { useNavigate } from "react-router-dom";
import { Book, Settings, User } from "react-feather";

import useWindowSize from "../../app/hooks/useWindowSize";
import { MOBILE_MAX_WIDTH } from "../../app/app.constants";
import { MobileNavbar, Navbar } from "./Navbar.styles";

export const NavbarComponent = () => {
  const [windowWidth] = useWindowSize();
  const isMobile = windowWidth <= MOBILE_MAX_WIDTH;
  const navigate = useNavigate();
  const handleDiaryNav = () => {
    navigate({
      pathname: "/diary",
    });
  };

  return (
    <>
      {isMobile ? (
        <MobileNavbar.Wrapper>
          <MobileNavbar.Items>
            <MobileNavbar.Item onClick={handleDiaryNav}>
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
            <Navbar.Item onClick={handleDiaryNav}>Diary</Navbar.Item>
            <Navbar.Item>Settings</Navbar.Item>
            <Navbar.Item>Account</Navbar.Item>
          </Navbar.Items>
        </Navbar.Wrapper>
      )}
    </>
  );
};
