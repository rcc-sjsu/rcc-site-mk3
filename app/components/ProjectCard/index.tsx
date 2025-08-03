import Divider from "../Divider";
import { projectProps } from "./type";
import styles from "./ProjectCard.module.css"

export default function ProjectCard({color, photoURL, projectName, teamName, description, teamMembers}: projectProps) {
  return (
    <section 
      style={{
        boxShadow: color == "blue" ? "0px 4px 8px #708CCD" : color == "pink" ? "0px 4px 8px #9D61BB" : ""
      }} 
      className={styles.container}
    >

      {/* Photo and Description Container */}
      <div>

        {/* Photo */}
        <div 
          style={{ 
            backgroundColor: color == "blue" ? "#E2E8FD" : color == "pink" ? "#F4DFF8" : "" 
          }}
          className={styles.photoContainer}
        >
          <img className={styles.photo} src={photoURL}/>
        </div>

        {/* Description */}
        <div className={styles.projectDetails}>
        
          <h1 className={styles.projectName}>
            {projectName}
          </h1>
          
          <h2 className={styles.teamName}>
            by {teamName}
          </h2>
          
          <p className={styles.description}>
            {description}
          </p>

        </div>
      </div>

      {/* Team Members Container */}
      <div className={styles.teamContainer}>

        <Divider/>

        {/* Member Names */}
        <div className={styles.teammateContainer}>

          {Object.entries(teamMembers).map(([position, names]) => (
            <p className={styles.teammate} key={position}>
              <strong >{position}: </strong>
              <text>{names.join(", ")}</text>
            </p>
          ))}
          
        </div>

      </div>
      
    </section>

  );
}
