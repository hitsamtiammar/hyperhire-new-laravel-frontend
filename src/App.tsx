import styles from './App.module.css'
import Drawer from './components/organismn/Drawer/Drawer'
import Home from './pages/Home'

function App() {
  return (
    <div className={styles.mainContainer}>
      <Drawer/>
      <div className={styles.rightContainer}>
        <Home/>
      </div>
    </div>
  )
}

export default App
