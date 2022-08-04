import React from "react";
import {
    RiCloseLine,
    RiMenu4Fill,
    RiLinkedinBoxFill,
    RiDiscordFill,
    RiInstagramLine,
    RiGithubFill,
    RiMailAddLine,
} from "react-icons/ri";

const Main = () => {
    return (
        <div className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center my-4">
                <div>
                    <p className="uppercase text-sm">
                        Better equipped. Better prepared.
                    </p>
                    <h1 className="py-4 text-gray-800">
                        Hi, I'm <span className="text-utOrange">Stephen</span>
                    </h1>
                    <h1 className="sm:py-4 text-gray-800">
                        An Architectural Engineer
                    </h1>
                    <p className="py-4 text-utGray max-w-[70%] m-auto">
                        I'm a current Sophomore in the UT Austin Architectural
                        Engineering program. In my free time, I enjoy a variety
                        of hobbies, from machining to programming, and a little
                        of everything in between. The result of my experiences
                        is a well rounded individual, with a unique toolset to
                        tackle any challenge. I am currently looking for an
                        internship for the Summer of 2023. To learn more about
                        me, feel free to explore my portfolio!
                    </p>
                    <div className="flex items-center max-w-[500px]  justify-between m-auto py-4">
                        <div className="rounded-full shadow-lg shadow-utGrey p-6 cursor-pointer bg-white hover:scale-110 hover:bg-white ease-in duration-200 ">
                            <RiLinkedinBoxFill size={30} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-utGrey p-6 cursor-pointer hover:scale-110 ease-in duration-200 ">
                            <RiDiscordFill size={30} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-utGrey p-6 cursor-pointer hover:scale-110 ease-in duration-200 ">
                            <RiInstagramLine size={30} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-utGrey p-6 cursor-pointer hover:scale-110 ease-in duration-200 ">
                            <RiGithubFill size={30} />
                        </div>
                        <div className="rounded-full shadow-lg shadow-utGrey p-6 cursor-pointer hover:scale-110 ease-in duration-200 ">
                            <RiMailAddLine size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
