import {useState} from "react"

function StateAssignementTwo(){
    const [array, setArray] = useState([]);

    return(
        <section>
            <button onClick={() => {
                let randomNum = Math.floor(Math.random() * 10);
                console.log(randomNum);
                setArray(array => [...array, randomNum]);
            }}>
            Click me!
            </button>
            <ul>
                {array.map((items, index) =>{
                    console.log(array);
                    return <li key={index}>{items}</li>
                })}
            </ul>
        </section>
    )
}

export default StateAssignementTwo;