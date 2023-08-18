import React, {useState} from 'react'

export default function TextForm  (props) {
  
  //Function onClickCopyToClipB
  const onClickCopyToClipB=() => 
  {
     //navigator.clipboard.writeText(text);
  }
  //Function onClickLowerCase
  const onClickLowerCase = ()=> {
        let lowerNewText = text.toLowerCase();
        setText(lowerNewText)
        props.showAlert("Text has been changed to Lower Case","success");
        
    }

    const onClickUpperCase = ()=> 
    {
       let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been changed to Upper Case","success");
    }
    //Function onClickChange
    const onClickChange = (event)=>
    {
       setText(event.target.value);
    }
    // Definining State variables
    const [text,setText] = useState("");
    return (
    <>
    <div className="container"  style={{color : props.mode==='dark'? 'white':'black'}} >
     <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={onClickChange} 
    style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'#042743'}}
    id="myBox" rows="8"></textarea>
    
    </div> 
    <button className="button2" onClick={onClickUpperCase} >Convert to UpperCase</button>
    <button className="button2 mx-2" onClick={onClickLowerCase} >Convert to LowerCase</button>
    <button className="button2 mx-2" onClick={onClickCopyToClipB} >Copy to Clipboard</button>
    </div>
    <div className = "container"  style={{color : props.mode==='dark'?'white':'black'}}>
    <h1 className="summaryText">Your Text Summary</h1>
    <p> {text.split(" ").length} words <br/> {text.length} characters</p>
    </div>
    </>
  )
}
