import BackgroundGradient from "@/app/components/BackgroundGradient";
import Heading from "@/app/components/Heading";

export default function HomePage() {
  return (
    <main>

      <section className="flex mt-20 gap-15 w-fit mx-auto items-center">
        <section className="max-w-160">
          <Heading> Responsible Computing Club </Heading>
          <p className="mt-8 mb-12 w-full">
            The Responsible Computing Club (RCC) at SJSU, partnering with Mozilla, empowers students to shape the future of tech. 
            We unite students to explore the ethics of tech through hands-on, 
            cross-disciplinary projects. Together, we’re shaping a more responsible and inclusive future. Connect with us below!
          </p>
          <div className="flex gap-27 w-150">
            <a className="w-10" href="">
              <img src="/icons/home/Instagram.png"></img>
            </a>
            <a className="w-10" href="">
              <img src="/icons/home/LinkedIn.png"></img>
            </a>
            <a className="w-10" href="">
              <img src="/icons/home/Mail.png"></img>
            </a>
            <a className="w-10" href="">
              <img src="/icons/home/Discord.png"></img>
            </a>
          </div>
        </section>

        <div>
          <img className="w-36 -mb-40" src="/icons/lightbulb.svg"/>
          <div className="w-110 bg-center bg-cover aspect-square rounded-[50%] bg-[url(/images/home/mozilla_logo.png)]"/>
          <img className="w-48 ml-auto -mt-31" src="/icons/smiley-icon.svg"/>
        </div>
      </section>

      <div className="-mt-130 flex w-fit justify-center mx-auto">
        <BackgroundGradient width={60} height={35}></BackgroundGradient>
      </div>

      <section className="mt-50 mb-40 flex gap-10 items-center w-fit mx-auto">
        
        <div className="w-105 bg-center bg-cover aspect-square rounded-[50%] bg-[url(/images/home/group_photo.jpg)]"/>
        
        <div className="text-center">

          <Heading> Our Mission Statement </Heading>

          <p className="max-w-170 mx-auto mt-8">
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

      <div className="-mt-167 mx-auto w-347 mb-30">
        <BackgroundGradient width={41} height={37}></BackgroundGradient>
      </div>

    </main>
  );
}
