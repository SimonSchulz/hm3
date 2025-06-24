import { Request, Response } from 'express';
import {postsRepository} from "../../repositories/post.repository";

export function getPostsHandler(req: Request, res: Response) {
    const Posts = postsRepository.findAll();
    res.send(Posts);
}