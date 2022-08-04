import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLogo from "../public/assets/building.svg";
import Link from "next/link";
import {
    RiCloseLine,
    RiMenu4Fill,
    RiLinkedinBoxFill,
    RiDiscordFill,
    RiInstagramLine,
    RiGithubFill,
    RiMailAddLine,
} from "react-icons/ri";
import {useRouter} from 'next/router'

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3')
    const [linkColor, setLinkColor] = useState('#1f2937')
    const router = useRouter()


    {/* Project Pages, sets navbar background to transparent */}
useEffect (()=>{
        if (
            router.asPath === '/(project name)'
        ) 
        {setNavBg('transparent')
        setLinkColor('#f8f8f8')}
        else {
            setNavBg('ecf0f3')
            setLinkColor('#1f2937')
        }
    },[router])


    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div 
        style={{backgroundColor: `${navBg}`}}
        className={
            shadow
            ? 'fixed w-full h-20 shadow-xl z-[100] -mt-4'
            : 'fixed w-full h-20 shadow-xl -mt-4 z-50'
        }>
            <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16 ">
                <Image src={NavLogo} alt="NavLogo" height="50" width="50" className="hover:shadow-xl shadow-utGray" />
                <div>
                    <ul style={{color: `${linkColor}`}} className="hidden md:flex px-8">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:text-utOrange hover:drop-shadow hover:-mt-navHover shadow-utGray ease-in duration-100">
                                Home
                            </li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:text-utOrange hover:drop-shadow hover:-mt-navHover shadow-utGray ease-in duration-100">
                                Experience
                            </li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:text-utOrange hover:drop-shadow hover:-mt-navHover shadow-utGray ease-in duration-100">
                                Education
                            </li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:text-utOrange hover:drop-shadow hover:-mt-navHover shadow-utGray ease-in duration-100">
                                Projects
                            </li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:text-utOrange hover:drop-shadow hover:-mt-navHover shadow-utGray ease-in duration-100">
                                Contact
                            </li>
                        </Link>
                    </ul>
                    <div onClick={handleNav} className="md:hidden hover:cursor-pointer">
                        <RiMenu4Fill size={25} />
                    </div>
                </div>
            </div>

            <div className={!nav ? "fixed left-0 top-0 w-full h-screen bg-black md:hidden" : ""}>
                <div className={!nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 md:hidden" : "fixed left-[-100%] top-0 w-[75%] p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image
                                src={NavLogo}
                                alt="NavLogo"
                                height="35"
                                width="35"
                            />

                            <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-100">
                                <RiCloseLine size={25} />
                            </div>
                        </div>
                        <div className="border-b border-gray-400 my-4">
                            <p className="w-[85%] md:w-[90%] py-2">
                                Engineer | Machinist | Programmer
                            </p>
                        </div>
                    </div>
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            <Link href="/">
                                <li className="py-4 text-sm hover:text-utOrange hover:drop-shadow shadow-utGray ease-in duration-100">Home</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm hover:text-utOrange hover:drop-shadow shadow-utGray ease-in duration-100">Experience</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm hover:text-utOrange hover:drop-shadow shadow-utGray ease-in duration-100">Education</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm hover:text-utOrange hover:drop-shadow shadow-utGray ease-in duration-100">Projects</li>
                            </Link>
                            <Link href="/">
                                <li className="py-4 text-sm hover:text-utOrange hover:drop-shadow shadow-utGray ease-in duration-100">Contact</li>
                            </Link>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-utOrange">
                                Let&apos;s Connect
                            </p>
                            <div className="flex left-0 items-center justify-between my-4 w-full sm:w-[80%] mx-[-8%] sm:mx-auto">
                                <div className="rounded-full shadow-lg shadow-utGrey p-3 cursor-pointer hover:scale-105 ease-in duration-100 ">
                                    <RiLinkedinBoxFill size={20} />
                                </div>
                                <div className="rounded-full shadow-lg shadow-utGrey p-3 cursor-pointer hover:scale-105 ease-in duration-100 ">
                                    <RiDiscordFill size={20} />
                                </div>
                                <div className="rounded-full shadow-lg shadow-utGrey p-3 cursor-pointer hover:scale-105 ease-in duration-100 ">
                                    <RiInstagramLine size={20} />
                                </div>
                                <div className="rounded-full shadow-lg shadow-utGrey p-3 cursor-pointer hover:scale-105 ease-in duration-100 ">
                                    <RiGithubFill size={20} />
                                </div>
                                <div className="rounded-full shadow-lg shadow-utGrey p-3 cursor-pointer hover:scale-105 ease-in duration-100 ">
                                    <RiMailAddLine size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
