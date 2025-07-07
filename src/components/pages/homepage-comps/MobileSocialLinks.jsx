import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const MobileSocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/hamza-ahmad-342aa52bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/HamzaAhmad536'
        },
        {
            id: 3,
            child: (
                <>
                Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:hamzaahmad2003@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Hamza Ahmad.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

    return (
        <div className="flex mt-4 desktop:hidden">
            <ul className="flex gap-2 flex-wrap justify-center">
                {
                    links.map(({id, child, href, style, download}) => (
                        <li key={id} className={"flex items-center gap-2 w-28 h-9 px-4 bg-gradient-to-t from-green-400/50 to-primary-color/50 rounded-md" + " " + style }>
                            <a href={href} className="flex gap-3 items-center w-full text-white text-sm" download={download} target="_blank" rel="noreferrer">
                            {child}
                            </a>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    );
};

export default MobileSocialLinks;
