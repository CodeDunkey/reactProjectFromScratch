// import React from "react";
import './../StylesSCSS/main.scss'
export default function Main (){
    return(
        <div className="mainWrapper">
            <h1 className="main">Main abcd</h1>
            <nav className='navbar'>Navbar
                <ul>
                   <li>li 1 <button className='button1'></button></li>
                   <li>li 2 <button className='button2'></button></li>
                   <li>li 3 <button className='button3'></button></li> 
                </ul>
            </nav>
            <p className='test'>test</p>
        </div>
    );
};