import React from 'react';
import {useForm} from 'react-hook-form';

const EditUserForm = (props) => {
    
    // console.log(props.currentUser);

    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser 
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username);

    const onSubmit = (data,e) => {
        // console.log(data);
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data);
        // LImpiar datos
        e.target.reset();
        
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
            <button className="mt-1" type="submit">Edit user</button>
      </form>
     );
}
 
export default EditUserForm;
