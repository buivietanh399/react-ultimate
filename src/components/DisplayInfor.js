import React from "react";
class DisplayInfor extends React.Component {
    // Props: viết tắt của properties (tài sản), lấy ra thuộc tính từ thẻ components
    render() {

        // Destructuring arrays/Objects
        const {listUsers} = this.props;
        console.log(this.props);
        return (
            <div>
                { 
                    listUsers.map((user) => {
                        return (
                        <div key = {user.id}>
                            <div> My name is: {user.name} </div>
                            <div> My age is: {user.age} </div>
                            <hr/>
                        </div>
                        )
                    })
                
                }
                
            </div>
        )
    }
}

export default DisplayInfor;
