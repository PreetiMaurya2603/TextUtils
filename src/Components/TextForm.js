import React, {useState} from 'react';


export default function TextForm(props) {  
    const handleUpClick =()=>{
        // console.log("UpperCase was clicked:",+ text);
        let newText = text.toUpperCase();
        props.showAlert("{converted to Uppercase}", "success");
        setText(newText)
    }
    const handleLowClick =()=>{
        // console.log("UpperCase was clicked:",+ text);
        let newText = text.toLowerCase();
        props.showAlert("{converted to Uppercase}", "success");
        setText(newText)
    }

    const handleCopyClick =()=>{
        // console.log("UpperCase was clicked:",+ text);
        var text = document.getElementById("myBox");
        text.select();
        props.showAlert("{Text is copied}", "success");
       navigator.clipboard.writeText(text.value)     
    }

    const handleClearClick =()=>{
        // console.log("UpperCase was clicked:",+ text);
        let newText = ''; 
        props.showAlert("{Text cleared}", "success");
         setText(newText)      
    }


     const handleOnChange =(event)=>{ 
        // console.log("On Change")
        setText(event.target.value);
    }
 

    const [text , setText] = useState('');
    // text = "new text"; //Wrong way to change the state
    // setText("new text"); //Correct way to change the state
    return (
      <>
    <div class="container" style = {{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor:props.mode==='dark'?'#13466e':'white' , color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
         <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}> Convert to Uppercase</button>
         <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}> Convert to Lowercase</button>
         <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}> Clear Text</button>
         <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}> Copy Text</button>
         
    </div>
    <div class="container my-3" style = {{color: props.mode==='dark'?'white':'black'}}>
       <h3>Your text summary </h3>
       <p>{text.split(" ").filter((element)=>{
        return element.length!==0}).length} and {text.length} characters </p>
        <p>{0.008 * text.split(" ").filter((element)=>{
        return element.length!==0}).length} Minutes read </p>
        <h3>Preview</h3>
        <p>{text.length>0?text: "Enter the text in the textbox to preview it here"}</p>
    </div>
  </>
  
  )
}