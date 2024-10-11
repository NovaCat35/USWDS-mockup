import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/Home.tsx'
import './assets/uswds/css/styles.css' // Import USWDS styling
import './assets/uswds/js/uswds.js'; // Import USWDS JS

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)


