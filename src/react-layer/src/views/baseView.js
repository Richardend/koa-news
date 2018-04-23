/**
 * 提取view中用到的方法
 * 所有的view都应该继承自这个基视图类
 * */
import React from 'react';
export default class BaseView extends React.Component {
    constructor() {
        super();
    }

    getUserInfo() {
        //调用window.xxx 来获取 userinfo。
        return window.nativeUserInfo || '';
    }

    isInApp() {
        return navigator.userAgent.indexOf('huadongmedia') !== -1;
    }
}
