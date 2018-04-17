import React from 'react'
import ReactDom from 'react-dom'

class View extends React.Component {
    constructor() {
        super();
    }

    divClick() {
        console.log('hehehaha');
    }

    render() {
        return (
            <div onClick={ this.divClick }>1111</div>
        )
    }
}

ReactDom.render(<View />, document.getElementById('main'));
