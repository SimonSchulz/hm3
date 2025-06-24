import { Request, Response } from 'express';
import { HttpStatus } from '../../../core/types/http-statuses';
import { createErrorMessages } from '../../../core/utils/error.utils';
import {postsRepository} from "../../repositories/post.repository";
import {PostInputDto} from "../../dto/post.input-dto";

export function updatePostHandler(
    req: Request<{ id: string }, {}, PostInputDto>,
    res: Response,
) {
    const id = req.params.id;
    const post = postsRepository.findById(id);

    if (!post) {
        res
            .status(HttpStatus.NotFound)
            .send(
                createErrorMessages([{ field: 'id', message: 'Post not found' }]),
            );
        return;
    }

    postsRepository.update(id, req.body);
    res.sendStatus(HttpStatus.NoContent);
}
