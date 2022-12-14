import React, { useState } from 'react'


export default function TextForm(props) {

    let myStyle = {
        color:props.mode==='light'?'white':'black',
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const removeText = () => {
        setText("");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    const copyText = ()=>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To Clipboard", "success")    
    }
    const [text, setText] = useState("");
    // text = "new text"   Wrong way to change the 'text' variable value 
    // setText("new text") // This is correct way to change the text value
    return (
        <>
            <div className='container'>
                <h1 style={{color:props.mode==='light'?'#042743':'white'}}>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" style={{backgroundColor:props.mode==='dark'?'#042743':'white'}}></textarea>
                </div>
                <div className="btn btn-primary mx-2  my-2" onClick={handleUpClick}>Convert to Uppercase</div>
                <div className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</div>
                <div className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Texts</div>
                <div className="btn btn-danger mx-2 my-2" onClick={removeText}>Remove Texts</div>
            </div>
            <div className="container" style={myStyle}>
                <h2>Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : "Enter your text in the above textarea to preview it here"}</p>
            </div>
        </>
    )
}
