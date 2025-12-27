'use client'
import { MdLightMode } from 'react-icons/md';
import { useTheme } from '../../contexts/ThemeContext';

export default function ModeSwithcer() {
    const {theme, toggleTheme} = useTheme()
    return (
        <div>
            <MdLightMode 
            onClick={toggleTheme}
            className='text-3xl cursor-pointer'
            ></MdLightMode>
        </div>
    )
}