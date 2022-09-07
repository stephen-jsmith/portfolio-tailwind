import Image from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import portfolio from "../public/assets/images/portfolio-project/portfolio-snapshot.png";

const lhr2122 = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 overflow-hidden" />
                <Image
                    className="absolute z-1 w-full"
                    layout="fill"
                    objectFit="cover"
                    src={portfolio}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">Personal Portfolio Project</h2>
                    <h3>Dipping My Toes In Web Dev</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2 className="mb-2">Overview</h2>
                    <p>
                        From July 2021 to August 2022, I was exposed to the
                        world of computer/data science while working at QCI, and
                        learned a lot of code. While dealing largely in Python,
                        this job did pique my interest in learning different
                        languages for fun. So why not learn how to make a
                        website?
                    </p>
                    <p className="mt-2">
                        This project was made using Next JS. I also used this as
                        an oppurtunity to learn TailwindCSS, a utility based CSS
                        framework.
                    </p>
                </div>

                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Technologies
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1 ">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> HTML 5
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                TailwindCSS
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                Javascript
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-4 text-center">
                    <Link href="/#projects">
                        <p className="underline cursor-pointer">Back</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default lhr2122;
