import {useState} from "react"

function StateAssignementOne(){
    const [state, setState] = useState(0);

    return(
        <section>
            <button onClick={() => {setState(state+1)}}>{state}</button>
        </section>
    )
}

export default StateAssignementOne;