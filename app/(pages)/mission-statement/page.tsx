import Image from "next/image";

export default function MissionStatement() {
    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
            <div className="mb-6 md:mb-0 md:mr-8 flex justify-center">
                <Image
                    src="/images/club.jpg"
                    alt="RCC"
                    width={300}
                    height={300}
                    className="rounded-full object-cover w-64 h-64 md:w-[500px] md:h-[500px]"
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Mission Statement</h1>
                <p>
                    RCC's mission is to make responsible computing <span className="font-bold italic">relevant to everyone</span> and <span className="font-bold italic">applicable to their everyday lives</span>, no matter their background. In order to harness our mission of inviting <span className="font-bold italic">all majors</span> (and minors) to hone their <span className="font-bold italic">collective strengths</span>, we've created <span className="font-bold italic">dedicated teams</span> focused on areas like workshops, consulting, marketing, web dev, and so much more! 
                </p>
            </div>
        </div>
    );
}
