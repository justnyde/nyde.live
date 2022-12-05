import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Animated } from "react-animated-css"
import NavElement from "../../data/navbar.js"

export default function NavElements(){

    const [navOpened, setNavOpened] = useState(false)
    const { pathname } = useLocation();

    useEffect(() => {
        setNavOpened(false)
    }, [pathname])

    return (
        <>
            {(NavElement.links.map(element => (
                <Link className="hidden md:block" to={element.to}>
                    <div className="h-12 w-12 rounded-lg flex justify-center items-center border border-solid border-transparent text-white bg-primary-100 hover:bg-primary-100 hover:border-primary transition duration-500">
                        {element.icon}
                    </div>
                </Link>
            )))}
            <div className="block md:hidden">
                <div onClick={() => setNavOpened(!navOpened)} className="h-12 w-12 rounded-lg flex justify-center items-center border border-solid border-transparent text-white bg-primary-100 hover:bg-primary-100 hover:border-primary transition duration-500">
                    <BsArrowLeft size="23px"/>
                </div>
            </div>
            <Animated className="phoneNav flex sm:hidden overflow-auto bg-[#00050C]" animationIn="fadeInRight" animationOut="fadeOutRight" animationInDuration={300} animationOutDuration={500} isVisible={navOpened}>
                <div className="relative p-5 h-full w-full overflow-auto">
                    <div className="flex justify-between items-center w-full">
                        <div onClick={() => setNavOpened(!navOpened)} className="h-12 w-12 rounded-lg flex justify-center items-center border border-solid border-transparent text-white bg-primary-100 hover:bg-primary-100 hover:border-primary transition duration-500">
                            <BsArrowRight size="23px"/>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="space-y-2">
                        {(NavElement.links.map(element => (
                            <Link className="w-full p-4 flex justify-between items-center font-sans text-white font-semibold text-base bg-primary-100 hover:bg-primary-200 transition duration-500">
                                {element.icon} {element.label}
                                <MdKeyboardArrowRight size="35px" color="WHITE"/>
                            </Link>
                        )))}
                    </div>
                </div>
            </Animated>
        </>
    )

}