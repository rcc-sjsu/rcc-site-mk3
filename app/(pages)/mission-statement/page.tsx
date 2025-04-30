import Image from "next/image";

export default function MissionStatement() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Image
                src="/images/club.jpg"
                alt="RCC"
                width={300}
                height={300}
                className="rounded-full object-cover"
                style={{ width: '500px', height: '500px' }}
            />
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Our Mission Statement</h1>
                <p className="text-center">
                    RCC's mission is to make responsible computing relevant to everyone and applicable to their everyday lives, no matter their background. In order to harness our mission of inviting all majors (and minors) to hone their collective strengths, we've created dedicated teams focused on areas like workshops, consulting, marketing, web dev, and so much more! 
                </p>
            </div>
        </div>
    );
}