import React from 'react'
import './Header.css'
import './_Header.scss'
import logo from '../images/logo.svg'

function Header() {
    return (
        <div className='header'>
            <div className='header_container'>
    
    <div className='icons'>
    <svg aria-hidden="true" focusable="false" width="20" data-prefix="fas" data-icon="long-arrow-alt-left" class="svg-inline--fa fa-long-arrow-alt-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#8958b1" d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"></path></svg>
    <svg aria-hidden="true" focusable="false" data-prefix="fas"  width="15" data-icon="tint" class="svg-inline--fa fa-tint fa-w-11" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="#8958b1"  d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path></svg>
    </div>

    <div className='header_p'>
        <h4 className='header_heading'>Grid Menu</h4>
        <p className='by'> <span className='inspired'>Inspired by</span> <span className='live'>Abelton Live 10: What's New</span></p>
    </div>
    
   


    <div className='header_end'>
    
    <div className='para'>
         <p className='sponser'>Sponsored By</p>
     <img src={logo} className='logo' />
    </div>
    <p className='system'>Knwoledge Sharing System <br /> perfect for your team </p>
           </div>
            </div>
            </div>
    )
}

export default Header
