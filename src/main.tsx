import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home.tsx'
import '../assets/css/styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
