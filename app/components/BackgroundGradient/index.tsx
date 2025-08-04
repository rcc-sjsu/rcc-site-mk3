import { gradientProps } from "./type";
import "./BackgroundGradient.module.css"

export default function BackgroundGradient({className, secondClass, style, color, width, height}: gradientProps) {
  
  // const defaultStyle: React.CSSProperties = {
  //   backgroundColor: color == "blue" ? "#E2E8FD" : "#DEB8FE",
  //   width: "10rem",
  //   height: "10rem",
  //   opacity: color == "blue" ? "1" : "0.6",
  //   filter: "blur(4rem)",
  //   borderRadius: "50%",
  //   zIndex: "-1"
  // }

  // const combinedStyle = {
  //   ...defaultStyle,
  //   ...style
  // }
  
  return (
    
    // <div 
    // style={{
    // width: width ? width + "rem" : "10rem",
    //       height: height ? height + "rem" : "10rem",
    // }}
    // className={styles.gradientContainer}>
    <div
    className={className}
    style={{
      display: "flex",
      // width: width ? width + "rem" : "10rem",
      // height: height ? height + "rem" : "10rem",
    }}
    >
      <div
        className={secondClass}
        style={{
          // combinedStyle
          backgroundColor: color == "blue" ? "#E2E8FD" : "#DEB8FE",
          // width: width ? width + "rem" : "10rem",
          // height: height ? height + "rem" : "10rem",
          width: "100%",
          height: "100%",
          opacity: color == "blue" ? "1" : "0.6",
          filter: "blur(7rem)",
          zIndex: "-1",
          borderRadius: "50%"
        }}
      />
    </div>
  );
}
