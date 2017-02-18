import * as express from 'express';
import WexinArticleModel from '../models/wexin_article';
export default class WexinArticleRoute {
    service = "weixin";
    doAction(action: string) {
        switch (action) {
            case "allArticles":
                return this.allArticles;
            case "addArticle":
                return this.addArticle;
        }
    }

    addArticle(req: express.Request, res: express.Response) {
        var {title, link, imageUrl} = req.query;
        if (title && link && imageUrl) {
            WexinArticleModel.addArticle(title, link, imageUrl).then(rtn => {
                res.json({ issuccess: true, data: rtn });
            });
        } else {
            res.json({ issuccess: false, errorMsg: '非法参数' });
        }

    }

    allArticles(req: express.Request, res: express.Response) {
        WexinArticleModel.allArticle().then(data => {
            res.send({
                issuccess: true,
                data: data
            });
        });
    }

}