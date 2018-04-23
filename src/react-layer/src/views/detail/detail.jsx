/**
 * 新闻详情页
 * */
import BaseView from '../baseView';
import React from 'react';
import ReactDom from 'react-dom';
import 'whatwg-fetch'

class View extends BaseView {
    constructor() {
        super();
    }

    render() {
        return (
            <div>imperial</div>
        )
    }
}

ReactDom.render(<View />, document.getElementById('main'));
