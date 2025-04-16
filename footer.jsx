import './styling.css'
export default function Footer(){
    return(
        <div className="footer">
        <div className="footer1">
            <h1 style={{color:'black'}}>Thames</h1><br />
        <p className='end'>All rights reserved <a href="#">Codeefly</a> @2025</p>
        </div>
        <div className="footer2">
            <h1 style={{color:'black',fontweight: '100'}}>Newsletter</h1><br />
            <input type="email" placeholder='&nbsp;&nbsp;&nbsp;submit your email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📧' />
        </div>
        <div className="footer3">
            <h1 style={{color:'black',fontweight: '100'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Follow Me</h1>
        </div>
        </div>
    )
}