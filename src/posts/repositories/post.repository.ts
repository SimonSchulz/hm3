import {db} from "../../mock-db/db";
import {Post} from "../types/post";
import {PostInputDto} from "../dto/post.input-dto";

export const postsRepository = {
    findAll(): Post[] {
        return db.posts;
    },

    findById(id: number): Post | null {
        return db.posts.find((d) => +d.id === id) ?? null;
    },

    create(newPost: Post): Post {
        db.posts.push(newPost);
        return newPost;
    },

    update(id: number, dto: PostInputDto): void {
        const Post = db.posts.find((d) => +d.id === id);

        if (!Post) {
            throw new Error('Post not exist');
        }

        Post.title = dto.title;
        Post.shortDescription = dto.shortDescription;
        Post.content = dto.content;
        Post.blogId = dto.blogId;

        return;
    },

    delete(id: number): void {
        const index = db.posts.findIndex((v) => +v.id === id);

        if (index === -1) {
            throw new Error('Post not exist');
        }

        db.posts.splice(index, 1);
        return;
    },
};