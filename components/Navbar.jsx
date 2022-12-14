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
import { useRouter } from "next/router";

const Navbar = () => {
    const [nav, setNav] = useState(true);
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState("#ecf0f3");
    const [linkColor, setLinkColor] = useState("#1f2937");
    const router = useRouter();

    {
        /* Project Pages, sets navbar background to transparent */
    }
    useEffect(() => {
        if (router.asPath === "/(project name)") {
            setNavBg("transparent");
            setLinkColor("#f8f8f8");
        } else {
            setNavBg("ecf0f3");
            setLinkColor("#1f2937");
        }
    }, [router]);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div
            style={{ backgroundColor: `${navBg}` }}
            className={
                shadow
                    ? "fixed w-full h-20 shadow-xl z-[100] -mt-4"
                    : "fixed w-full h-20 shadow-xl -mt-4 z-50"
            }
        >
            <div className="flex justify-between items-center w-full h-full px-8 2xl:px-16 ">
                <Image
                    src={NavLogo}
                    alt="NavLogo"
                    height="50"
                    width="50"
                    className="hover:shadow-xl shadow-utGray"
                />
                <div>
                    <ul
                        style={{ color: `${linkColor}` }}
                        className="hidden md:flex px-8"
                    >
                        <Link href="/">
                            <li className="navItem">Home</li>
                        </Link>
                        <a
                            href="/StephenSmithResume.pdf"
                            target="_blank"
                            download
                            rel="noreferrer"
                        >
                            <li className="navItem">Resume</li>
                        </a>
                        <Link href="/#projects">
                            <li className="navItem">Projects</li>
                        </Link>
                        <Link href="/#contact">
                            <li className="navItem">Contact</li>
                        </Link>
                    </ul>
                    <div
                        onClick={handleNav}
                        className="md:hidden hover:cursor-pointer"
                    >
                        <RiMenu4Fill size={25} />
                    </div>
                </div>
            </div>

            <div
                className={
                    !nav
                        ? "fixed left-0 top-0 w-full h-screen bg-black md:hidden"
                        : ""
                }
            >
                <div
                    className={
                        !nav
                            ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 md:hidden"
                            : "fixed left-[-100%] top-0 w-[75%] p-10 ease-in duration-500"
                    }
                >
                    <div>
                        <div className="flex w-full items-center justify-between">
                            <Image
                                src={NavLogo}
                                alt="NavLogo"
                                height="35"
                                width="35"
                            />

                            <div
                                onClick={handleNav}
                                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-105 ease-in duration-100"
                            >
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
                            <div  onClick={handleNav}>
                                <Link href="/">
                                    <li className="mobileMenuNavItem">Home</li>
                                </Link>
                            </div>
                            <div onClick={handleNav}>
                                <Link href="/#projects">
                                    <li className="mobileMenuNavItem">
                                        Projects
                                    </li>
                                </Link>
                            </div>
                            <Link href="/">
                                <li className="mobileMenuNavItem">Resume</li>
                            </Link>
                            <div onClick={handleNav}>
                                <Link href="/#contact">
                                    <li className="mobileMenuNavItem">
                                        Contact
                                    </li>
                                </Link>
                            </div>
                        </ul>
                        <div className="pt-40">
                            <p className="uppercase tracking-widest text-utOrange">
                                Let&apos;s Connect
                            </p>
                            <div className="flex left-0 items-center justify-between my-4 w-full sm:w-[80%] mx-[-8%] sm:mx-auto">
                                <a
                                    href="https://www.linkedin.com/in/stephen-smith-57b026220/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="mobileIcon">
                                        <RiLinkedinBoxFill size={20} />
                                    </div>
                                </a>
                                <a
                                    href="https://discordapp.com/users/539166170239205396"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="mobileIcon">
                                        <RiDiscordFill size={20} />
                                    </div>
                                </a>
                                <a
                                    href="https://www.instagram.com/skippy__stephen/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="mobileIcon">
                                        <RiInstagramLine size={20} />
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/stephen-jsmith"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="mobileIcon">
                                        <RiGithubFill size={20} />
                                    </div>
                                </a>
                                <a
                                    href="https://github.com/stephen-jsmith"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div className="mobileIcon">
                                        <RiMailAddLine size={20} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
