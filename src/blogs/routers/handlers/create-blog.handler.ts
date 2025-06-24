import { Request, Response } from 'express';
import { HttpStatus } from '../../../core/types/http-statuses';
import {Blog} from "../../types/blog";
import {BlogInputDto} from "../../dto/blog.input-dto";
import {blogsRepository} from "../../repositories/blog.repository";

export function createBlogHandler(
    req: Request<{}, {}, BlogInputDto>,
    res: Response,
) {
    const newBlog: Blog = {
        id: new Date().toString(),
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,

    };

    blogsRepository.create(newBlog);
    res.status(HttpStatus.Created).send(newBlog);
}