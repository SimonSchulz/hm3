import { Request, Response } from 'express';
import {blogsRepository} from "../../repositories/blog.repository";
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/utils/error.utils";

export function getBlogHandler(req: Request, res: Response) {
    const id = req.params.id;
    const blog = blogsRepository.findById(id);
    if (!blog) {
        res
            .status(HttpStatus.NotFound)
            .send(
                createErrorMessages([{ field: 'id', message: 'Blog not found' }]),
            );
        return;
    }
    res.send(blog);
}