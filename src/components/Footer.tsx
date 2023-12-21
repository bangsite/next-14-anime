import Image from "next/image";
import {Icon} from "@iconify/react";

export const Footer = () => {
    return (
        <footer className="sm:py-8 py-4 bg-black relative">
            <div className="container mx-auto flex flex-col">
                <div className="flex items-center justify-between gap-8 ">
                    <Image
                        src="/anime-logo.png"
                        alt="logo"
                        width={64}
                        height={50}
                        className="object-contain"
                    />
                    <nav className="nav text-white flex list-none gap-6">
                        <li className="py-3  border-b-[3px] border-transparent hover:border-b-primary"><a href="#">Top
                            Anime</a></li>
                        <li className="py-3  border-b-[3px] border-transparent hover:border-b-primary"><a
                            href="#">Seasons</a></li>
                        <li className="py-3  border-b-[3px] border-transparent hover:border-b-primary"><a
                            href="#">Library</a></li>
                        <li className="py-3  border-b-[3px] border-transparent hover:border-b-primary"><a
                            href="#">Category</a></li>
                        <li className="py-3  border-b-[3px] border-transparent hover:border-b-primary"><a
                            href="#">Contact</a></li>
                    </nav>
                </div>

                <div className="border-t border-t-gray-50 flex justify-between text-center py-4">
                    <p className="text-base  text-white">&copy; Copyright 2023 Bang dev</p>
                    <div className="flex items-center gap-4 cursor-pointer">
                        <Icon icon="logos:youtube-icon" color="red" height={24}/>
                        <Icon icon="skill-icons:twitter" width={24}/>
                        <Icon icon="logos:facebook" width={24}/>
                        <Icon icon="skill-icons:instagram" width={24}/>
                    </div>
                </div>

            </div>

            <div
                className="bg-primary cursor-pointer fixed bottom-[0.5rem] right-[1rem] py-1 text-white transition-all rounded-sm hover:bg-primary/80 hover:translate-y-[-2px]">
                <Icon icon="lets-icons:arrow-alt-ltop-alt" width="30"/>
            </div>
        </footer>
    )
}
