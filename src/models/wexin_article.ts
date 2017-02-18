import * as mongoose from 'mongoose';



var WeixinArticle = mongoose.model('WexinArticle', new mongoose.Schema({
    title: String,
    link: String,
    imageUrl: String
})
);





export default class WeixinArticleModel {
    static addArticle(title, link, imageUrl) {
        return new WeixinArticle({ title, link, imageUrl }).save()
    }

    static allArticle() {
        return WeixinArticle.find();
    }

}