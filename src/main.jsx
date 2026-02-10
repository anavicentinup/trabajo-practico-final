import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Aside } from './components/Aside'
import { Chat } from './components/Chat'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Aside />
    <Chat />
  </StrictMode>,
)
