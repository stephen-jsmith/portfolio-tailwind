import React from "react";
import Image from "next/image";
import python from "/public/skills/python.png";
import manual from "/public/skills/hardhat.png";
import quicksight from "/public/skills/quicksight.png";
import html from "/public/skills/html.png";
import mysql from "/public/skills/mysql.png";
import solidworks from "/public/skills/solidworks.png";
import tailwindcss from "/public/skills/tailwindcss.png";
import github from "/public/skills/github.png";

const Skills = () => {
    return (
        <div className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-utGray text-xl tracking-widest uppercase">
                    Skills
                </p>
                <h2 className="text-utOrange py-4">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div>
                                <Image
                                    src={python}
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <h3 className="flex flex-col items-center justify-center text-utGray">
                                Python
                            </h3>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div>
                                <Image
                                    src={manual}
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <h3 className="flex flex-col items-center justify-center text-utGray">
                                Manual Machining
                            </h3>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div>
                                <Image
                                    src={quicksight}
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <h3 className="flex flex-col items-center justify-center text-utGray">
                                Amazon Quicksight
                            </h3>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div>
                                <Image
                                    src={html}
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <h3 className="flex flex-col items-center justify-center text-utGray">
                                HTML 5
                            </h3>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div>
                                <Image
                                    src={mysql}
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <h3 className="flex flex-col items-center justify-center text-utGray">
                                MySQL
                            </h3>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div>
                                <Image
                                    src={solidworks}
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <h3 className="flex flex-col items-center justify-center text-utGray">
                                Solidworks
                            </h3>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div>
                                <Image
                                    src={tailwindcss}
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <h3 className="flex flex-col items-center justify-center text-utGray">
                                Tailwind CSS
                            </h3>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div>
                                <Image
                                    src={github}
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <h3 className="flex flex-col items-center justify-center text-utGray">
                                Git
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
