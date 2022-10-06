import React, { createContext } from "react";

/* Logo */
import logo from "../../images/domatio-logo.png";
import darkLogo from "../../images/domatio-logo-dark.png";

/* Components */
import TextForm from "./components/TextForm";
import MenuTheme from "./components/Menu&Theme";
import MenuModal from "./components/MenuModal";

/* Hook */
import Hook from "./hook";
// Context for Search box toggle only for small devices
export const searchContext = createContext({
  searchToggle: false,
  setSearchToggle: () => {},
});

export const menuContext = createContext({
  menuToggle: false,
  setMenuToggle: () => {},
  menuContent: "",
  setMenuContent: () => {},
});

const NavBar = () => {
  const { darkMode, value, menuValue } = Hook();

  return (
    <nav className="navbar">
      <menuContext.Provider value={menuValue}>
        <div className="container d-flex">
          <a href="/">
            <img
              className={darkMode ? "navbar--logo d-none" : "navbar--logo"}
              src={logo}
              alt="domatio-logo"
            />
            <img
              className={darkMode ? "navbar--logo" : "navbar--logo d-none"}
              src={darkLogo}
              alt="domatio-logo"
            />
          </a>

          <searchContext.Provider value={value}>
            <div className="navbar--content d-flex">
              <TextForm />
              <MenuTheme />
            </div>
          </searchContext.Provider>
        </div>

        <MenuModal />
      </menuContext.Provider>
    </nav>
  );
};

export default NavBar;
