import React from 'react'

const UserTable = (props) => {
    
    console.log(props.users);
    
    return ( 
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                            <button className="btn btn-primary"
                                    onClick={
                                        () => {props.editRow(user)}
                                        // () => {props.updateUser(user.id)}
                                    }
                            >
                                Edit
                            </button>
                            <button className="btn btn-danger ml-3"
                                    onClick={() => {props.deleteUser(user.id)}}
                            >
                                Delete
                            </button>
                            </td>
                        </tr>

                )) : (
                        <tr>
                            <td colSpan={3}>No users</td>
                        </tr>
                )
                
                }
            
            </tbody>
        </table>
     );
}
 
export default UserTable;