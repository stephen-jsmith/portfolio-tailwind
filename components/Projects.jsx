import React from "react";
import Image from "next/image";
import LHR from "../public/assets/images/machining/FrameTubes.jpg";
import ProjectItem from "./ProjectItem";

const projects = () => {
    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="text-xl tracking-widest uppercase text-utGray">
                    Projects
                </p>
                <h2 className="py-4 text-utOrange">What I've Been Up To</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <ProjectItem
                        title="LHR 2021-22 Build Cycle"
                        backgroundImg={LHR}
                        projectUrl="/LHR21-22"
                        tech="Manual Machining"
                    />
                </div>
            </div>
        </div>
    );
};

export default projects;
