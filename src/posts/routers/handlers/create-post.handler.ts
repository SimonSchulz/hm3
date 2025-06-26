import { Request, Response } from "express";
import { HttpStatus } from "../../../core/types/http-statuses";
import { Post } from "../../types/post";
import { PostInputDto } from "../../dto/post.input-dto";
import { postsRepository } from "../../repositories/post.repository";
import { blogsRepository } from "../../../blogs/repositories/blog.repository";
import { mapToBlogViewModel } from "../../../blogs/routers/mappers/map-to-blog-view-model";

export async function createPostHandler(
  req: Request<{}, {}, PostInputDto>,
  res: Response,
) {
  try {
    let newPost: Post;
    const blog = await blogsRepository.findById(req.body.blogId);
    let blogName = "";
    if (blog) {
      blogName = mapToBlogViewModel(blog).name;
    }
    newPost = {
      title: req.body.title,
      shortDescription: req.body.shortDescription,
      content: req.body.content,
      blogId: req.body.blogId,
      blogName: blogName,
      createdAt: new Date().toISOString(),
    };

    await postsRepository.create(newPost);
    res.status(HttpStatus.Created).send(newPost);
  } catch (e: unknown) {
    res.sendStatus(HttpStatus.InternalServerError);
  }
}
