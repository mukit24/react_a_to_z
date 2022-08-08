import { useState } from "react"
function Form() {
    const [inputs,setInputs] = useState({});

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs.name)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Your Name" value={inputs.name} onChange={handleChange} />
                <input type="number" name="age" placeholder="Enter Your Age" value={inputs.age} onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </form>
        </>

    )
}

export default Form