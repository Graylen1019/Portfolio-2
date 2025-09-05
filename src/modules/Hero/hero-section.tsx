import { Tooltip, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";
import { FileDownIcon, Github, Icon, LinkedinIcon } from "lucide-react";
import Link from "next/link";



export const HeroSection = () => {

    const socials = [
        { id: 1, name: "Resume", icon: FileDownIcon, href: "/resume.pdf" },
        { id: 2, name: "LinkedIn", icon: LinkedinIcon, href: "www.linkedin.com/in/graylen-bigelow-834435371" },
        { id: 3, name: "Github", icon: Github, href: "https://github.com/Graylen1019" }
    ]

    return (
        <div className="h-screen w-full max-w-[720px] lg:max-w-[1600px] flex items-center mx-auto py-10 px-6">
            <div className="max-w-xl">
                <div className="flex flex-col text-4xl">
                    <div className="mb-2">
                        Hello! Im <b className="text-purple-700">Graylen Bigelow</b>
                    </div>
                    <div className="mb-4">
                        I am a Frontend Develoepr Passionate about Functional Design And Beautiful Layouts
                    </div>
                    <div className="flex gap-6">
                        {socials.map((social) => {
                            const Icon = social.icon;
                            return (
                                <div key={social.id}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link href={`${social.href}`} className="flex">
                                                <Icon size={32} />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <div className="bg-white rounded-xl text-base p-2 absolute top-[36px] left-1/2 -translate-x-1/2">{social.name}</div>
                                        </TooltipContent>
                                    </Tooltip>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
}