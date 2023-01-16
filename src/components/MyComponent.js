import React from 'react';

class MyComponent extends React.Component {
    // JSX
    // bên trong jsx chỉ được 1 element (1 thẻ div)
    // cặp {} để viết biến, logic, javascript 

    state = {
        name: 'Vanh',
        address: 'HaNoi',
        age: 21
    };

    render() {
        return (
            <div> 
                My name is {this.state.name} and I'm from {this.state.address}
            </div>
        )
    }

}

export default MyComponent;