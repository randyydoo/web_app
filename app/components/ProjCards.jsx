import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";

import React from "react";

const ProjCards = ({ imgURL, title, desc, gitURL, hrefURL }) => {
    return (
        <div>
            <div className="rounded-b-xl mt-2 bg-black py-6 -px-4">
                <h5 className="text-green-500 text-xl font-semibold mb-2">{title}</h5>
                <p className="text-white-400">{desc}</p>
            </div>
            <div
                className=" h-52 md:h-72 rounded-t-xl relative group"
                style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                    <Link href={gitURL} target="_blank"
                        className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                        <FaGithub className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                    </Link>
                    {title === "Wiki Guess" ? (
                        <Link href={hrefURL} target="_blank"
                            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                            <RiExternalLinkFill className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
                        </Link>) : (<></>)}
                </div>
            </div>
        </div>
    )
}
export default ProjCards;