import React from "react";
import './Input.css'


export function InputText({label, type}){
    return(
        <input type={type} placeholder={label} className="input-text"/>
    );
}