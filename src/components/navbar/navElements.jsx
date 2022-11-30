import { Link } from "react-router-dom"
import { AiFillHome, AiFillIdcard, AiFillMail, AiOutlineShareAlt } from "react-icons/ai"
import NavElement from "../../data/navbar.js"

export default function NavElements(){

    return (
        <>
            {(NavElement.links.map(element => (
                <Link to={element.to}>
                    <div className="h-12 w-12 rounded-lg flex justify-center items-center border border-solid border-transparent text-white bg-primary-100 hover:bg-primary-100 hover:border-primary transition duration-500">
                        {element.icon}
                    </div>
                </Link>
            )))}
        </>
    )

}