import React, {useEffect, useState} from 'react';

const AddUserInfor = (props) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('Ha Noi');
    const [age, setAge] = useState('');

    const handleOnChangeInput = (event) => {
        setName(event.target.value);
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();   // hàm ngăn chặn load lại trang
        // console.log(this.state);
        props.handleAddNewUser({
            id: (Math.floor(Math.random()*100+1)) + ' - random',
            name: name,
            age: age
        }) ; 
    }


    return (
            <div>
                 My name is {name} and I'm {age}

                <form onSubmit = {(event) => handleOnSubmit(event) } >
                    <label>Your name: </label>
                    <input type = "text" 
                        placeholder='Điền' 
                        value= {name}
                        onChange = {(event) => handleOnChangeInput(event)}
                    />
                    <button>Submit</button>

                    <label>Your age: </label>
                    <input type = "text" 
                        placeholder='Điền' 
                        value= {age}
                        onChange = {(event) => handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }




export default AddUserInfor;