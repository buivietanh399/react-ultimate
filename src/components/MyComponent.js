import React, {useState} from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';

// class MyComponent extends React.Component {
//     // JSX
//     // bên trong jsx chỉ được 1 element (1 thẻ div)
//     // cặp {} để viết biến, logic, javascript 

//     state = {
//         listUsers: [
//             { id: 1, name: 'Bui' , age: 16},
//             { id: 2, name: 'Viet', age: 20},
//             { id: 3, name: 'Anh' , age: 22}
//         ]
//     };


    // handleAddNewUser = (userObj) => {
    //     this.setState({
    //         listUsers: [userObj, ...this.state.listUsers]
    //     });

    // }

    // handleDeleteUser = (userId) => {
    //     let listUsersClone = [...this.state.listUsers];
    //     listUsersClone = listUsersClone.filter(item => item.id !== userId);
    //     this.setState(
    //         {
    //             listUsers: listUsersClone
    //         }
    //     );
    // }

//     render() {
//         // DRY: don't repeat yourself
        
//         return (
//             <> 
        
//                 <AddUserInfor
//                     handleAddNewUser = {this.handleAddNewUser}
//                 />
//                 <br/><br/>
//                 <DisplayInfor 
//                     listUsers = {this.state.listUsers}      
//                     handleDeleteUser = {this.handleDeleteUser}       
//                 />

//             </>
//         )
//     }

// }

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