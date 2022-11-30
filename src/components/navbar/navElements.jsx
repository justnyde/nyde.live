import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { Animated } from "react-animated-css"
import NavElement from "../../data/navbar.js"

export default function NavElements(){

    const [navOpened, setNavOpened] = useState(false)

    

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
                </div>
            </Animated>
        </>
    )

}