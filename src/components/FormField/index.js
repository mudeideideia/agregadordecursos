import React from 'react'


function FormField({label = "", type = "text", name ="", value = "", onChange = () => {}}) {
    if(type == "textarea") {
        return (
            <>
                <label> {label} </label>
                <textarea
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <br/>
            </>
        )
    }
    return (
        <>
            <label> {label} </label>
            <input 
                type={type}
                name={name}
                value={value}
                onChange={onChange}
            />
            <br/>
        </>
    )
}

export default FormField