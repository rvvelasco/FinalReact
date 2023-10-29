import React from 'react'
import "./Navbar.css"
import CartWidget from '../CarWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='NavBar'>
            <div className='contenedor'>
                <Link to='/'> <h3>CompuShop</h3> </Link>
            </div>
                <div className='Categorias'>
                    <NavLink to={'/categoria/monitor'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Monitores </NavLink>
                    <NavLink to={'/categoria/teclado'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Teclados </NavLink>
                    <NavLink to={'/categoria/mouse'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Mouse </NavLink>
                </div>
            <div className='carro'>
                <CartWidget />
            </div>
        </nav>
    )
}
