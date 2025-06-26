import { Request, Response } from 'express';
import {blogsRepository} from "../../repositories/blog.repository";
import {HttpStatus} from "../../../core/types/http-statuses";
import {createErrorMessages} from "../../../core/utils/error.utils";

export async function getBlogHandler(req: Request, res: Response) {
    try{
        const id = req.params.id;
        const blog = await blogsRepository.findById(id);
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
    catch (e: unknown) {
        res.sendStatus(HttpStatus.InternalServerError);
    }
}