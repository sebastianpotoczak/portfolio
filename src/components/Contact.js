import {BsFillTelephoneFill} from "react-icons/bs"
import { FiMail } from "react-icons/fi"


const Contact = () => {

    return(
        <>
            <div className="contact">

                <div className="contact_contain">
                    <h1>Contact</h1>
                    <div className="contact_left">
                    <a href="tel:506704422" class="details__item">
                        <BsFillTelephoneFill className="contact_icon"/>
                        <h2>506 704 422</h2>
                    </a>
                    </div>
                    <div className="contact_left">
                    <a href="mailto:potoczaksebastian22@gmail.com" class="details__item">
                    <FiMail  className="contact_icon"/>
                    <h2> potoczaksebastian22@gmail.com</h2>
                    </a>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact