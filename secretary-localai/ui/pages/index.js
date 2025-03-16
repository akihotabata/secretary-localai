import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const sendMessage = async () => {
    const userMessage = { role: 'user', content: input }
    setMessages([...messages, userMessage])

    const res = await axios.post('http://localhost:8080/v1/chat/completions', {
      model: "secretary",
      messages: [...messages, userMessage],
      stream: false
    })

    const botReply = res.data.choices[0].message
    setMessages([...messages, userMessage, botReply])
    setInput('')
  }

  return (
    <div className="bg-pink-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-4">💖 秘書とチャット 💖</h1>
      <div className="bg-white rounded-xl p-4 shadow-lg max-w-2xl mx-auto">
        <div className="h-96 overflow-y-scroll mb-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={\`mb-2 \${msg.role === 'user' ? 'text-right' : 'text-left'}\`}>
              <span className="block p-2 rounded-lg bg-pink-200 inline-block">{msg.content}</span>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            className="flex-1 p-2 rounded-l-lg border"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} className="bg-pink-400 text-white px-4 rounded-r-lg">送信</button>
        </div>
      </div>
    </div>
  )
}
