import React from 'react';
import ReactDom from 'react-dom';
import util from './helpers/utilityHelper';
//import bb from './views/baseView';
import test from './helpers/dateHelper';
//import promise from 'core-js/library/es6/promise';
import 'whatwg-fetch'

let { formatDate } = test;
console.log(formatDate);
class View extends React.Component {
    constructor() {
        super();
    }

    divClick() {
        let con = '88531683';
        console.log(`${con}_hehe`);
        console.log(util.test('mrlee'));
        this.getdata();
    }

    getdata() {
        //let a = { 'CityID': '359', 'HotelID': '1497032', 'CheckIn': 1524096000, 'CheckOut': 1524182400 };
        let res = fetch('http://wthrcdn.etouch.cn/weather_mini?city=北京市');
        res.then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
        });
        return '';
    }

    render() {
        return (
            <div onClick={ this.divClick.bind(this) }>1111</div>
        )
    }
}

ReactDom.render(<View />, document.getElementById('main'));
