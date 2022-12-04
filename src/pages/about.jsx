import User from "../data/variables"
import { MainContext as data, useContext as useData } from "../context/userData"

import { MdOutlineMapsHomeWork, MdCake, MdOutlineEmail } from "react-icons/md"
import { BsGenderMale } from "react-icons/bs"

export default function About(){

    const { user, github } = useData(data)

    return (<div className="mt-3 max-w-8xl w-11/12 sm:w-10/12 mx-auto">
        <title>About Me | Just Nyde</title>

            <div className="flex flex-col sm:flex-row gap-0 sm:gap-9 justify-between">
                <div data-aos="fade-right" className="space-y-2 mt-11 order-2 sm:order-none text-center md:text-left">
                    <h1 className="text-3xl font-semibold font-sans text-white">Let's get to know me!</h1>
                    <h2 className="text-xl text-gray-200 font-secular leading-relaxed" dangerouslySetInnerHTML={{__html: User.about.description}}></h2>
                    <div className="py-3 w-full grid grid-cols-1 gap-4 grid-flow-row auto-rows-max px-3 sm:px-0 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                        <div className="px-6 w-full transition duration-700 bg-gradient-to-r from-primary to-blue-500 py-4 rounded-2xl flex justify-between items-center hover:opacity-50">
                            <MdOutlineMapsHomeWork size="35px" color="WHITE"/>
                            <h1 className="font-sans text-white text-base">{User.about.liveIn}</h1>
                        </div>
                        <div className="px-6 w-full transition duration-700 bg-gradient-to-r from-primary to-blue-500 py-4 rounded-2xl flex justify-between items-center hover:opacity-50">
                            <MdCake size="35px" color="WHITE"/>
                            <h1 className="font-sans text-white text-base">{User.about.birthday}</h1>
                        </div>
                        <div className="px-6 w-full transition duration-700 bg-gradient-to-r from-primary to-blue-500 py-4 rounded-2xl flex justify-between items-center hover:opacity-50">
                            <BsGenderMale size="35px" color="WHITE"/>
                            <h1 className="font-sans text-white text-base">{User.about.gender}</h1>
                        </div>
                    </div>
                </div>
                <div className="shrink-0" data-aos="fade-left">{(user) ? (<div className="space-y-3 shrink-0 h-auto" align="center"><img className="w-72 h-72 rounded-2xl" src={`https://cdn.discordapp.com/avatars/${user.discord_user.id}/${user.discord_user.avatar}.png?size=4096`}/><h1 className="font-sans font-semibold text-lg text-gray-200">{user.discord_user?.username || "Loading..."}</h1></div>) : (<div className="w-72 h-72 rounded-2xl bg-primary-100 animate-pulse shrink-0"/>)}</div>
            </div>

        </div>
    )

}