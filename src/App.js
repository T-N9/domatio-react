import React from "react";

/* Components */
import { MainSection, NavBar, SideBar } from "./components";

/* Hook */
import HookApp from "./hook.app";

const App = () => {
  const {
    dodata,
    categoryId,
    themeValue,
    darkMode,
    categoryTagContextValue,
    DataContext,
    CategoryTagContext,
    ThemeContext,
  } = HookApp();
  return (
    <>
      {/* Data from API context */}
      <DataContext.Provider value={dodata}>
        {/* Theme setting layer or wrapper */}
        <div className={darkMode ? "dark" : ""}>
          {/* Main Content */}
          <main>
            {/* div for scroll to top */}
            <span id="up"></span>
            <ThemeContext.Provider value={themeValue}>
              <NavBar />
            </ThemeContext.Provider>
            <CategoryTagContext.Provider value={categoryTagContextValue}>
              <SideBar />
              <MainSection categoryId={categoryId} />
            </CategoryTagContext.Provider>
          </main>
          {/* Loading Content before main content */}
          <div className="loading-content">
            <div className="loadingio-spinner-spin-zvuwi6ogw3s">
              <div className="ldio-svfroiph48k">
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DataContext.Provider>
    </>
  );
};

export { App };
