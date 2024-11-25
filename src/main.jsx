import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './sass/main.scss'
import { DadosProvider } from './context/DadosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DadosProvider>
      <App />
    </DadosProvider>
  </StrictMode>,
)
