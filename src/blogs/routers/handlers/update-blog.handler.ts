import { Request, Response } from 'express';
import { HttpStatus } from '../../../core/types/http-statuses';
import { createErrorMessages } from '../../../core/utils/error.utils';
import {BlogInputDto} from "../../dto/blog.input-dto";
import {blogsRepository} from "../../repositories/blog.repository";


export function updateBlogHandler(
    req: Request<{ id: string }, {}, BlogInputDto>,
    res: Response,
) {
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

    blogsRepository.update(id, req.body);
    res.sendStatus(HttpStatus.NoContent);
}
