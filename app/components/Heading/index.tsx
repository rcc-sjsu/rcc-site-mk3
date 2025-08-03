import { headingProps } from "./type";
import styles from "./Heading.module.css"

export default function Heading({children, align, fontSize, logoPath, logoAlign, logoSize}: headingProps) {
  return (
    <h1 
      style={{ 
        fontSize: fontSize ? fontSize + "rem" : "4.5rem",
        justifyContent: align == "left" ? "left" : "center",
      }} 
      className={styles.container}
    >

      {/* Left-aligned logo */}
      {logoPath && logoAlign=="left" && logoSize &&
        <img src={logoPath}
          style={{ 
            width: logoSize + "rem", 
          }}
          className={styles.logo}
          />
      }
      
      <div
        style={{
          margin: align == "left" ? "0 5rem 0 auto" : "auto"
        }}
       className={styles.heading}
      >
        {children}
      </div>

      {/* Right-aligned logo */}
      {logoPath && logoAlign=="right" && logoSize &&
        <img src={logoPath} 
          style={{ 
            width: logoSize + "rem", 
          }}
          className={styles.logo}
        />
      }
    
    </h1>
  );
}