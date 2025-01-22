import React, {useState} from 'react';
import Button from '@mui/material/Button';
import "./Form.css";

function Form(props)
{
    const [user, setUser] = useState
    (
        {
            firstName: "",
            lastName: "",
        }
    );

    function submitFormData(formData)
    {
        alert(`Form Submitted '${formData.get("firstName")} ${formData.get("lastName")}'`);

        /*  after submitting, fields will be cleared out
            => use user object to keep track
        */
        // setUser
        // ({
        //     firstName: formData.get("firstName"),
        //     lastName: formData.get("lastName"),
        // });

        props.handleSubmit(user);
    }

    function submitForm()
    {
        alert(`Form Submitted '${user.firstName} ${user.lastName}'`);

        props.handleSubmit(user);
    }

    function clearForm()
    {
        setUser
        ({
            firstName: "",
            lastName: "",
        });
    }

    function handleTextChange(event)
    {
        const {name, value} = event.target;
        switch(name)
        {
            case 'firstName':
                setUser({...user, firstName: value})
                break;

            case 'lastName':
                setUser({...user, lastName: value})
                break;

            default:
                throw new Error("Form.js handleTextChange name defaulted");
        }
    }

    return (
        <div class = "flex flex-grow justify-center" className = "form">
            <form 
                class = "space-y-4 mx-5 flex flex-col"
                // action={submitFormData}  // only used w/ react.button
            >
                <div>
                    <label
                        // class = "text-xl flex justify-center"    // centers the text
                        class = "text-xl"
                        htmlFor='First Name'>
                            First Name
                    </label>
                </div>
                <div>
                    <input 
                        name = 'firstName' 
                        type = 'text' 
                        value = {user.firstName}
                        onChange= {handleTextChange}
                    />
                </div>

                <div>
                    <label 
                        class = "text-xl"
                        htmlFor='Last Name'>
                            Last Name
                    </label>
                </div>

                <div>
                    <input
                        name = 'lastName'
                        type = 'text'
                        value = {user.lastName}
                        onChange= {handleTextChange}
                    />
                </div>
                

                <div class = "space-x-4">
                    <Button variant='contained' onClick={submitForm}>
                        Submit
                    </Button>
                    
                    <Button variant = 'contained' onClick={clearForm}>
                        Clear
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Form;