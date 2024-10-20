import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '../router/router.jsx'
import './index.css'
import { ContextProvider } from './Context/Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>    
)
