import {useEffect, useState} from "react";
import axios from "axios";

const Request = () => {
    const [inputValue, SetInputValue] = useState('')
    const [data, SetData] = useState([])


    useEffect(() => {
        if (inputValue.length > 3)
            axios.get(`https://jsonplaceholder.typicode.com/posts/${inputValue.length}/comments`)
                .then(r => {
                    SetData(r.data)
                }).catch(e => console.error(e))
    }, [inputValue])

    return (
        <div>
            <label>input some text: </label>
            <input type="text" onChange={(e) => SetInputValue(e.target.value)}/>

            {data.map(e =>
                (
                    <div key={e.id} style={{border: '1px solid gray', margin: '10px', padding: '5px'}}>
                        <h4><span style={{color: 'red'}}>By: </span> {e.email}</h4>
                        <h5 style={{maxWidth: '300px'}}><span style={{color: 'red'}}>Name: </span> {e.name}</h5>
                        <div style={{maxWidth: '300px'}}><span style={{color: 'red'}}>text: </span> 
                            <span style={{fontStyle:'italic'}}>{e.body}</span>
                            </div>
                    </div>
                )
            )}
        </div>
    )
}

export default Request