/**
 * Created by mrlee on 2018/4/16.
 */
import Koa from 'koa'
import path from 'path'
import views from 'koa-views'
import routeConfig from './configs/routeConfig'
import koaStatic from 'koa-static'

const [
    server, viewPath, resPath
] = [
    new Koa(),
    path.join(__dirname, 'views'),
    path.join(__dirname, '../react-layer')
];

server.use(koaStatic(resPath));

server.use(views(viewPath, {
    extension: 'pug'
}));
//指定路由的代码一定要放在 , 指定模板的后面. 不然ctx没有render方法.
server.use(routeConfig.routes()).use(routeConfig.allowedMethods());


export default server;
