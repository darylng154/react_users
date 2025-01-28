import React, {useState} from 'react';
import Button from '@mui/material/Button';
import "./Form.css";

function Form(props)
{
    const [user, setUser] = useState
    (
        {
            _id: "",
            firstName: "",
            lastName: "",
        }
    );

    function submitFormData(formData)
    {
        alert(`Form Submitted '${formData.get("_id")} ${formData.get("firstName")} ${formData.get("lastName")}'`);

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
        alert(`Form Submitted '${user._id} ${user.firstName} ${user.lastName}'`);

        props.handleSubmit(user);
    }

    function deleteForm()
    {
        alert(`Form Deleted '${user._id} ${user.firstName} ${user.lastName}'`);

        props.handleDelete(user);
    }

    function clearForm()
    {
        setUser
        ({
            _id: "",
            firstName: "",
            lastName: "",
        });
    }

    function handleTextChange(event)
    {
        const {name, value} = event.target;
        switch(name)
        {
            case '_id':
                setUser({...user, _id: value});
                break;

            case 'firstName':
                setUser({...user, firstName: value});
                break;

            case 'lastName':
                setUser({...user, lastName: value});
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
                        htmlFor='ID'>
                            ID
                    </label>
                </div>
                <div>
                    <input 
                        name = '_id' 
                        type = 'number' 
                        value = {user._id}
                        onChange= {handleTextChange}
                    />
                </div>

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

                    <Button variant = 'contained' onClick={deleteForm}>
                        Delete
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Form;