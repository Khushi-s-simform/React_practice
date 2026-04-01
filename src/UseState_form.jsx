import React, { useState } from "react";

function Form () {
    const [form , setForm] = useState({
        name : "",
        email :"" ,
        password:""
    });

    const [errors , setErrors] = useState({});

    const handleChange = (e) => {
        const {name , value} = e.target ;

        setForm({
            ...form,
            [name]:value
        });
    };

    const validate = () => {
        let neweErrors = {};

        if(!form.name) {
            neweErrors.name = "name is required";
        }

        if(!form.email.includes("@")){
            neweErrors.email = "Invalid email";
        }

        if(form.password.length < 6){
            neweErrors.password = "Password must be 6+ characters";
        }

        return neweErrors;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();

        if(Object.keys(validationErrors).length > 0){
            setErrors(validationErrors)
        }else {
            alert("form submitted !")
            console.log(form);
            
        }
    }

    return (
        <form onSubmit = {handleSubmit}>
            <h2>Signup Form</h2>

            <input 
                type="text"
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}/>
                <p style={{ color: "red" }}>{errors.name}</p>

                {/* Email */}
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                <p style={{ color: "red" }}>{errors.email}</p>

                {/* Password */}
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                />
                <p style={{ color: "red" }}>{errors.password}</p>

                <button type="submit">Submit</button>
                      

        </form>
    )
}
export default Form;