import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../Components";
import headerImage from "../Images/rect-header.png";
import "./index.css";
import { useDispatch } from "react-redux";
import {
  loadingToggleAction,
  loginAction,
} from "../../../../store/actions/AuthActions";
import { Spinner } from "react-bootstrap";

const Login = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");

  // Password Visibility Hook
  const [passType, setPassType] = useState("password");

  const hidePassword = (e) => {
    e.preventDefault();
    setPassType("password");
  };
  const showPassword = (e) => {
    e.preventDefault();
    setPassType("text");
  };

  // Error Hooks
  const [UsernameError, setUsernameError] = useState("");
  const [PasswordError, setPasswordError] = useState("");

  // Loading Hooks
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setUsernameError("");
    setPasswordError("");
    e.preventDefault();
    if (UserName === "") {
      setUsernameError("This Field is required");
      setLoading(false);
    } else if (Password === "") {
      setPasswordError("This Field is required");
      setLoading(false);
    } else if (Password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      setLoading(false);
    } else {
      setLoading(true);
      dispatch(loadingToggleAction(true));
      dispatch(loginAction(UserName, Password, Navigate));
      setLoading(false);
    }
  };

  return (
    <div className="background-1-login">
      <header
        className="wrapper-login header-login"
        style={{ paddingBottom: "100px" }}
      >
        <span className="text-lg text-bold text-light-login">LOG IN</span>
        <img src={headerImage} alt="" />
      </header>
      <form className="wrapper-login card-login animatedView">
        <div className="form-group-login">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="name" className="text-sm text-bold text-dark-login">
              Username
            </label>
            {UsernameError && (
              <div
                className="animatedView"
                style={{ color: "red", fontSize: 10, transition: "all" }}
              >
                {UsernameError}
              </div>
            )}
          </div>
          <Input
            ref={usernameInputRef}
            type="text"
            placeholder="Enter your name"
            id="name"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="form-group-login">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <label
              htmlFor="password"
              className="text-sm text-bold text-dark-login"
            >
              Password
            </label>
            {PasswordError && (
              <div
                className="animatedView"
                style={{ color: "red", fontSize: 10, transition: "all" }}
              >
                {PasswordError}
              </div>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <Input
              ref={passwordInputRef}
              type={passType}
              placeholder="Enter your password"
              id="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{ position: "absolute", top: 15, right: 15 }}>
              {passType === "password" ? (
                <button onClick={showPassword}>
                  <i
                    className="bi bi-eye-slash-fill h2"
                    style={{ fontSize: "2rem", color: "#A1A1A1" }}
                  ></i>
                </button>
              ) : (
                <button onClick={hidePassword}>
                  <i
                    className="bi bi-eye-fill h2"
                    style={{ fontSize: "2rem", color: "#A1A1A1" }}
                  ></i>
                </button>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <Spinner animation="border" variant="light" /> : "LOGIN"}
          </Button>
        </div>

        <div style={{ textAlign: "right", paddingTop: "40px" }}>
          <Link className="link-login text-sm text-dark-login">
            Forgot Your password?
          </Link>
        </div>
      </form>

      <p
        className="wrapper-login text-sm"
        style={{
          margin: "auto",
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        Don't you have an account?{" "}
        <Link to="/page-register" className="text-primary text-bold">
          REGISTER
        </Link>
      </p>
    </div>
  );
};

export default Login;
