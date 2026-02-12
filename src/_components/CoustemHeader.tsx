import { useTheme } from "../_contexts/ThemeContext";
import styles from '@/src/_ui/animations/HeaderAnimation.module.css'
export default function ({title}: {title: string}) {
    const {colors} = useTheme();
    return (
        <div className={`${styles.headerAnimation} mb-10 w-fit ml-auto mr-auto px-10 py-5`}>
            <h1 className="text-5xl font-bold  text-center" style={{color: colors.text}}>
            {title}
            </h1>
        </div>
    )
}