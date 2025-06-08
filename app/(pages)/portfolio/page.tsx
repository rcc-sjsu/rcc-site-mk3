import styles from "./page.module.css"


export default function Portfolio() {
  return ( 
    <body>
      <div className="flex flex-wrap mt-[6rem]">
        <h1 id={styles.title} className="my-auto ml-[3rem] mt-auto w-[16rem]"> 
          Our Projects
        </h1>
        <img src="/icons/trophy.svg"></img>
      </div>

      <div className="ml-[3rem] w-[31rem]">
        <hr className="border-[0.17rem] border-[#BF86D8] bg-[#BF86D8]"></hr>
      </div>

      <div className="lg:w-[100vw] flex flex-wrap gap-[2rem] text-center justify-center mt-[3rem]"> 

        <div className={styles.oddProjectTile}>
        
          <div className={styles.projectTitle}>
            <i><b>Project Title</b></i>
          </div>

          <div className={styles.committeeName}>
            Committee: Committee Name
          </div>

          <img className={styles.oddProjectImage} src="/images/PortfolioProjectPlaceholder.png"></img>
          
          <div className="">
            Brief project description...
          </div>

        </div>

        <div className={styles.evenProjectTile}>
        
          <div className={styles.projectTitle}>
            <i><b>Project Title</b></i>
          </div>

          <div className={styles.committeeName}>
            Committee: Committee Name
          </div>

          <img className={styles.evenProjectImage} src="/images/PortfolioProjectPlaceholder.png"></img>
          
          <div className="">
            Brief project description...
          </div>

        </div>

        <div className={styles.oddProjectTile}>
        
          <div className={styles.projectTitle}>
            <i><b>Project Title</b></i>
          </div>

          <div className={styles.committeeName}>
            Committee: Committee Name
          </div>

          <img className={styles.oddProjectImage} src="/images/PortfolioProjectPlaceholder.png"></img>
          
          <div className="">
            Brief project description...
          </div>

        </div>

       
      
      </div>
      
    </body>

  );
}
