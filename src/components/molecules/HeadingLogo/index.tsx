import { BsGridFill } from "react-icons/bs";
import Text from '@/components/atoms/Text';
import styles from './styles.module.css'

export interface HeadingLogoProps{
    className?: string
}

export default function HeadingLogo({ className } : HeadingLogoProps) {
  return (
    <div className={`${styles.mainContainer} ${className}`}>
        <div className={styles.iconContainer}>
            <BsGridFill color="white" />
        </div>
        <Text className={styles.logoText} >Menus</Text>
    </div>
  )
}
