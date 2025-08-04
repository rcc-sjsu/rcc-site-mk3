import BackgroundGradient from "@/app/components/BackgroundGradient";
import Heading from "@/app/components/Heading";
import styles from "./page.module.css"

export default function HomePage() {
  return (
    <main className="mt-40 overflow-x-hidden h-500">

      <section className={styles.RCCSection}>

        <div className={styles.RCCHeadingParagraph}>

          <div className={styles.RCCHeading}>
            <Heading> Responsible Computing Club </Heading>
          </div>

          <p className={styles.RCCParagraph}>
            The Responsible Computing Club (RCC) at SJSU, partnering with Mozilla, empowers students to shape the future of tech. 
            We unite students to explore the ethics of tech through hands-on, 
            cross-disciplinary projects. Together, we’re shaping a more responsible and inclusive future. Connect with us below!
          </p>

          <div className={styles.socialContainer}>

            <a href="">
              <img src="/icons/home/Instagram.png"></img>
            </a>
            <a href="">
              <img src="/icons/home/LinkedIn.png"></img>
            </a>
            <a href="">
              <img src="/icons/home/Mail.png"></img>
            </a>
            <a href="">
              <img src="/icons/home/Discord.png"></img>
            </a>

          </div>

        </div>

        <div className={styles.RCCImageContainer}>
          <img className={styles.lightbulbIcon} src="/icons/lightbulb.svg"/>
          <div className={styles.mozillaLogo}/>
          <img className={styles.smileyIcon} src="/icons/smiley-icon.svg"/>
        </div>

      </section>

      <BackgroundGradient className={styles.RCCGradient} color="purple"/>

      <section className={styles.missionStatementSection}>
        
        <div className={styles.groupPhoto}/>
        
        <div className={styles.missionHeadingParagraph}>

          <div className={styles.RCCHeading}>
            <Heading> Our Mission Statement </Heading>
          </div>

          <p className={styles.missionStatementParagraph}>
            RCC’s mission is to make responsible computing 
            <strong><em> relevant to everyone </em></strong> 
            and 
            <strong><em> applicable to their everyday lives</em></strong>, 
            no matter their background. In order to harness our mission of inviting 
            <strong><em> all majors </em></strong>
            (and minors) to hone their 
            <strong><em> collective strengths</em></strong>, we've created 
            <strong><em> dedicated teams </em></strong> focused on areas like workshops, consulting, marketing, web dev, and so much more! 
          </p>
          
        </div>

      </section>


      <div className={styles.msGradientContainer}>
        <BackgroundGradient className={styles.missionStatementGradient} color="purple"/>
      </div>

    </main>
  );
}
