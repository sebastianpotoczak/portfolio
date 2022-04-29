import { FiGithub } from "react-icons/fi";
import photo from "../assets/sebek.jpg"
import cv from "../assets/CV_Sebastian_Potoczak.pdf"
const Header = () => {
     const handleDownload = () => {

     }

    return(
        <>
        
        <header>
            <div className="header_content">
            <img src={photo}/>
            <h1>Sebastian Potoczak</h1>
            <h2>Junior Front-end web developer</h2>
            <a className="header_github" href="https://github.com/sebastianpotoczak" target="_blank"><FiGithub className="header_github" size={25}/></a>
            <div className="header_info">
                <div>
                    <h3>1.5</h3>
                    <p>Years of <br/> study</p>
                </div>
                <div>
                    <h3>+5</h3>
                    <p>Completed  <br/>  projects</p>
                </div>
                <div>
                    <h3>2</h3>
                    <p>Courses at  <br/>  CodersLab</p>
                </div>
            </div>
            <a href={cv} onClick={handleDownload} download>Download CV</a>
            </div>
          
        </header>
        </>
    )
}

export default Header