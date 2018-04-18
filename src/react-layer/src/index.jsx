import React from 'react'
import ReactDom from 'react-dom'

class View extends React.Component {
    constructor() {
        super();
    }

    divClick() {
        let con = '1';
        console.log(`${con}_hehe`);
    }

    render() {
        return (
            <div onClick={ this.divClick }>1111</div>
        )
    }
}

ReactDom.render(<View />, document.getElementById('main'));
