import React from 'react';
import {useForm} from 'react-hook-form';

const AddUserForm = (props) => {
    
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data,e) => {
        // console.log(data);
        e.target.reset();
        props.addUser(data);
    }
    
    return ( 
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" 
                   name="name"
                   ref={
                       register({
                           required: {value: true, message: 'El campo es oblogatorio'},
                           minLength: {value: 2, message: 'El campo debe tener más de 2 caracteres'}
                       })
                   } 
            />
            {errors.name &&
                <span>
                    {errors.name.message}
                </span>
            }
            <label>Username</label>
            <input type="text" 
                   name="username" 
                   ref={
                       register({
                           required: {value: true, message: 'El campo es oblogatorio'},
                           minLength: {value: 2, message: 'El campo debe tener más de 2 caracteres'}
                       })
                   }
            
            />
            {errors.username &&
                <span>
                    {errors.username.message}
                </span>
            }
            <br></br>
            <button className="mt-1" type="submit">Add new user</button>
      </form>
     );
}
 
export default AddUserForm;