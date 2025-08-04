import BackgroundGradient from "@/app/components/BackgroundGradient";
import Heading from "@/app/components/Heading";
import aboutStyles from "./about.module.css"

export default function HomePage() {
  

  return (
    <main className="mt-10 pt-50 overflow-clip h-500">

      <section className={aboutStyles.RCCSection}>

        <div className={aboutStyles.RCCText}>

          <div className={aboutStyles.RCCHeading}>
            <Heading> Responsible Computing Club </Heading>
          </div>

          <p className={aboutStyles.RCCParagraph}>
            The Responsible Computing Club (RCC) at SJSU, partnering with Mozilla, empowers students to shape the future of tech. 
            We unite students to explore the ethics of tech through hands-on, 
            cross-disciplinary projects. Together, we’re shaping a more responsible and inclusive future. Connect with us below!
          </p>

          <div className={aboutStyles.socialContainer}>

            <a href="">
              <img src="/icons/home/Instagram.svg"></img>
            </a>
            <a href="">
              <img src="/icons/home/LinkedIn.svg"></img>
            </a>
            <a href="">
              <img src="/icons/home/Mail.svg"></img>
            </a>
            <a href="">
              <img src="/icons/home/Discord.svg"></img>
            </a>

          </div>

        </div>

        <div className={aboutStyles.RCCImageContainer}>
          <img className={aboutStyles.lightbulbIcon} src="/icons/lightbulb.svg"/>
          <div className={aboutStyles.mozillaLogo}/>
          <img className={aboutStyles.smileyIcon} src="/icons/smiley-icon.svg"/>
        </div>

      </section>

      <div className={aboutStyles.RCCGradientContainer}>
        <BackgroundGradient className={aboutStyles.RCCGradient} color="purple"/>
      </div>

      {/* <section className={styles.missionStatementSection}>
        
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
      </div> */}

    </main>
  );
}
