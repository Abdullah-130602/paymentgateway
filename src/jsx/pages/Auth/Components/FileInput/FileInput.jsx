import { useRef } from "react";
import styles from "./FileInput.module.css";
import uploadSVG from "../../Images/upload.svg";

const FileInput = ({ value, onChange, ...props }) => {
  const fileInputRef = useRef(null);

  const onClick = (e) => {
    const fileInput = fileInputRef.current;
    console.log("Clicked!");
    if (!fileInputRef) {
      return;
    }

    fileInput.click();
  };

  return (
    <div className={styles["file-input-container"]} onClick={onClick}>
      <span style={{ width: "100%" }}>{props.placeholder}</span>
      <input
        className={styles["file-input"]}
        ref={fileInputRef}
        type="file"
        value={value}
        onChange={onChange}
        {...props}
      />
      <div>
        <img src={uploadSVG} alt="" />
      </div>
    </div>
  );
};

export default FileInput;
