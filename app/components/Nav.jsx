import Link from "next/link";
import React from "react";
import NavHref from "./NavHref";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navHref = [
    {
        title:"About",
        path:"#about",
    },
    {
        title:"Projects",
        path:"#projects"
    },
    {
        title:"Contact",
        path:"#contact",
    },
    {
        title:"Linkedin",
        path:"#linkedin",
    },
    {
        title:"Github",
        path:"#github",
    },
];


const Nav = () => {
    return (
        <nav className="flex justify-center items-center bg-black ng-opacity-90">
                <div className="menu hidden md:block md:w-auto" id="Nav">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                            {
                                navHref.map((link,index) => (
                                    <li key={index}>
                                        <NavHref href={link.path} title={link.title} />
                                    </li>
                                ))
                            }
                    </ul>
                </div>
        </nav>
    );
};

export default Nav