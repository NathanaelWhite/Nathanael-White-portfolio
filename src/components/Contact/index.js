import React from "react";

function Contact() {
    return(
        <div className="contact">
            <p>Send a friendly message!</p>
            <textarea></textarea>
            <button className="send-btn">Send</button>

            <p>Follow up with me on socials!</p>
            <ul className="socials">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Up Work</a></li>
            </ul>
        </div>
    )
}

export default Contact;