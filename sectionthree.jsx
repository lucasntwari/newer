import './styling.css'
import Navbar from "./navbar"
export default function Sectionthree(){
    return(
        <div className="s3">
            <Navbar/>
            <div className="divisions">
                <div className="one">
              

                </div>
                <div className="two">
                <h1 className='heading'><b>I Develop a system that works</b></h1><br /><br />
               <p className='subheading'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laboru doloremque laudantium, totaeaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae <br /></p><br />
               <p className='subheading'>Oremque laudantium, totaeaque ipsa quae </p><br /><br />
            <table>
                <tr>
                    <td style={{fontWeight:'500' , color:'rgba(0, 0, 0, 0.8)'}}>names</td>
                    <td>James smith</td>
                    <td style={{fontWeight:'500' , color:'rgba(0, 0, 0, 0.8)'}}>Phone</td>
                    <td>+123 456 7890</td>
                </tr>
                <tr>
                    <td style={{fontWeight:'500' , color:'rgba(0, 0, 0, 0.8)'}}>Age</td>
                    <td>29 Years</td>
                    <td style={{fontWeight:'500' , color:'rgba(0, 0, 0, 0.8)'}}>Email</td>
                    <td>Hello@thames.com</td>
                </tr>
                <tr>
                    <td style={{fontWeight:'500' , color:'rgba(0, 0, 0, 0.8)'}}>Occupation</td>
                    <td>System Engineer</td>
                    <td style={{fontWeight:'500' , color:'rgba(0, 0, 0, 0.8)'}}>Nationality</td>
                    <td>Bangladesh</td>
                </tr>
            </table>
                </div>
            </div><br />
            <marquee behavior="" direction="left" className='marquee'>*SENIOR WEBSITE DEVELOPER FROM NEW YORK*</marquee>
                <marquee behavior="" direction="right" style={{color:'grey'}} className='marquee'>*SENIOR WEBSITE DEVELOPER FROM NEW YORK*</marquee>
        <div  className='subsection3'>
        <p>P o r t f o l i o <br /></p><h1>My recent works</h1>
        <div className='otherdivs'><h2>software design for codeefly</h2></div>
        <div className='otherdivs'><h2>website development for ABC Corporation</h2></div>
        <div className='otherdivs'><h2>Branding easy Computers</h2></div>
        <div className='otherdivs'><h2>Security Analysis for codee fy</h2></div>
        </div>
        </div>
    )
}