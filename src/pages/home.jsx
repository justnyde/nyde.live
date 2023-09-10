import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { BsSpotify, BsArrowRight } from "react-icons/bs"
import { FaRegStar } from "react-icons/fa"
import { BiGitRepoForked } from "react-icons/bi"

/* DATA */
import { MainContext as data, useContext as useData } from "../context/userData"
import User from "../data/variables.js"
import Technologies from "../data/technologies";
import Colors from "../style/githubLangColors"
import about from "../data/variables.js";

export default function Main(){

    const { user, github } = useData(data)

    useEffect(async() => {
        console.log(user)
        console.log(github)
    }, [user])

    return (<div className="mt-3 max-w-8xl w-11/12 sm:w-10/12 mx-auto">
        <title>Home | Just Nyde</title>
        
        <div className="space-y-4 flex flex-col sm:flex-row sm:items-center sm:gap-4 sm:space-y-0">
            <div className="mt-6" data-aos="fade-right">
                <h1 className="font-sans font-semibold text-gray-400 text-2xl flex items-center gap-1"><span className="text-4xl"> 👋</span> Hello! Let me introduce myself.</h1>
                <h2 className="font-sans text-base text-gray-200 mt-2">{User.description}</h2>
                <div className="flex items-center gap-3 mt-4">
                    <Link to="/about"><button className="bg-gray-600 rounded-md text-base text-white font-sans px-5 py-3 flex items-center gap-2 transition duration-300 hover:bg-gray-800">Learn more about me <BsArrowRight size="22px"/></button></Link>
                </div>
            </div>
            <div className="w-full sm:w-9/12 sm:order-2" align="center" data-aos="fade-left">
                <div className="skew-y-0 sm:skew-y-6 bg-[#111111] w-full sm:w-96 h-72 rounded-lg relative py-5 px-4 overflow-hidden mt-8" align="left">
                    <div className="flex items-center gap-3 w-full">
                        {(user) ? (<img className="w-24 h-24 rounded-2xl" src={`https://cdn.discordapp.com/avatars/${user.discord_user.id}/${user.discord_user.avatar}.png?size=256`}/>) : (<div className="w-24 h-24 rounded-2xl bg-primary-100 animate-pulse"/>)}
                        <div>
                            {(user) ? (<h1 className="font-sans text-gray-400 font-semibold text-xl">{user.discord_user.username}</h1>) : (<div className="bg-primary-100 animate-pulse rounded-lg w-32 h-8"></div>)}
                            {(user) ? (<h2 className="font-sans text-gray-200 text-base">An experienced web developer.</h2>) : (<div className="w-20 h-4 bg-primary-100 rounded-lg animate-pulse mt-2"></div>)}
                            {(user) ? (<h3 className="font-sans text-white text-sm flex items-center gap-2 mt-2">
                                <div className="w-4 h-4 rounded-full bg-red-600"></div> Do not disturb.
                            </h3>) : (<h3 className="font-sans text-white text-sm flex items-center gap-2 mt-2">
                                <div className="w-4 h-4 rounded-full bg-primary-100 animate-pulse"></div> <div className="w-4/12 bg-primary-100 animate-pulse"></div>
                            </h3>)}
                        </div>
                    </div>
                    <br/>
                    <div className="w-full flex justify-between items-center">
                        <h1 className="font-sans text-white font-bold text-sm">{(user && user.listening_to_spotify) ? "LISTENING TO SPOTIFY" : "I AM NOT LISTENING ANYTHING."}</h1>
                        <BsSpotify size="25px" className="text-green-600"></BsSpotify>
                    </div>
                    <div className="flex items-center gap-4 mt-3 w-full">
                        {(!user || !user.spotify) && (<div className="w-24 h-24 rounded-lg bg-primary-100 animate-pulse"></div>)}
                        {(user && user.spotify) && (<img className="w-24 h-24 rounded-lg" src={user.spotify.album_art_url}/>)}
                        <div>
                            {(!user || !user.listening_to_spotify) ? (<div className="w- h-8 bg-primary-100 rounded-lg animate-pulse"></div>) : (<h1 className="font-semibold text-white text-base">{user.spotify.song}</h1>)}
                            {(!user || !user.listening_to_spotify) ? (<div className="w-32 h-4 bg-primary-100 rounded-lg animate-pulse mt-2"></div>) : (<h2 className="text-gray-300 text-base">by {user.spotify.artist}</h2>)}
                            {(!user || !user.listening_to_spotify) ? (<div className="w-8/12 h-4 bg-primary-100 rounded-lg animate-pulse mt-2"></div>) : (<h2 className="text-gray-300 text-base">on {user.spotify.album}</h2>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/><br/>
        <div data-aos="fade-right">
            <h1 className="font-sans font-semibold text-2xl text-gray-400 mt-12">👨‍💻 Technologies I Use</h1>
            <h2 className="font-sans text-gray-100 text-base mt-2">List of technologies I can use.</h2>
            <div className="mt-5 w-full grid grid-cols-1 gap-4 grid-flow-row auto-rows-max px-3 sm:px-0 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {(Technologies.data.map(tech => (
                    <div className="z-50 w-full rounded-lg bg-primary-100 flex justify-between items-center relative px-4 py-3 transition duration-500 border-2 border-solid border-transparent hover:border-primary">
                        <div className="flex items-center gap-4">
                            {tech.icon} 
                        </div>
                        <h1 className="font-semibold text-white font-sans text-base">{tech.name}</h1>
                    </div>
                )))}
            </div>
        </div>
        <br/><br/>
        <div data-aos="fade-right">
            <h1 className="font-sans font-semibold text-2xl text-gray-400 mt-6">📖 Github Repositories</h1>
            <h2 className="font-sans text-gray-100 text-base mt-2">I have {github?.length || 0} repositories now. You can support me by starring!</h2>
            <div className="mt-5 w-full grid grid-cols-1 gap-2 grid-flow-row auto-rows-max px-3 sm:px-0 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {(github) ? (github.map(data => (
                    <div className="w-full rounded-lg border border-solid border-gray-700 p-4">
                        <div className="flex justify-between items-center">
                            <a target="_blank" href={`https://github.com/${about.github}/${data.name}`}><h1 className="text-blue-600 hover:text-blue-800 font-sans font-semibold text-sm">{data.name}</h1></a>
                            <div className="font-sans text-gray-500 text-sm px-2 py-1 rounded-2xl border border-solid border-gray-700">Public</div>
                        </div>
                        <br/>
                        <h1 className="font-sans text-gray-400 text-sm">
                            {data.description}
                        </h1>
                        <div className="flex items-center gap-4 mt-8">
                            <div className="flex items-center gap-2">
                                <div className={`w-4 h-4 rounded-full`} style={{backgroundColor: Colors[data.language]?.color || "GRAY"}}/>
                                <h1 className="text-white font-sans font-semibold text-xs">{data.language}</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaRegStar size="18px" color="GRAY"/>
                                <h1 className="font-sans text-gray-400 text-sm">{data.stargazers_count}</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <BiGitRepoForked size="18px" color="GRAY"/>
                                <h1 className="font-sans text-gray-400 text-sm">{data.forks}</h1>
                            </div>
                        </div>
                    </div>
                ))) : (<></>)}
            </div>
        </div>
    </div>)
 
}