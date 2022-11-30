import { useState, useEffect } from "react"
import User from "./variables"
import useSWR from "swr"

export default function UserInformation() {

    const [user, setUser] = useState(null)
    const [github, setGithub] = useState([])
    let websocket;
    let variables = {user, setUser, github}
    let fetchData = (url) => fetch(url).then(r => r.json())
    let {data, error} = useSWR('https://api.github.com/users/' + User.github + '/repos',fetchData,{refreshInterval:5000})

    useEffect(() => {
        setGithub(data)
    }, [data])

    useEffect(() => {

        websocket = new WebSocket("wss://api.lanyard.rest/socket")

        websocket.onmessage = data => {
            var message = JSON.parse(data.data)
            if (message.op) { 
                if (message.op == 1) {
                    setInterval(() => {
                        websocket.send(JSON.stringify({ op: 3 }))
                    }, message.d.heartbeat_interval-1000)
                    websocket.send(JSON.stringify({ op: 2,  d: {subscribe_to_ids: [User.userId]} }))
                }
            }
            if (message.t && (message.t == "INIT_STATE" || message.t == "PRESENCE_UPDATE")) {
                setUser((message.t == "PRESENCE_UPDATE") ? message.d : message.d[User.userId])
            }
        }



    }, [])

    return variables

}