import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { CloitLogo, OpenMenu, SubMenu, Submenu2 } from '@/assets/logo'
import { MdFolder } from "react-icons/md";
import ListItem from '@/components/molecules/ListItem';
import { BsGridFill } from "react-icons/bs";
import { FaRegFolder } from "react-icons/fa";
import { useRecoilState } from 'recoil';
import { actionFlagState } from '@/recoil/atoms';

export default function Drawer () {
  const [actionFlag, setActionFlag] = useRecoilState(actionFlagState)
  const [position, setPosition] = useState('')

  useEffect(() => {
    let p = ''
    if(actionFlag.type === 'display-drawer'){
      p =  'left-[0px]'
      setPosition(p)
    }else if(actionFlag.type === 'remove-drawer'){
      p =  'left-[-260px]'
      setPosition(p)
    }
    
  }, [actionFlag.type])

  return (
    <div className={`${styles.drawerRoot} ${position}`}>
      <div className={styles.drawerHeading}>
        <img src={CloitLogo} alt="Cloit Logo" />
        <button onClick={() => setActionFlag({
          data: {},
          type: 'remove-drawer'
        })} className="">
          <img src={OpenMenu} alt="Cloit Logo" />
        </button>
      </div>
      <div className={styles.firstList}>
        <ListItem text="System" textStyle="text-white" Icon={() => <MdFolder color="white" size="30px" />} />
        <ListItem text="System Code" Icon={() => <img src={SubMenu} />} />
        <ListItem text="Properties" Icon={() => <img src={Submenu2} />} />
        <ListItem text="Menus" className={styles.itemMenu} textStyle="text-bluegrey-900" Icon={() => <BsGridFill size="25px" />} />
        <ListItem text="API List" Icon={() => <img src={Submenu2} />} />
      </div>
      <div className={styles.secondList}>
        <ListItem text="Users & Groups" Icon={() => <FaRegFolder className="text-bluegrey" size="30px"/>} />
        <ListItem text="Competition" Icon={() => <FaRegFolder className="text-bluegrey" size="30px"/>} />
      </div>
    </div>
  )
}
