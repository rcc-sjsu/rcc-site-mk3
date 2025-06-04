import Image from "next/image"
import styles from "./page.module.css";

export default function Committees() {
    return (
        <>
            <div className="p-20">

                <h1>Teams</h1>
                <hr />

                <div className="grid grid-cols-5 gap-4 px-15 py-20">
                    <div className="col-span-2 content-center">
                        <Image src={'/images/case.jpg'} alt="case team photo" className = {styles.image} width='450' height='450' />
                    </div>

                    <div className="col-span-3">
                        <div className="justify-items-end">
                            <div>
                                <h2> Case </h2>
                            </div>

                            <div className="justify-items-end">
                                <p className="text-right">
                                    The Case Committee organizes case competitions — academic challenges where students work together to solve real-world case studies.
                                    Think hackathons, but designed for all majors, not just STEM! These competitions allow students to apply their unique skills and knowledge
                                    while collaborating across interdisciplinary fields.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr ></hr>

                <div className="grid grid-cols-5 gap-4 px-15 py-20">
                    <div className="col-span-3">
                        <div>
                            <div>
                                <h2> Marketing </h2>
                            </div>

                            <div>
                                <ul>
                                    <li>Web dev: The Web Dev team is responsible for creating, managing, and maintaining this website! They handle the technical aspects of the club's
                                        marketing needs by ensuring the site has a functional and user friendly interface.
                                    </li>
                                    <li>Blogs: The Blog team writes content published on Mozilla to promote RCC and showcase the club's
                                        impact in the field of responsible computing.
                                    </li>
                                    <li>Social media: The Social Media team creates promotional materials and drives outreach
                                        efforts on social media platforms such as Instagram, TikTok, Linkedin, and Discord.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 content-center">
                        <Image src={'/images/marketing.jpg'} alt="marketing team photo" className = {styles.image} width='450' height='450' />
                    </div>
                </div>

                <hr></hr>
                <div className="grid grid-cols-5 gap-4 px-15 py-20">
                    <div className="col-span-2 content-center">
                        <Image src={'/images/workshop.jpg'} alt="workshop team photo" className = {styles.image} width='450' height='450' />
                    </div>

                    <div className="col-span-3">
                        <div className="justify-items-end">
                            <div>
                                <h2> Workshops </h2>
                            </div>

                            <div className="justify-items-end">
                                <p className="text-right">
                                    The Workshop Committee hosts workshops that bring ethics and digital literacy to the forefront of our ever-increasing technology landscape.
                                    They also seek to equip participants with the essential skills needed to comprehend and navigate the complexities and challenges of ethics in technology.
                                    With these workshops, the committee hopes to foster a sense of community that is committed to addressing ethical problems, as well as advocating for
                                    responsible innovations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className="grid grid-cols-5 gap-4 px-15 py-20">
                    <div className="col-span-3">
                        <div>
                            <div>
                                <h2> Consulting </h2>
                            </div>

                            <div>
                                <p>
                                    The consulting committee identifies and connects with industry professionals willing to advise and offer support to the club.
                                    You'll have the chance to network with clients from leading companies to initiate consulting projects and apply responsible
                                    computing principles to solve real-world problems.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 content-center">
                        <Image src={'/images/consulting.jpg'} alt="consulting team photo" className = {styles.image} width='450' height='450' />
                    </div>
                </div>

                <hr></hr>
                <div className="grid grid-cols-5 gap-4 px-15 py-20">
                    <div className="col-span-2 content-center">
                        <Image src={'/images/marketing.jpg'} alt="Industry Team Picture" className = {styles.image} width='450' height='450' />
                    </div>

                    <div className="col-span-3">
                        <div className="justify-items-end">
                            <div>
                                <h2> Industry </h2>
                            </div>

                            <div className="justify-items-end">
                                <p className="text-right">
                                    The industry committee is responsible for reaching out to leading companies to create professional relationships on behalf of RCC.
                                    As an industry ambassador, you'll get to identify and initiate partnerships with industry professionals in order to launch RCC initiatives,
                                    such as guest speaker events, company tours, and networking opportunities.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr></hr>
                <div className="grid grid-cols-5 gap-4 px-15 py-20">
                    <div className="col-span-3">
                        <div>
                            <div>
                                <h2> Community Engagement </h2>
                            </div>

                            <div>
                                <p>
                                    The community engagement committee organizes events and initiatives to build a sense of community in our organization,
                                    as well as outside of it! The committee also encourages and promotes collaboration and participation from our community members.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 content-center">
                        <Image src={'/images/community.jpg'} alt="community team photo" className = {styles.image} width='450' height='450' />
                    </div>
                </div>
            </div>

        </>
    );
}



