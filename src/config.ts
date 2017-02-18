import * as path from 'path';
export const Config = {
    // 项目文件夹
    ROOTDIR: path.resolve(__dirname, '../'),
    // 服务器运行端口
    PORT: 3001,
    // 静态文件服务器
    PUBLICDIR: path.resolve(__dirname, '../public'),
    //routes 文件夹,生成dist之后要改成dist/routes
    ROUTESDIR: path.resolve(__dirname + '/routes'),
    // mongoo数据库
    // MONGOURL: 'mongodb://localhost/test'
    MONGOURL: 'mongodb://localhost/test'

}

