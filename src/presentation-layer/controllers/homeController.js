/**
 * Created by mrlee on 2018/4/16.
 */
import BaseController from "./_baseController"

export default class HomeController extends BaseController {
    constructor () {
        super();

        this.index = this.index.bind(this);
    }

    async index (ctx) {

        await ctx.render('home/index')
    }
}