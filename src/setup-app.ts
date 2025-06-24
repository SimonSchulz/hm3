import express, { Express } from 'express';
import {BLOGS_PATH, POSTS_PATH} from "./core/paths/paths";


export const setupApp = (app: Express) => {
    app.use(express.json());

    app.get('/', (req, res) => {
        res.status(200).send('hello world!!!');
    });

    app.use(BLOGS_PATH, );
    app.use(POSTS_PATH, );

    return app;
};