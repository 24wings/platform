import * as express from 'express';
export default class WexinArticleRoute {
    service = "weixin";
    doAction(action: string) {
        switch (action) {
            case "allArticles":
                return this.allArticles;
        }
    }

    allArticles(req: express.Request, res: express.Response) {
        res.send({
            issuccess: true,
            data: ['ok']
        })

    }

}