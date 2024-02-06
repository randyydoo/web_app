import Link from "next/link";
import React from "react";
import NavHref from "./NavHref";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navHref = [
    {
        title:"Projects",
        path:"#projects"
    },
    {
        title:"Github",
        path:"https://github.com/randyydoo",
    },
    {
        title:"Linkedin",
        path:"https://linkedin.com/in/randyydoo",
    },
    {
        title:"Contact",
        path:"#contact",
    }
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