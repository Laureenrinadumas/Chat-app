import React from "react";
import "./Contact.css";

function Contact(props) {
    return (
        <figure className="Contact">
            <img src={props.avatar} alt={props.name} className="avatar"/>
            <figcaption>
                {props.online}
                <p className="name">{props.name}</p>
                <div className="status">
                    <span className={props.online ? 'status-online' : 'status-offline'}></span>
                    <span className="status-text">{props.online ? 'online' : 'offline'}</span>
                </div>
            </figcaption>
        </figure>)
        ;
}
export default Contact;