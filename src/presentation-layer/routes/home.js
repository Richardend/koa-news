/**
 * Created by mrlee on 2018/4/16.
 */
import HomeController from "../controllers/homeController"

const controller = new HomeController();

export default (router) => {
    router.get("/", controller.index);
}