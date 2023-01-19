import React, {useState} from "react";
import './DisplayInfor.scss';
import logo1 from './../logo.svg';
// class DisplayInfor extends React.Component {
//     // Props: viết tắt của properties (tài sản), lấy ra thuộc tính từ thẻ components


//     render() {
//         console.log('>> call render()');

//         // Destructuring arrays/Objects
//         const {listUsers} = this.props;
//         // console.table(listUsers);     In ra bảng 

//         return (
//             <div className = "display-infor-container">
             
//                 {  true &&
//                     <>
//                     { 
//                         listUsers.map((user) => {
//                             // if (+user.age >= 18)                      //  + để convert string sang number
//                                 return (
//                                 <div key = {user.id}  className = { +user.age >=18 ? "green" : "red"}>
//                                     <div style={{color: 'blue'}}> My name is: {user.name} </div> 
//                                     <div> My age is: {user.age} </div>
//                                     <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete user</button>
//                                     <hr/>
//                                 </div>
//                                 )
                            
//                         })
                    
//                     }
                    
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    // Destructuring arrays/Objects
    const {listUsers} = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true); // tham số thứ 2 là tcông cụ cập nhật giá trị state 

    /* <=> this.state = {
                isShowHideListUser: true,
    } */
    
    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    return (
        <div className = "display-infor-container">


                <span onClick = { () => handleShowHideListUser() }>
                    { isShowHideListUser === true ? 'Hide list users' : 'Show list users' }
                </span>
            

            {  isShowHideListUser &&
                <>
                    { 
                        listUsers.map((user) => {
                        // if (+user.age >= 18)                      //  + để convert string sang number
                        return (
                            <div key = {user.id}  className = { +user.age >=18 ? "green" : "red"}>
                                <div style={{color: 'blue'}}> My name is: {user.name} </div> 
                                <div> My age is: {user.age} </div>
                                <button onClick={() => props.handleDeleteUser(user.id)}>Delete user</button>
                                <hr/>
                            </div>
                        )
                                    
                        })
                            
                    }
                            
                </>
            }
        </div>
    )
}


export default DisplayInfor;
