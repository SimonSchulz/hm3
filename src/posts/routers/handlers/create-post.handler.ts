import { Request, Response } from 'express';
import { HttpStatus } from '../../../core/types/http-statuses';
import {Post} from "../../types/post";
import {PostInputDto} from "../../dto/post.input-dto";
import {postsRepository} from "../../repositories/post.repository";
import {blogsRepository} from "../../../blogs/repositories/blog.repository";

export function createPostHandler(
    req: Request<{}, {}, PostInputDto>,
    res: Response,
) {
    const newPost: Post = {
        id: new Date().getTime().toString(),
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId,
        blogName: blogsRepository.findById(req.body.blogId)?.name || ""
    };

    postsRepository.create(newPost);
    res.status(HttpStatus.Created).send(newPost);
}