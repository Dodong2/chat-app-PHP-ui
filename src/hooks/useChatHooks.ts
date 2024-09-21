import { useState, useEffect } from "react";
import { getChat, createChat } from '../services/ApiService'

type Chat = {
    id:string
    name: string
    message: string
}

//Hooks sa get Chat
export const useChat = () => {
    const [chat, setChat] = useState<Chat[]>([])
    const [loading, setloading] = useState<boolean>(false)

    //get Chat
    useEffect(() => {
        const fetchChat = async ()=> {
            setloading(true)
            const result = await getChat()
            if (result.success) {
                setChat(result.messages)
            }
        setloading(false)
        }
        fetchChat()
    }, [])

//Hooks sa add chat
const addChat = async (name: string, message:string) => {
    const result = await createChat(name, message) 
    if (result.success) {
        setChat((prevChats) => Array.isArray(prevChats) ? [
            ...prevChats,
            {id: new Date().getTime().toString(), name, message }
        ]: [])
    }
    return result
}

return { chat, loading, addChat } 

}