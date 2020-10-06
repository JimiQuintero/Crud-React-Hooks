import React, {useState} from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

function App() {
  
  const userData = [
    {id: uuidv4(), name: 'Tania', username: 'floppydiskette'},
    {id: uuidv4(), name: 'Craig', username: 'siliconeidolon'},
    {id: uuidv4(), name: 'Ben', username: 'benisphere'},
  ]

  // state
    const [users, setUser] = useState(userData);
  
  // Metodo agregar Usuario
    const agregarUser = (user) => {
      user.id = uuidv4();
      setUser([
        ...users,
        user
      ])
    } 

    // Metodo para eliminar
    const eliminarUser = (id) => {  
      // console.log(id); 
      setUser(users.filter(user => user.id !== id));
    }

    // Editar Usuario
    const [editing, setEditing] = useState(false);

    const [currentUser, setCurrentUser] = useState({
      id: null, name: '', username: ''
    });

    const editRow = (user) => {
      setEditing(true);
      setCurrentUser({
        id: user.id, 
        name: user.name,
        username: user.username
      })
    }

    const updateUser = (id, updateUser) => {
      
      setEditing(false);

      setUser(users.map(user => (user.id === id ? updateUser : user)));

    }
  
  
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit user</h2> 
                <EditUserForm
                currentUser={currentUser}
                updateUser={updateUser}
                /> 
              </div>
            ): (
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={agregarUser} /> 
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable 
              users={users} 
              deleteUser={eliminarUser} 
              editRow={editRow} 
           />
        </div>
      </div>
    </div>
  );
}

export default App;
