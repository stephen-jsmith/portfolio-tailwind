import Image from "next/image";
import React from "react";
import CarbonInserts from "../public/assets/images/LHR21-22/CarbonInsertsFinishes.jpg";
import FinishedFrameTubes from "../public/assets/images/LHR21-22/FinishedFrameTubes.jpg";
import FinishedWheelNut from "../public/assets/images/LHR21-22/FinishedWheelNut.jpg";
import MidWheelNut from "../public/assets/images/LHR21-22/MidWheelNut.jpg";
import WheelNutStock from "../public/assets/images/LHR21-22/WheelNutStock.jpg";
/*import FlyCutting from "../public/assets/images/LHR21-22/FlyCutting.mp4"*/
import SheetMetalFolding from "../public/assets/images/LHR21-22/SheetMetalFolding.jpg";
import ThreadedInsertDrawing from "../public/assets/images/LHR21-22/ThreadedInsert.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const lhr2122 = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10 overflow-hidden" />
                <Image
                    className="absolute z-1 w-full"
                    layout="fill"
                    objectFit="cover"
                    src={CarbonInserts}
                    alt="/"
                />
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">LHR 2021-2022 Build Cycle</h2>
                    <h3>Mill / Lathe / Manual Machining</h3>
                </div>
            </div>

            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2 className="mb-2">Overview</h2>
                    <p>
                        One of my favorite hobbies is working with my hands to
                        build cool projcts. When I got to UT Austin, I
                        immediately began looking for an student org that would
                        let me pursue this. LHR ended up being the perfect fit.
                        At LHR, we build small-scale formula style racecars.
                        Almost every part is entirely designed and built by
                        students. I have had the pleasure of being on the
                        manufacturing team.
                    </p>
                    <p className="mt-2">
                        While on the manufacturing team, I have been in charge
                        of making critical components for the internal
                        combustion car. Several of these components have had
                        tolerances of at most 0.005", and have utilized several
                        different methods of manufacturing. The method that I
                        enjoy the most, by far, is manual lathe work. It is
                        incredibly gratifying to watch a cut with proper feeds
                        and speeds, where the chips coming off are perfectly cut
                        little spirals. Putting the finishing touch on these
                        parts (by applying a polish after sanding), is also one
                        of my favorite parts of the work.
                    </p>
                    <p className="mt-2">
                        For the upcoming 2022-2023 season, I will continue to be
                        a manufacturing member. The work is just too fun to pass
                        up! I am incredibly grateful for the oppurtunities and
                        friends that I have been given as a result of my time in
                        LHR.
                    </p>
                    <p className="mt-2">
                        Scroll down to see some behind the scenes pictures of
                        the manufacturing process!
                    </p>
                    <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src={FinishedFrameTubes}
                                    />
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src={SheetMetalFolding}
                                    />
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src={MidWheelNut}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src={FinishedWheelNut}
                                    />
                                </div>
                                <div className="p-1 md:p-2">
                                    <Image
                                        alt="gallery"
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src={ThreadedInsertDrawing}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">
                            Technologies
                        </p>
                        <div className="grid grid-cols-3 md:grid-cols-1 ">
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Milling
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Spindle
                                and Boring Lathe
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />
                                Sheet Metal Bending
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Welding
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" />{" "}
                                SolidWorks
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <RiRadioButtonFill className="pr-1" /> Finishing
                                Work
                            </p>
                        </div>
                        <div className="p-1 md:p-2">
                            <Image
                                alt="gallery"
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src={WheelNutStock}
                            />
                        </div>
                    </div>
                </div>
                <Link href="/#projects">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
            </div>
        </div>
    );
};

export default lhr2122;
