import trophyImage from "./../../../public/icons/trophy.svg"
import tba from "./../../../public/images/workshop.jpg"
import "./../../page.module.css"
import "./../../globals.css"

export default function Portfolio() {
  return ( 
    <body>
      <div className="flex justify-center mt-[10rem] portfolio-s:no-flex portfolio-s:justify-start portfolio-s:mt-[4rem]">
        <div className="inline-flex">
          <h1 className="ml-[2rem] w-[39rem] text-[7rem] portfolio-s:ml-[0rem] portfolio-s:text-[86px] -mr-[1rem] portfolio-s:w-[20rem] font-bold"> 
            Our Projects
          </h1>
        </div>
        <img className="-mt-[5rem] w-[11rem]  portfolio-s:-mt-[1rem] portfolio-s:w-[14rem]" src={trophyImage}></img>
      </div>
      
      <hr className="mt-[1.5rem] mx-auto w-[45rem] portfolio-s:mt-[0rem] portfolio-s:ml-[0rem] portfolio-s:w-[35rem] border-[0.2rem] border-[#BF86D8] bg-[#BF86D8]"></hr>

      <div id="portfolioProjects" className="ml-[15vw] portfolioMQ:grid-cols-3 portfolioMQ:gap-[2.5em] portfolioMQ:ml-[0rem] grid portfolio-s:grid-cols-2 gap-y-[4.5rem] text-center portfolio-s:ml-[2.5rem] mt-[3rem]"> 

        <div className="odd w-[65vw] h-[61vh] -ml-[2rem] portfolio-s:w-[41vw] portfolio-s:h-[50rem] mt-[2rem] portfolio-s:mt-[0rem] portfolio-s:ml-[0rem] portfolio-s:h-[48rem] portfolioMQ:w-[29vw] portfolioMQ:h-[38rem] bg-[#BF86D8]">
        
          <div className="text-[3.3rem] portfolio-s:text-[2.3rem] portfolioMQ:text-[1.5rem] mt-[1rem]">
            <i><b>Project Title</b></i>
          </div>

          <div className="text-[2.8rem] portfolio-s:text-[1.8rem] portfolioMQ:text-[1.3rem] font-medium">
            Committee: Committee Name
          </div>

          <img className="w-[56vw] h-[24rem] portfolioMQ:w-[24rem] portfolioMQ:h-[15rem] portfolio-s:w-[36vw] portfolio-s:h-[18.7rem] oddBorder m-auto mt-[1rem] " src={trophyImage.src}></img>
          
          <div className="text-[2.4rem] portfolio-s:text-[1.6rem] portfolioMQ:text-[1.15rem] mt-[1.5rem]">
            Brief project description...
          </div>

        </div>

        <div className="even w-[65vw] h-[61vh] -ml-[2rem] portfolio-s:w-[41vw] portfolio-s:h-[50rem] mt-[2rem] portfolio-s:mt-[0rem] portfolio-s:ml-[0rem] portfolio-s:h-[48rem] portfolioMQ:w-[29vw] portfolioMQ:h-[38rem] bg-[#BF86D8]">
        
          <div className="text-[3.3rem] portfolio-s:text-[2.3rem] portfolioMQ:text-[1.5rem] mt-[1rem]">
            <i><b>Project Title</b></i>
          </div>

          <div className="text-[2.8rem] portfolio-s:text-[1.8rem] portfolioMQ:text-[1.3rem] font-medium">
            Committee: Committee Name
          </div>

          <img className="w-[56vw] h-[24rem] portfolioMQ:w-[24rem] portfolioMQ:h-[15rem] portfolio-s:w-[36vw] portfolio-s:h-[18.7rem] evenBorder m-auto mt-[1rem] " src={tba.src}></img>
          
          <div className="text-[2.4rem] portfolio-s:text-[1.6rem] portfolioMQ:text-[1.15rem] mt-[1.5rem]">
            Brief project description...
          </div>

        </div>

        <div className="odd w-[65vw] h-[61vh] -ml-[2rem] portfolio-s:w-[41vw] portfolio-s:h-[50rem] mt-[2rem] portfolio-s:mt-[0rem] portfolio-s:ml-[0rem] portfolio-s:h-[48rem] portfolioMQ:w-[29vw] portfolioMQ:h-[38rem] bg-[#BF86D8]">
        
          <div className="text-[3.3rem] portfolio-s:text-[2.3rem] portfolioMQ:text-[1.5rem] mt-[1rem]">
            <i><b>Project Title</b></i>
          </div>

          <div className="text-[2.8rem] portfolio-s:text-[1.8rem] portfolioMQ:text-[1.3rem] font-medium">
            Committee: Committee Name
          </div>

          <img className="w-[56vw] h-[24rem] portfolioMQ:w-[24rem] portfolioMQ:h-[15rem] portfolio-s:w-[36vw] portfolio-s:h-[18.7rem] oddBorder m-auto mt-[1rem] " src={tba.src}></img>
          
          <div className="text-[2.4rem] portfolio-s:text-[1.6rem] portfolioMQ:text-[1.15rem] mt-[1.5rem]">
            Brief project description...
          </div>

        </div>

        

      </div>

    </body>
  );
}
