import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({ title, backgroundImg, tech, projectUrl, alt }) => {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group transition hover:ease-in duration-200 hover:bg-utOrange cursor-pointer">
            <Image
                className="rounded-xl transition hover:ease-in duration-200 group-hover:opacity-10"
                src={backgroundImg}
                alt={alt}
            />
            <div className="hidden transition delay-1000 hover:ease-in group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-slate-50  tracking-wider text-center">
                    {title}
                </h3>
                <p className="pb-4 pt-2 text-slate-50 text-center">{tech}</p>
                <Link href={projectUrl}>
                    <p className="text-center py-3 rounded-lg bg-utGray text-slate-50 font-bold text-lg">
                        More Info
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default ProjectItem;
