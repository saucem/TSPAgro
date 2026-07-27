import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import { LanguageContextProvider } from './context/languageContext.jsx'
import LanguageSelect from './components/LanguageSelect/LanguageSelect.jsx'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./i18next.jsx"
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </BrowserRouter>,
)
