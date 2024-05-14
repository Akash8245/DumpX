import { useEffect, useState } from 'react'
import axios from 'axios'
import Box from './Box'

export default function Messages() {

  const [messages, setMessages] = useState([])
  const [password, setPassword] = useState('')
  const [passwordEntered, setPasswordEntered] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const username = "root";
      if (!passwordEntered) {
        const inputPassword = prompt("Enter your password:");
        setPassword(inputPassword);
        setPasswordEntered(true);
      }

      if (password) {
        try {
          const response = await axios.get('https://dump-x-api.vercel.app/get', {
            auth: {
              username: username,
              password: password
            }
          });
          setMessages(response.data);
        } catch (error) {
          console.error('Error fetching messages:', error);
        }
      }
    };

    fetchData();
  }, [password, passwordEntered])

  return (
    <div className=' pb-[200px]'>
      {
        messages.map((message, index) => (
          <Box text={message.text}/>
        ))
      }
    </div>
  )
}
