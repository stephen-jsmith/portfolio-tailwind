import Image from "next/image";
import React from "react";
import profilePic from "/public/assets/images/AboutPic.jpg";

const About = () => {
    return (
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto  grid-cols-3 gap-8 md:grid">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-utGray">
                        About
                    </p>
                    <h2 className="py-2 text-utOrange">Stephen</h2>
                    <p className="py-2"> Better Equipped. Better Prepared.</p>
                    <p className="py-2">
                        Stephen Smith is an Architectural Engineering student
                        who looks to dabble in all sorts of things. His interest
                        in woodworking, machining, and computer science have
                        netted him a well rounded skill set, ready to take on
                        any challenge. His interest for working with his hands
                        has led to a practical understanding of how components
                        are put together, and his passion for the process has
                        led to incredible finished components.
                    </p>
                    <p className="py-2">
                        By working as a technical intern for{" "}
                        <span className="text-qciPurple font-serif">
                            {" "}
                            Quantum Computing, Inc.
                        </span>{" "}
                        this past year, Stephen has developed a multitude of
                        hard and soft skills. Hard skills wise, he has developed
                        an understanding of python data science, MySQL/database
                        management, HTML and CSS, and others. On the side of
                        soft skills, Stephen has learned how a corporate office
                        operates, and how to seamlessly integrate to help make
                        contributions from day one.
                    </p>
                    <a href="/StephenSmithResume.pdf" target="_blank" download className="py-2 text-utGray underline cursor-pointer">
                        To view Stephen&apos;s resume, click here
                    </a>
                </div>
                <div className="z-0 w-full h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image
                        className="rounded-xl"
                        src={profilePic}
                        alt="/"
                        height="480"
                        width="320"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
