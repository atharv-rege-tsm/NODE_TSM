import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routing from './Components/Routing'
import { Provider } from 'react-redux'
import { store } from './Components/app/store'
import App from './App'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
