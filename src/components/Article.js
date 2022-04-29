import { useState } from "react"
import { BsCheck2Circle } from "react-icons/bs"
import { MdWebStories } from "react-icons/md"

const Article = () => {
    const[view,setView] = useState(true)
    const[skills, setSkills] = useState(false)

    const handleChange = (e) => {
        setView(true)
        setSkills(false)
    }
    const handleClick = (e) => {
        setSkills(true)
        setView(false)
    }

    const Show = () => {
       if(view === true){
           return(
               <>
                    <main>
                        <div>
                            <div className="photo">
                               <div>
                                    <h2>Best shop</h2>
                                    <p>Front-end site</p>
                                    <a href="https://github.com/sebastianpotoczak/BestShop" target="_blank" ><MdWebStories /></a>
                               </div>
                           
                            </div>
                            <div className="photo">
                            <div>
                                <h2>Be beauty</h2>
                                <p>Full stack site</p>
                                <a href="https://github.com/sebastianpotoczak/FullStackSite" target="_blank" ><MdWebStories /></a>
                                </div>
                             
                            </div>
                            <div className="photo">
                            <div>
                                <h2>hand Over Things</h2>
                                <p>Front-end site</p>
                                <a href="https://github.com/sebastianpotoczak/handOverThing" target="_blank" ><MdWebStories /></a>
                                </div>
                             
                            </div>
                            <div className="photo">
                                <div>
                                <h2>This site</h2>
                                <p>Front-end</p>
                                <a href="https://github.com/sebastianpotoczak/portfolio" target="_blank" ><MdWebStories /></a>
                             </div>
                            </div>
                            </div>
                    </main>
               </>
           )
        }
        if(skills === true){
            return(
                <>
                  <section>
                    <div className="skill_half">
                        <h1>Front-end</h1>
                     
                    <div className="main">
                      <div className="skill">
                            <div>
                                <BsCheck2Circle className="skill_circle" size={25} />
                                <p>HTML</p>
                             
                            </div>
                            <div>
                                <BsCheck2Circle className="skill_circle" size={25} />
                                <p>CSS</p>
                          
                            </div>
                            <div>
                                <BsCheck2Circle className="skill_circle" size={25} />
                                <p>SCSS</p>
                      
                            </div>
                            <div>
                                <BsCheck2Circle className="skill_circle" size={25} />
                                <p>Java Script</p>
                       
                            </div>
                      </div>
                      <div className="skill">
                          <div>
                                <BsCheck2Circle className="skill_circle" size={25} />
                                <p>React</p>
                   
                            </div>
                            <div>
                                <BsCheck2Circle className="skill_circle" size={25} />
                                <p>Git</p>
                     
                            </div>
                            <div>
                                <BsCheck2Circle className="skill_circle" size={25} />
                                <p>Bootstrap</p>
                             
                            </div>
                      </div>
                      </div>
                      </div>
                      <div className="skill_half">
                            <h1>Back-end</h1>
                      <div className="main">
                      <div className="skill">
                            <div>
                                <BsCheck2Circle className="skill_circle" size={25} />
                                <p>Node.js</p>
                             
                            </div>
                            <div>
                                <BsCheck2Circle className="skill_circle" size={25} />
                                <p>ExpressJs</p>
                          
                            </div>
                      </div>
                      <div className="skill">
                            <div>
                                <BsCheck2Circle className="skill_circle" size={25} />
                                <p>Mongodb</p>
                      
                            </div>
                            <div>
                                <BsCheck2Circle className="skill_circle" size={25} />
                                <p>Mongoose</p>
                       
                            </div>
                      </div>
                      </div>
                      </div>
                </section>
                </>
            )
        }
    } 


    return(
        <>
            <article>
                <div className="article_content">
                    <div className="article_main">
                        
                        <div className="article_element">
                        <button onClick={handleChange} className={view ? "activ_button" : null} value="Portfolio" name="view">Portfolio</button>
                        </div>
                        <div className="article_element">
                        <button onClick={handleClick} className={skills ? "activ_button" : null} value="Skills"  name="view">Skills</button>
                        </div>
                    </div>
                    <div>
                 
                            <Show />
              

                </div>
                
                </div>
              
             
            </article>
        </>
    )
}

export default Article