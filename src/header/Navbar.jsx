import React from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";


export default function Navbar()
{
    return(
        <>
            <div className="navouter">
                <div className="navLeft">
                    <NavLink className={'nav-link d-inline'} to={'/'}><img src="./images/logo.webp" alt="" /></NavLink>
                </div>
                <div className="navright pt-sm-2 pt-xl-0">
                    <ul>
                        <li> <NavLink className={'nav-link  d-inline'} to={'/'} style={({ isActive }) => ({
                                color: isActive ? "black" : "#a0a0a0",
                                fontWeight: isActive ? "bold" : "bold",
                            })}>home</NavLink></li>
                        <li><NavLink className={'nav-link d-inline'} to={'/about'} style={({ isActive }) => ({
                                color: isActive ? "black" : "#a0a0a0",
                                fontWeight: isActive ? "bold" : "bold",
                            })}>about us</NavLink></li>
                        <li><NavLink className={'nav-link d-inline'} to={'/department'} style={({ isActive }) => ({
                                color: isActive ? "black" : "#a0a0a0",
                                fontWeight: isActive ? "bold" : "bold",
                            })}>department</NavLink></li>
                        <li><NavLink className={'nav-link d-inline'} to={'/services'} style={({ isActive }) => ({
                                color: isActive ? "black" : "#a0a0a0",
                                fontWeight: isActive ? "bold" : "bold",
                            })}>services</NavLink></li>
                        <li><NavLink className={'nav-link d-inline'} to={'/gallery'} style={({ isActive }) => ({
                                color: isActive ? "black" : "#a0a0a0",
                                fontWeight: isActive ? "bold" : "bold",
                            })}>galery</NavLink></li>
                        <li><NavLink className={'nav-link d-inline'} to={'/contact'} style={({ isActive }) => ({
                                color: isActive ? "black" : "#a0a0a0",
                                fontWeight: isActive ? "bold" : "bold",
                            })}>contact</NavLink></li>
                        <li>
                            <button>
                            <a href="tel:+91 9403820779" className="d-inline text-decoration-none text-light fw-bolder">+91 9403820779</a>
                            </button>
                        </li>
                        <i class="ri-menu-line"></i>
                    </ul>
                </div>
            </div>
        </>
    )
}