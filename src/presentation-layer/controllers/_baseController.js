/**
 * Created by mrlee on 2018/4/16.
 */
export default class BaseController {
    constructor () {
        this.getData = this.getData.bind(this);
    }

    async getData () {
        return "hehe";
    }
}