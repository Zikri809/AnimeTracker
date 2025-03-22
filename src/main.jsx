import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Searchpage from './Pages/search'
import './index.css'
import App from './App.jsx'
import './registerSW'; 

createRoot(document.getElementById('root')).render(

    //<StrictMode>
   <App/>
  //</StrictMode>

)
