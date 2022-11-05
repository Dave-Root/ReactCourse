import {useEffect, useState} from "react";

const Increment = () => {

    const [first, setFirst] = useState(0)
    const [second, setSecond] = useState(0)
    const [greatest, SetGreatest] = useState('')

    useEffect(() => {
        first === second ? SetGreatest('first is equal to second') :
            first > second ? SetGreatest('first is greatest') : SetGreatest('second is greatest')
    }, [first, second])

    return (
        <div>
            <button onClick={() => setFirst(first + 1)}>Increment First</button>
            <button onClick={() => setSecond(second + 1)}>Increment Second</button>
            <div>
                <br/> 
                ( {first} , {second} )
                <br/>
                {greatest}
            </div>
        </div>
    )
}
export default Increment