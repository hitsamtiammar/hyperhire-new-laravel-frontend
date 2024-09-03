import { useSetRecoilState } from 'recoil'
import styles from './App.module.css'
import { CloseMenu } from './assets/logo'
import IconButton from './components/atoms/IconButton'
import Drawer from './components/organismn/Drawer/Drawer'
import { actionFlagState } from './recoil/atoms'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))

function App() {
  const setActionFlag = useSetRecoilState(actionFlagState)
  return (
    <div className={styles.mainContainer}>
      <BrowserRouter>
        <Drawer/>
        <div className={styles.rightContainer}>
          <IconButton onClick={() => setActionFlag({
            data: {},
            type: 'display-drawer'
          })} className="block lg:hidden ml-10 mt-10">
            <img src={CloseMenu} alt="Close menu" />
          </IconButton>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
          </Suspense>
          
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
