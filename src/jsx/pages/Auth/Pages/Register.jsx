import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "../Components";
import headerImage from "../Images/rect-header.png";
import { useState } from "react";
import "./index.css";
import { Spinner } from "react-bootstrap";

const Register = () => {
  let navigate = useNavigate();

  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");

  // Error Hooks
  const [NameError, setNameError] = useState("");
  const [PasswordError, setPasswordError] = useState("");
  const [ConfirmPasswordError, setConfirmPasswordError] = useState("");
  const [MobileError, setMobileError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [Error, setError] = useState("");

  // Loading Hooks
  const [loading, setLoading] = useState(false);

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

  const handleRegister = (e) => {
    e.preventDefault();
    setNameError("");
    setPasswordError("");
    setConfirmPasswordError("");
    setMobileError("");
    setEmailError("");
    setError("");
    if (Name === "") {
      setNameError("This field is required");
    } else if (Password === "") {
      setPasswordError("This field is required");
    } else if (ConfirmPassword === "") {
      setConfirmPasswordError("This field is required");
    } else if (Password !== ConfirmPassword) {
      setConfirmPasswordError("password doesn't match");
    } else if (Mobile === "") {
      setMobileError("This field is required");
    } else if (Mobile.length > 11) {
      setMobileError("Enter valid mobile number");
    } else if (Email === "") {
      setEmailError("This field is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email)) {
      setEmailError("Enter valid email");
    } else {
      setLoading(true);
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        username: Name,
        password: Password,
        confirmPassword: ConfirmPassword,
        mobileNumber: Mobile,
        email: Email,
      });

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL + "auth/register",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          if (result.message === "Successfully Registred") {
            navigate("/login");
          } else {
            setError(result.errors[0].msg);
            setLoading(false);
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  return (
    <div className="background-1-login">
      <header
        className="wrapper-login header-login"
        style={{ paddingBottom: "50px" }}
      >
        <span className="text-lg text-light-login text-bold">
          CREATE YOUR ACCOUNT
        </span>
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
            <label
              htmlFor="username"
              className="text-sm text-dark-login text-bold"
            >
              Username
            </label>
            {NameError && (
              <div
                className="animatedView"
                style={{ color: "red", fontSize: 10, transition: "all" }}
              >
                {NameError}
              </div>
            )}
          </div>
          <Input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={Name}
            onChange={(e) => setName(e.target.value)}
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
              className="text-sm text-dark-login text-bold"
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
              type={passType}
              id="password"
              placeholder="Enter your password"
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
        <div className="form-group-login">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <label
              htmlFor="confirm-password"
              className="text-sm text-dark-login text-bold mandate"
            >
              Confirm Password
            </label>
            {ConfirmPasswordError && (
              <div
                className="animatedView"
                style={{ color: "red", fontSize: 10, transition: "all" }}
              >
                {ConfirmPasswordError}
              </div>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <Input
              type={passType}
              id="confirm-password"
              placeholder="Re-enter your password"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
        <div className="form-group-login">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <label
              htmlFor="mobile"
              className="text-sm text-dark-login text-bold"
            >
              Mobile Number
            </label>
            {MobileError && (
              <div
                className="animatedView"
                style={{ color: "red", fontSize: 10, transition: "all" }}
              >
                {MobileError}
              </div>
            )}
          </div>
          <Input
            type="text"
            id="mobile"
            placeholder="Enter your Mobile number"
            value={Mobile}
            onChange={(e) => setMobile(e.target.value)}
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
              htmlFor="email"
              className="text-sm text-dark-login text-bold"
            >
              Email
            </label>
            {EmailError && (
              <div
                className="animatedView"
                style={{ color: "red", fontSize: 10, transition: "all" }}
              >
                {EmailError}
              </div>
            )}
            {Error && (
              <div
                className="animatedView"
                style={{ color: "red", fontSize: 10, transition: "all" }}
              >
                {Error}
              </div>
            )}
          </div>
          <Input
            type="email"
            id="email"
            placeholder="Enter your Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "40px",
          }}
        >
          <Button
            disabled={loading}
            color="primary"
            variant="contained"
            onClick={handleRegister}
          >
            {loading ? (
              <Spinner animation="border" variant="light" />
            ) : (
              "REGISTER"
            )}
          </Button>
        </div>
      </form>

      <p
        className="text-dark-login text-sm"
        style={{
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        Already having an account{" "}
        <Link to="/login" className="text-bold text-primary">
          LOG IN
        </Link>
      </p>
    </div>
  );
};

export default Register;
