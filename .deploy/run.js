/**
 * Created by mrlee on 2018/4/16.
 */
import appSettings from "../src/presentation-layer/configs/appSetting"
import webServer from "../src/presentation-layer/global"

let port = appSettings.port;

webServer.listen(port);