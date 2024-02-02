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

/// App
import AppProfile from "./components/AppsMenu/AppProfile/AppProfile";
import EditProfile from "./components/AppsMenu/AppProfile/EditProfile";

/// Pages
import LockScreen from "./pages/LockScreen";
import Error400 from "./pages/Error400";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";
import Error503 from "./pages/Error503";
import { ThemeContext } from "../context/ThemeContext";
import CreateInvoice from "./components/Dashboard/Invoice/CreateInvoice";
import InvoiceList from "./components/Dashboard/Invoice/InvoiceList";
import Customers from "./components/Dashboard/Customers/Customers";
import Users from "./components/Dashboard/Users/Users";

const Markup = () => {
  //const { menuToggle } = useContext(ThemeContext);
  const allroutes = [
    /// Dashboard
    { url: "", component: <Home /> },
    { url: "dashboard", component: <Home /> },

    /// Apps
    { url: "app-profile", component: <AppProfile /> },
    { url: "edit-profile", component: <EditProfile /> },

    // Invoice
    { url: "create-new-invoice", component: <CreateInvoice /> },
    { url: "invoice-list", component: <InvoiceList /> },

    // Customers
    { url: "customers", component: <Customers /> },

    // Users
    { url: "users", component: <Users /> },

    // requirement
    // { url: "/registration/:slug", component: <Requirements /> },
  ];
  // let path = window.location.pathname;
  // path = path.split("/");
  // path = path[path.length - 1];

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
      <ScrollToTop />
    </>
  );
};

function MainLayout() {
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
    </div>
  );
}

export default Markup;
