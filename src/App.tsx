import { useSetRecoilState } from 'recoil'
import styles from './App.module.css'
import { CloseMenu } from './assets/logo'
import IconButton from './components/atoms/IconButton'
import Drawer from './components/organismn/Drawer/Drawer'
import Home from './pages/Home'
import { actionFlagState } from './recoil/atoms'

function App() {
  const setActionFlag = useSetRecoilState(actionFlagState)
  return (
    <div className={styles.mainContainer}>
      <Drawer/>
      <div className={styles.rightContainer}>
        <IconButton onClick={() => setActionFlag({
          data: {},
          type: 'display-drawer'
        })} className="block lg:hidden ml-10 mt-10">
          <img src={CloseMenu} alt="Close menu" />
        </IconButton>
        <Home/>
      </div>
    </div>
  )
}

export default App
