import { useState } from "react"
import { messages as mockMessages } from "../services/mockApi"

const Chat = () => {
    const [messages, setMessages] = useState(mockMessages)
    const [text, setText] = useState("")

    const handleOnchange = (e) => {
        setText(e.target.value)
    }

    const sendMessage = () => {
        if (text.length === 0) { return }

        const currentTime = new Date()
        const newMesagge = {
            id: messages.length + 1,
            author: "Ana",
            text: text,
            time: currentTime.getHours() + ":" + currentTime.getMinutes()
        }
        setMessages([...messages, newMesagge])
        setText("")
    }
    const handleOnKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessage()
        }
    }

    return (
        <section className="chat">
            <header>
                <h2>Emily Johnson</h2>
                <p>Ultima conexion: hace tres minutos</p>
            </header>
            <div className="chat-body">
                {
                    messages.map((message) =>
                        <div key={message.id} className={`message ${message.author === "Ana" ? "me" : "receited"}`}>
                            <p> <b>{message.author}</b> : {message.text}</p>
                            <p className="timestamp">{message.time}</p>
                        </div>
                    )
                }
            </div>
            <div className="chat-input">
                <input onChange={handleOnchange}
                    value={text}
                    onKeyDown={handleOnKeyDown}
                    type="text"
                    placeholder="Escribe tu mensaje"
                />
                <button onClick={sendMessage}>Enviar</button>
            </div>
        </section>
    )
}
export { Chat }