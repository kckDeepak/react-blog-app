import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext';

export default function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div className='header'>
        <div className='header-item'>
            <a href="/">
                <strong>HomePage</strong>
            </a>
        </div>
        <div className='header-item'>
            <a href="/login">
                <strong>Login</strong>
            </a>
            <button onClick={toggleTheme}>{theme==='light'?'Theme:light':'Theme:dark'}</button>
        </div>
    </div>
  )
}
