/**
 * Created by mrlee on 2018/4/16.
 */

import Router from "koa-router"

import appSetting from "./appSetting"

import home from "../routes/home"

const router = new Router({
    prefix: appSetting.vd
});

home(router);

export default router;