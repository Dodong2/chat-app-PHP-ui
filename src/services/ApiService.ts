//create
export const createChat = async (name:string, message:string) => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('message', message)

    const response = await fetch('http://localhost/chat-app-api/chat.php?action=create', {
        method: 'POST',
        body: formData
    })
    const result = await response.json()
    return result
}

//read
export const getChat = async () => {
    const response = await fetch('http://localhost/chat-app-api/chat.php?action=read') 
        const result = await response.json()
        return result
    }