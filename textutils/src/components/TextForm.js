import React, { useState } from 'react'

function TextForm(props) {

    const [text, setText] = useState("")

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleToUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    return (
        <div className='container' style={{ paddingTop: "50px" }}>
            <h1>{props.Heading}</h1>
            <div>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleToUpperCase}>Convert to UpperCase</button>
                <button className='btn btn-primary mx-2' onClick={handleToLowerCase}>Convert to LowerCase</button>
            </div>
            <div>
                <h1 className='mt-5'>Text Summary</h1>
                <p>Words : {text.split(' ').length} and Character : {text.length}</p>
                <p>Time to Read : {0.008 * text.split(' ').length}</p>
            </div>
        </div>
    )
}

export default TextForm
