import Link from "next/link";

const NavHref = ({href, title}) => {
    return(
    <Link
        href={href}
        className="block py-2 pl-3 pr-4 text-green-500 sm:text-xl rounded md:p-0 hover:text-slate-300 "
        target={title === "Github" || title ==="Linkedin" ? "_blank" : "_self"}
    >{title}
    </Link>

    );
};
export default NavHref;
    