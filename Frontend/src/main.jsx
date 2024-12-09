import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SideBarProvider } from './components/ContextApi.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <SideBarProvider>
      <App />
    </SideBarProvider>
  // </StrictMode>,
)
