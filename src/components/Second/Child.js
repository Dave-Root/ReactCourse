import { useState } from "react"
import './Style.css'

const Child = ({ fruits }) => {
    const [textLength, setTextLength] = useState(0)
    const countLength = (value) => {
        setTextLength(value.length)
    }

    return (
        <div className="container"> 
            <div>
                <h3>Fruits:</h3>
                {fruits.map((f, index) => (
                    <p key={index}>{f}</p>
                ))}
            </div>
            <div>
                <h3>Text length counter:</h3>
                <input type="text" placeholder="input some text" onChange={(e) => countLength(e.target.value)} />
                <p>inputed text length is : {textLength}</p>
            </div>
        </div>
    )

}

export default Child