/// Menu
//import Metismenu from "metismenujs";
import React, {
  useContext,
  useReducer,
  useState,
} from "react";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import Collapse from "react-bootstrap/Collapse";
/// Link
import { Link } from "react-router-dom";
//import { Dropdown } from "react-bootstrap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { ThemeContext } from "../../../context/ThemeContext";
//import LogoutPage from './Logout';

/// Image

import { MenuList } from "./Menu";
import Logout from "./Logout";

const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const initialState = {
  active: "",
  activeSubmenu: "",
};

const SideBar = () => {
  const {
    iconHover,
    sidebarposition,
    headerposition,
    sidebarLayout,
    ChangeIconSidebar,
  } = useContext(ThemeContext);

  const [state, setState] = useReducer(reducer, initialState);

  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  const handleMenuActive = (status) => {
    setState({ active: status });
    if (state.active === status) {
      setState({ active: "" });
    }
  };
  const handleSubmenuActive = (status) => {
    setState({ activeSubmenu: status });
    if (state.activeSubmenu === status) {
      setState({ activeSubmenu: "" });
    }
  };

  //let scrollPosition = useScrollPosition();
  /// Path
  let path = window.location.pathname;
  path = path.split("/");
  path = path[path.length - 1];
  /// Active menu

  return (
    <div
      onMouseEnter={() => ChangeIconSidebar(true)}
      onMouseLeave={() => ChangeIconSidebar(false)}
      className={`dlabnav ${iconHover} ${
        sidebarposition.value === "fixed" &&
        sidebarLayout.value === "horizontal" &&
        headerposition.value === "static"
          ? hideOnScroll > 120
            ? "fixed"
            : ""
          : ""
      }`}
      //className="dlabnav"
      // className={`dlabnav ${iconHover} ${
      //   sidebarposition.value === "fixed" &&
      //   sidebarLayout.value === "horizontal" &&
      //   headerposition.value === "static"
      //     ? hideOnScroll > 120
      //       ? "fixed"
      //       : ""
      //     : ""
      // }`}
    >
      <PerfectScrollbar
        className="dlabnav-scroll"
        style={{ position: "relative" }}
      >
        <ul className="metismenu" id="menu">
          {MenuList.map((data, index) => {
            let menuClass = data.classsChange;
            if (menuClass === "menu-title") {
              return (
                <li
                  className={`${menuClass} ${
                    state.active === data.title ? "mm-active" : ""
                  }`}
                  key={index}
                >
                  {data.title}
                </li>
              );
            } else {
              return (
                <li
                  className={` ${
                    state.active === data.title ? "mm-active" : ""
                  }`}
                  key={index}
                >
                  {data.content && data.content.length > 0 ? (
                    <>
                      <Link
                        to={"#"}
                        className="has-arrow"
                        onClick={() => {
                          handleMenuActive(data.title);
                        }}
                      >
                        {data.iconStyle}{" "}
                        <span className="nav-text">
                          {data.title}
                          {data.update && data.update.length > 0 ? (
                            <span className="badge badge-xs badge-danger ms-2">
                              {data.update}
                            </span>
                          ) : (
                            ""
                          )}
                        </span>
                      </Link>
                      <Collapse in={state.active === data.title ? true : false}>
                        <ul
                          className={`${
                            menuClass === "mm-collapse" ? "mm-show" : ""
                          }`}
                        >
                          {data.content &&
                            data.content.map((data, index) => {
                              return (
                                <li
                                  key={index}
                                  className={`${
                                    state.activeSubmenu === data.title
                                      ? "mm-active"
                                      : ""
                                  }`}
                                >
                                  {data.content && data.content.length > 0 ? (
                                    <>
                                      <Link
                                        to={data.to}
                                        className={
                                          data.hasMenu ? "has-arrow" : ""
                                        }
                                        onClick={() => {
                                          handleSubmenuActive(data.title);
                                        }}
                                      >
                                        {data.title}
                                      </Link>
                                      <Collapse
                                        in={
                                          state.activeSubmenu === data.title
                                            ? true
                                            : false
                                        }
                                      >
                                        <ul
                                          className={`${
                                            menuClass === "mm-collapse"
                                              ? "mm-show"
                                              : ""
                                          }`}
                                        >
                                          {data.content &&
                                            data.content.map((data, index) => {
                                              return (
                                                <>
                                                  <li key={index}>
                                                    <Link
                                                      className={`${
                                                        path === data.to
                                                          ? "mm-active"
                                                          : ""
                                                      }`}
                                                      to={data.to}
                                                    >
                                                      {data.title}
                                                    </Link>
                                                  </li>
                                                </>
                                              );
                                            })}
                                        </ul>
                                      </Collapse>
                                    </>
                                  ) : (
                                    <Link to={data.to}>{data.title}</Link>
                                  )}
                                </li>
                              );
                            })}
                        </ul>
                      </Collapse>
                    </>
                  ) : (
                    <Link to={data.to}>
                      {data.iconStyle}
                      <span className="nav-text">{data.title}</span>
                    </Link>
                  )}
                </li>
              );
            }
          })}
        </ul>

        {/* <div className="side-bar-profile">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <div className="side-bar-profile-img me-2">
                <img src={user} alt="" />
              </div>
              <div className="profile-info1">
                <h4 className="fs-18 font-w500">Levi Siregar</h4>
                <span>leviregar@mail.com</span>
              </div>
              <div className="profile-button">
                <i className="fas fa-caret-down scale5 text-light"></i>
              </div>
            </div>	
            <div className="d-flex justify-content-between mb-2 progress-info">
              <span className="fs-12"><i className="fas fa-star text-orange me-2"></i>Task Progress</span>
              <span className="fs-12">20/45</span>
            </div>
            <div className="progress default-progress">
              <div className="progress-bar bg-gradientf progress-animated" style={{width: "45%", height:"10px"}} role="progressbar">
                <span className="sr-only">45% Complete</span>
              </div>
            </div>
          </div> */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="copyright"
            style={{ position: "absolute", bottom: 20 }}
          >
            {/* <button
              style={{
                background: "#0AA1DD",
                padding: "12px 40px",
                borderRadius: 5,
                border: "none",
                fontSize: 14,
                fontWeight: "normal",
                color: "#fff",
                display:"flex",
                alignItems:"center",
                gap:5
              }}
            >
              <i className="bi bi-power" style={{fontSize:16}}></i> 
              Log Out
            </button> */}
            <Logout />
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default SideBar;
