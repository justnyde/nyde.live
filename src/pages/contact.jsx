import User from "../data/variables"

import { AiOutlineSend, AiOutlineLoading3Quarters, AiOutlineCheck } from "react-icons/ai"
import { useEffect, useRef, useState } from "react"

export default function Contact(){

    const message = useRef(null)
    const [msg, setMsg] = useState(null)
    const [status, setStatus] = useState({type: "NOTHING"})
    const [error, setError] = useState(null)

    useEffect(() => {

        let element = message.current
        message.current.style.height = "0px"
        message.current.style.height = `${message.current.scrollHeight + "px"}`

    }, [msg])

    return (<div className="mt-3 max-w-8xl w-11/12 sm:w-10/12 mx-auto">
        <title>Contact | Just Nyde</title>

        <h1 className="font-sans text-5xl font-bold text-white flex items-end gap-2">Get in <span className="font-sans text-primary">Touch</span><div className="bg-primary-100 px-2 py-2 font-sans text-sm rounded-xl">with E-mail</div></h1>

        <div className="hidden bg-[rgba(255,0,0,.2)]"></div>

        {(error !== null) && (
        <div className="py-4">
            <div className="p-6 w-full bg-[rgba(255,0,0,.2)] rounded-lg font-sans text-white text-base flex items-center justify-start">{error}</div>
        </div>
        )}

        <form className="mt-4" action="https://formspree.io/f/xaykrwpy" method="POST" onSubmit={async(event) => {

            event.preventDefault()

            setStatus({type: "WAIT"})

            let sendedData = await fetch("https://formspree.io/f/xaykrwpy", {
                method: "POST",
                body: JSON.stringify({
                    username: event.target.username.value,
                    email: event.target.email.value,
                    message: event.target.message.value
                }),
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (sendedData.ok) {
                setStatus({type: "SUCCESS"})
            } else {
                sendedData = await sendedData.json()
                if (Object.hasOwn(sendedData, "errors")) {
                    setStatus({type: "NOTHING"})
                    setError(sendedData.errors.map(error => error.message).join(", ") + ".")
                } else {
                    setStatus({type: "NOTHING"})
                    setError("An unknown error occurred.")
                }
            }
            

        }}>

            <h1 className="text-primary text-base font-sans font-semibold">Username</h1>
            <input required="true" name="username" className="mt-2 outline-none p-4 w-full sm:w-7/12 bg-primary-100 rounded-lg font-sans text-base text-white"/>

            <br/><br/>

            <h1 className="text-primary text-base font-sans font-semibold">E-mail</h1>
            <input required="true" type="email" name="email" className="mt-2 outline-none p-4 w-full sm:w-7/12 bg-primary-100 rounded-lg font-sans text-base text-white"/>

            <br/><br/>

            <h1 className="text-primary text-base font-sans font-semibold">Message</h1>
            <textarea required="true" minLength="25" onChange={(event) => setMsg(event.target.value)} ref={message} name="message" className="resize-none min-h-[9rem] mt-2 outline-none p-4 w-full sm:w-7/12 bg-primary-100 rounded-lg font-sans text-base text-white"/>

            <br/><br/>

            <button type="submit" className={`py-3 px-4 bg-primary text-white font-sans text-base rounded-lg w-full sm:w-auto flex items-center gap-2 justify-center sm:justify-start${(status.type !== "NOTHING" && " opacity-30 cursor-not-allowed")}`} disabled={(status.type == "NOTHING") ? false : true}>{{
                "NOTHING": (
                    <><AiOutlineSend size="20px"/> Submit</>
                ),
                "WAIT": (
                    <><AiOutlineLoading3Quarters size="18px" className="spin"/> Submitting...</>
                ),
                "SUCCESS": (
                    <><AiOutlineCheck size="20px"/> Successfully submitted</>
                )
            }[status.type]}</button>

        </form>

    </div>)

}