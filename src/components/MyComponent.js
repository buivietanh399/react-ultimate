import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    // JSX
    // bên trong jsx chỉ được 1 element (1 thẻ div)
    // cặp {} để viết biến, logic, javascript 
    
    state = {
        listUsers: [
            { id: 1, name: 'Bui' , age: 20},
            { id: 2, name: 'Viet', age: 21},
            { id: 3, name: 'Anh' , age: 22}
        ]
    };

    render() {
        // DRY: don't repeat yourself
        
        return (
            <div> 
        
                <UserInfor/>
                <br/><br/>
                <DisplayInfor listUsers = {this.state.listUsers} abc = 'hehe'/>

            </div>
        )
    }

}

export default MyComponent;