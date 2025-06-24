import { Request, Response } from 'express';
import {createErrorMessages} from "../../../core/utils/error.utils";
import {HttpStatus} from "../../../core/types/http-statuses";
import {postsRepository} from "../../repositories/post.repository";

export function getPostHandler(req: Request, res: Response) {
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
    res.send(post);
}