import React from "react";
import styles from "./Button.module.css";

const Button = ({
  isLoading = false,
  disabled = false,
  color,
  variant,
  children,
  style,
  hasIcon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || !!isLoading}
      style={style}
      className={`${styles.btn} ${styles[`btn-${variant}-${color}`]} ${
        hasIcon && styles["btn-icon"]
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
