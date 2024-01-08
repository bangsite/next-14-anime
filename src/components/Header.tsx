import {Button} from "@/components/ui/button";
import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import {Icon} from "@iconify/react";
import {SearchTop} from "@/components/SearchTop";

export const Header = () => {
    useEffect(() => {
        return () => {
            console.log('header render');
        }
    }, [])

    return (
        <div className="bg-black text-white shadow">
            <div className="container mx-auto flex items-center justify-between gap-4 h-[65px]">
                <div className="header__left flex items-center justify-items-start gap-6 h-full">
                    <Link href="/">
                        <Image
                            src="/anime-logo.png"
                            alt="logo"
                            width={64}
                            height={50}
                            className="object-contain mt-1"
                        />
                    </Link>
                    <ul className="flex items-center gap-6  h-full">
                        <li className="flex items-center border-b-[3px] border-transparent hover:border-b-primary h-full">
                            <Link href="#" >Top Anime</Link></li>
                        <li className="flex items-center border-b-[3px] border-transparent hover:border-b-primary h-full"><Link
                            href="#">Seasons</Link></li>
                        <li className="flex items-center border-b-[3px] border-transparent hover:border-b-primary h-full"><Link
                            href="#">Library</Link></li>
                        <li className="flex items-center border-b-[3px] border-transparent hover:border-b-primary h-full"><Link
                            href="#">Category</Link></li>
                    </ul>

                </div>

                <div className="header__right flex items-center gap-4">
                    <SearchTop/>
                    <Button variant="ghost">
                        <Icon icon="bi:sun-fill" height={24}/>
                    </Button>

                </div>
            </div>

        </div>
    )
}
