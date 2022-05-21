import React from 'react'
import LOgo from '../../src/Logo.png'
export default function Navbar() {
           function changebackground(e){
               e.target.style.backgroungColor='red';
           }
           function mouseout(e){
            e.target.style.Color='white';
           }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                <img src={LOgo} alt="" width="150" height="30" className="d-inline-block align-text-top"/>
                
                </a>
                <div className="container-fluid">
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/" onMouseOver={changebackground} onMouseOut={mouseout}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Be a partner</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Blogs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About us</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link " href='/'>Contect us</a>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
    }
