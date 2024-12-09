import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <ShopContextProvider>
//     <App/>
//   </ShopContextProvider>
//   </BrowserRouter>,
// )
<React.StrictMode>
<ShopContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ShopContextProvider>
</React.StrictMode>
)
