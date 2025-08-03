import { gradientProps } from "./type";
import styles from "./BackgroundGradient.module.css"

export default function BackgroundGradient({color, width, height}: gradientProps) {
  return (
    <div className={styles.gradientContainer}>
      <div
        className={styles.gradient}
        style={{
          backgroundColor: color == "blue" ? "#E2E8FD" : "#DEB8FE",
          width: width ? width + "rem" : "10rem",
          height: height ? height + "rem" : "10rem",
          opacity: color == "blue" ? "1" : "0.6",
        }}
      />
    </div>
  );
}