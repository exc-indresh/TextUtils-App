import React,{useState} from 'react'

export default function About() {
    const [myStyle, setMyStlye] = useState({
        color: 'black',
        backgroundColor:'white',

    })
    const [btnText,setBtnText] = useState("Enable Dark Mode")
    const toggleStyle = ()=>{
        if(myStyle.color==='white'){
            setMyStlye({
                color: 'black',
                backgroundColor:'white',
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStlye({
                color: 'white',
                backgroundColor:'black',
            })
            setBtnText("Enable Light Mode")
        }
    }
   
    return (
        <div className='container my-3' style={myStyle}>
            <h1>About TextUtils Features</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>What does it do?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        Text-Utils.com is described as a central repository of tools for helping with developer activities. First of all i am a beginner developer so i have not added more features to in it. <strong>It just includes tools such as converting the case of alphabet, removing text, copying text, counting number of characters as well as number of words, removing extra spaces and it will also count how much it takes time to read the whole text of the textarea. You can also change the theme of the page dynamically as your wish</strong>. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Why is it different?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        <strong>Fast, secure and easy</strong>. This is a summary of what Text-Utils.com is. All we design is intended to be fast, really fast. Other than that, all our utilities are client-side, meaning your data will not go through our servers to be processed. Your data is secure. Finally, Text-Utils.com is also quite easy. Everything can be found on the page very quickly, in just a few clicks.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>My Opinion</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is the best thing to interact with your text.
                            Currently i am learning <strong>React</strong> and i have made it using react js which is a framework (library) of <strong>JavaScript</strong>, So i have not added more features to in it but. If you want to know more about TextUtils features you can go <a href="https://www.text-utils.com/about/" target={"_blank"} rel={"noreferrer"}><strong style={{border:'1px solid grey',borderRadius:'5px',background:'#000480'}}>Explore More</strong></a> here!    
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button onClick={toggleStyle} type='button' className="btn btn-primary">{btnText}</button>
            </div>
            
        </div>
        

    )
}
