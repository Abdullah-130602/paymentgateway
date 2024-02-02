import React from "react";
import { connect, useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { Logout } from "../../../store/actions/AuthActions";
import { isAuthenticated } from "../../../store/selectors/AuthSelectors";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function LogoutPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onLogout() {
    dispatch(Logout(navigate));
    // window.location.reload();
  }
  return (
    <>
      <button
        className="dropdown-item ai-icon"
        style={{
          display: "flex",
          alignItems: "center",
          background: "#0AA1DD",
          padding: "12px 13px",
          borderRadius: 5,
          border: "none",
          fontSize: 14,
          fontWeight: "normal",
          color: "#fff",
          gap: 5,
          // margin:5
        }}
        onClick={onLogout}
      >
        <i className="bi bi-power" style={{fontSize:16}}></i>
        <span className="ms-2">Logout </span>
      </button>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default withRouter(connect(mapStateToProps)(LogoutPage));
