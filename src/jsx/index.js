import React, { useContext } from "react";

/// React router dom
import { Routes, Route, Outlet } from "react-router-dom";

/// Css
import "./index.css";

/// Layout
import Nav from "./layouts/nav";
import ScrollToTop from "./layouts/ScrollToTop";
/// Dashboard
import Home from "./components/Dashboard/Home";

///Demo
import Theme1 from "./components/Dashboard/Demo/Theme1";

/// App
import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
import EditProfile from "./components/AppsMenu/AppProfile/EditProfile";

/// Pages
import RequirementList from "./components/Dashboard/Registration/RequirementList";
import CreateAccount from "./components/Dashboard/Registration/CreateAccount";
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
import { ThemeContext } from "../context/ThemeContext";
import Company from "./components/Dashboard/Company/Company";
import SuperAdminSetting from "./components/Dashboard/SuperAdminSetting/SuperAdminSetting";

const Markup = () => {
  //const { menuToggle } = useContext(ThemeContext);
  const allroutes = [
    /// Dashboard
    { url: "", component: <Home /> },
    { url: "dashboard", component: <Home /> },

    ///Demo
    { url: "theme1", component: <Theme1 /> },

    //Content,

    /// Apps
    { url: "app-profile", component: <AppProfile /> },
    { url: "edit-profile", component: <EditProfile /> },

    // Registration
    { url: "requirement-form-list", component: <RequirementList /> },
    {
      url: "create-account/:id/:userId/:username",
      component: <CreateAccount />,
    },

    // Company
    { url: "company", component: <Company /> },

    // Seeting
    { url: "settings", component: <SuperAdminSetting /> },
  ];
  // let path = window.location.pathname;
  // path = path.split("/");
  // path = path[path.length - 1];

  // let pagePath = path.split("-").includes("page");

  return (
    <>
      <Routes>
        <Route path="page-lock-screen" element={<LockScreen />} />
        <Route path="page-error-400" element={<Error400 />} />
        <Route path="page-error-403" element={<Error403 />} />
        <Route path="page-error-404" element={<Error404 />} />
        <Route path="page-error-500" element={<Error500 />} />
        <Route path="page-error-503" element={<Error503 />} />
        <Route path="/*" element={<Error404 />} />
        <Route element={<MainLayout />}>
          {allroutes.map((data, i) => (
            <Route
              key={i}
              exact
              path={`${data.url}`}
              element={data.component}
            />
          ))}
        </Route>
      </Routes>
      {/* <Setting />   */}
      <ScrollToTop />
    </>
  );
};

export function MainLayout() {
  const { menuToggle, sidebariconHover } = useContext(ThemeContext);
  return (
    <div
      id="main-wrapper"
      className={`show ${sidebariconHover ? "iconhover-toggle" : ""} ${
        menuToggle ? "menu-toggle" : ""
      }`}
    >
      <Nav />
      <div
        className="content-body"
        style={{ minHeight: window.screen.height - 45 }}
      >
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Markup;
