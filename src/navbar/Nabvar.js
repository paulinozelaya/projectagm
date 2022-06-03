import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'
export const Nabvar = () => {
    const { logout } = useAuth0();
  return (
    <>
        <header>
            <nav>
                <div className="nav-wrapper red">
                    <Link to="#" className="brand-logo">Project AGM</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/"><i className="material-icons left">home</i>Home</Link></li>
                        <li><Link to="/Image"><i className="material-icons left">image</i>Imagenes</Link></li>
                        <li><Link to="/Music"><i className="material-icons left">music_note</i>Musica</Link></li>
                        <li><Link to="/Video"><i className="material-icons left">video_library</i>Video</Link></li>
                        <li onClick={() => logout({ returnTo: window.location.origin })}><i className="material-icons left">logout</i>logout</li>
                    </ul>
                </div>
            </nav>           
        </header>
    </>
  )
}
