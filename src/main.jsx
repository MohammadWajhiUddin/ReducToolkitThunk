import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from '../src/Store/index.jsx'
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import 'bootstrap/dist/css/bootstrap.min.css';


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <QueryClientProvider client={queryClient}>
        <App />
     </QueryClientProvider>
  </Provider>,
)
