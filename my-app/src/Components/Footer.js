import React from 'react'
import './Footer.css'
import './_Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_container'>
              <div className='explore'>
              <p>+ explore</p>
              </div>
              <div className='demo'>
              <h4 className='demo_color'>Demo 1</h4>
              <h4 className='demo_color'>Demo 2</h4>
              <h4 className='demo_color'>Demo 3</h4>
              </div>
              </div>
        </div>
    )
}

export default Footer
