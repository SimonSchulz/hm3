import { Request, Response } from 'express';
import { HttpStatus } from '../../../core/types/http-statuses';
import {Post} from "../../types/post";
import {PostInputDto} from "../../dto/post.input-dto";
import {postsRepository} from "../../repositories/post.repository";
import {PostsRepository} from "../../../Posts/repositories/Post.repository";

export function createPostHandler(
    req: Request<{}, {}, PostInputDto>,
    res: Response,
) {
    const newPost: Post = {
        id: new Date().toString(),
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        PostId: req.body.PostId,
        PostName: PostsRepository.findById(req.body.PostId)?.name || ""
    };

    postsRepository.create(newPost);
    res.status(HttpStatus.Created).send(newPost);
}