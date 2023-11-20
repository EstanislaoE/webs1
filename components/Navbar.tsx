import { Socials } from "../constants";
import Image from "next/image";
import React from 'react'

const Navbar = () => {
    return (
        <div className="absolute left-100 top-0 h-full w-[80%] z-[2]">
            {/* <h1 className="text-red text-[40px]">
                John <span className="font-thin">Victor</span>
                <span className="text-red-500">.</span>
            </h1> */}
            <div className="flex flex-row gap-10">
                {Socials.map((social) => (
                    <Image
                        key={social.name}
                        src={social.src}
                        alt={social.name}
                        width={44}
                        height={44}
                    />
                ))}
            </div>
        </div>
    );
};

export default Navbar;