/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
export default function Navigation() { 
        const { theme, toggle, dark } = useContext(ThemeContext)
        return (
        <div className='container'>
            <div className="navigation" style={{ backgroundColor: theme.backgroundColor}}>
            <input class="btn_toggle_menu" type="checkbox"/>
            <div class="toggle_menu_icon">
                    <span></span>
            </div>
            <nav style={{ backgroundColor: theme.backgroundColor, color: theme.color}}>
                <ul class="nav_menu_list">
                    <li class="nav_menu_item"><img className='logo' src='./assets/images/logo.png' alt='rottenstomatoes'></img> </li>
                    <li class="nav_menu_item"><a className='active' style={{
                                                                            backgroundColor: theme.backgroundColor,
                                                                            color: theme.color,
                                                                           }} href="#home">Home</a></li>
                    <li class="nav_menu_item"><a style={{
                                                    backgroundColor: theme.backgroundColor,
                                                    color: theme.color,
                                                        }} href='#news'>News</a></li>
                    <li class="nav_menu_item"><a style={{
                                                    backgroundColor: theme.backgroundColor,
                                                    color: theme.color,
                                                        }} href='#about'>About</a></li>
                    <li class="nav_menu_item"><a style={{
                                                    backgroundColor: theme.backgroundColor,
                                                    color: theme.color,
                                                        }} href='#contact'>Contact</a></li>
                    <li>                                  
                    <div style={{ position: "relative", float: "right" }}>
                        <a
                        className="switch-mode"
                        href="#"
                        onClick={toggle}
                        style={{
                            backgroundColor: theme.backgroundColor,
                            color: theme.color,
                            outline: "none",
                        }}
                        data-testid="toggle-theme-btn"
                        >
                        {!dark ? "Dark" : "Light"} mode
                        </a>
                    </div>
                    </li>  
                </ul>
            </nav>
            </div>
        </div>   
    )
}