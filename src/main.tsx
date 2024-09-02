import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/fonts/font.css'
import './index.css'
import queryClient from './api/api'
import { QueryClientProvider } from 'react-query'

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
)
