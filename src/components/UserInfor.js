import React from 'react';

class UserInfor extends React.Component {

    state = {
        name: 'Vanh',
        address: 'HaNoi',
        age: 21
    };

    
    handleOnChangInput = (event) => {
        this.setState(
            { 
                name: event.target.value,
            }
        );
    }

    handleOnChangeAge = (event) => {
        this.setState(
            { 
                age: event.target.value
            }
        );
    }

    handleOnSubmit = (event) => {
        event.preventDefault();   // hàm ngăn chặn load lại trang
        console.log(this.state);
    }

    render() {
        return (
            <div>
                 My name is {this.state.name} and I'm {this.state.age}

                <button onClick = {(event) => {this.handelClick(event)}}>Click me</button>

                <form onSubmit = {(event) => this.handleOnSubmit(event) } >
                    <label>Your name: </label>
                    <input type = "text" 
                        placeholder='Điền' 
                        value= {this.state.name}
                        onChange = {(event) => this.handleOnChangInput(event)}
                    />
                    <button>Submit</button>

                    <label>Your age: </label>
                    <input type = "text" 
                        placeholder='Điền' 
                        value= {this.state.age}
                        onChange = {(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;