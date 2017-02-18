import * as express from 'express';
import { Config } from './config';
import { scanner } from './scanner';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

// 在应用的最上面连接数据库
mongoose.connect(Config.MONGOURL);


var app = express();

app.use(express.static(Config.PUBLICDIR));

app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

// 扫描路由
scanner(app);

app.listen(Config.PORT, () => {
    console.log('server is running  on ' + Config.PORT);
});


