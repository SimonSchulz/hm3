import {Blog} from "../blogs/types/blog";
import {Post} from "../posts/types/post";

export const db ={
    blogs : <Blog[]> [
        {
            "id": "1",
            "name": "string",
            "description": "string",
            "websiteUrl": "string"
        },
        {
            "id": "2",
            "name": "string",
            "description": "string",
            "websiteUrl": "string"
        },{
            "id": "3",
            "name": "string",
            "description": "string",
            "websiteUrl": "string"
        }
    ],
    posts : <Post[]>[
        {
            "id": "11",
            "title": "string",
            "shortDescription": "string",
            "content": "string",
            "blogId": "string",
            "blogName": "string"
        },
        {
            "id": "22",
            "title": "string",
            "shortDescription": "string",
            "content": "string",
            "blogId": "string",
            "blogName": "string"
        },
        {
            "id": "33",
            "title": "string",
            "shortDescription": "string",
            "content": "string",
            "blogId": "string",
            "blogName": "string"
        }
    ]
}