import { useState } from "react"
import { Validation } from "./validation"

const Form = (props) => {
    const [userData,setUserData] = useState({email:'', password:''})
    const [errors,setErrors] = useState({})

    const handleChange = (event) => {

        setUserData({
            ...userData,
            [event.target.name]:event.target.value
        })

        setErrors(Validation({...userData,
            [event.target.name]: event.target.value,}));
        };
    
    

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData)

    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input type="email"
            name="email"
            // value={userData.email}
            onChange={handleChange}
        />
        <span>{errors.email}</span>

        <label htmlFor="password">Password</label>
        <input type="password"
            name="password"
            onChange={handleChange}
        />
        <span>{errors.password}</span>
        <button>Submit</button>


    </form>
  )
}
export default Form