// Code Keypad Component Here
//import React from 'react'

export default function KeyPad() {
    
    function handleChange() {
        console.log("Entering password...")
    }

    return (
        //render an input with the right type
        //event handler listens for change event
        <input type="password" onChange={handleChange} />
    );
}