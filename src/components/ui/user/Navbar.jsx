import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
export const Navbar = () => {
    const [Mobile, setMobile] = useState(false)
    return (
        <>
            <nav className='navbar'>
                <h3 className='logo'>LG</h3>

                <ul className={Mobile ? 'nav-links-mobile' : 'nav-links'} onClick={() => setMobile(false)}>
                    <Link to={'/admin'} className='text-center'>
                        <button type="summit" className="btn btn-outline-success "
                            style={{
                                height: '10hv',
                                width: 100,
                                margin: 6
                            }}
                        >Ingresar</button>
                    </Link>
                </ul>
                {
                }
                <button className='mobile-menu-icon ' onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <ImCross /> : <FaBars />}
                </button>
            </nav>
        </>
    )
}
export default Navbar
