import s from './Navigation.module.css'
import clsx from 'clsx'
import { PiFilmSlate } from "react-icons/pi";
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { LiaSearchSolid } from "react-icons/lia";
import { motion } from 'framer-motion';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

export default function Navigation() {
    return (
        <header className={s.header}>
            <p className={s.logo}>
                <span>
                    <PiFilmSlate size={47} color='#551a8b' className={s.titleIcon} />
                </span>
                {' '}
                FilmFinder
            </p>
            <nav className={s.nav}>  
                <NavLink to='/' className={buildLinkClass}>Home <AiOutlineHome size={28} className={s.navIcon} /></NavLink>
                <NavLink to='/about' className={buildLinkClass}>About Us</NavLink>
                <NavLink to='/movies' className={buildLinkClass}>Movies <LiaSearchSolid size={28} className={s.navIcon}/></NavLink>
                </nav>
        </header>
    )
}