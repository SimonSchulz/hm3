import {Blog} from "../types/blog";
import {db} from "../../mock-db/db";
import {BlogInputDto} from "../dto/blog.input-dto";

export const blogsRepository = {
    findAll(): Blog[] {
        return db.blogs;
    },

    findById(id: string): Blog | null {
        return db.blogs.find((d) => d.id === id) ?? null;
    },

    create(newBlog: Blog): Blog {
        db.blogs.push(newBlog);
        return newBlog;
    },

    update(id: string, dto: BlogInputDto): void {
        const Blog = db.blogs.find((d) => d.id === id);

        if (!Blog) {
            throw new Error('Blog not exist');
        }

        Blog.name = dto.name;
        Blog.description = dto.description;
        Blog.websiteUrl = dto.websiteUrl;

        return;
    },

    delete(id: string): void {
        const index = db.blogs.findIndex((v) => v.id === id);

        if (index === -1) {
            throw new Error('Blog not exist');
        }

        db.blogs.splice(index, 1);
        return;
    },
};