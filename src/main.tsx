import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './assets/fonts/font.css'
import './index.css'
import queryClient from './api/api'
import { QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </QueryClientProvider>
)
