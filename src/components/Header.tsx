import {Button} from "@/components/ui/button";
import {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    useEffect(() => {
        console.log('header render');
        return () => {
            console.log('header render');
        }
    }, [])

    return (
        <div className="bg-primary text-white shadow">
            <div className="container mx-auto flex items-center justify-between gap-4 py-2 min-h-[60px]">
                <Link href="/">
                    <Image
                        src="./logo.svg"
                        alt="logo"
                        width={47}
                        height={44}
                        className="object-contain"
                    />
                </Link>
                <nav>
                    <ul className="flex items-center gap-6">
                        <li><Link href="/animes">Top Anime</Link></li>
                        <li><Link href="#">Category</Link></li>
                        <li><Link href="#">Library</Link></li>
                    </ul>
                </nav>
                <Button className="border border-dashed">Login</Button>
            </div>
        </div>
    )
}
