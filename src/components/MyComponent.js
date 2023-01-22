import React, {useState} from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';


const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: 'Bui' , age: 16},
            { id: 2, name: 'Viet', age: 20},
            { id: 3, name: 'Anh' , age: 22}
        ]
    ); 

    
    const handleAddNewUser = (userObj) => {
        
        setListUsers([userObj, ...listUsers]);
    }

    const handleDeleteUser = (userId) => {
        let listUsersClone = listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone);
    }


    return (
        <> 
            <AddUserInfor
                handleAddNewUser = {handleAddNewUser}
                listUsers = {listUsers}
            />
            <br/><br/>
            <DisplayInfor 
                listUsers = {listUsers}      
                handleDeleteUser = {handleDeleteUser}       
            />

        </>
        
    )
}

export default MyComponent;