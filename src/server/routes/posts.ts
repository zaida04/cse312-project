import { Router } from 'express';
import Post, { IPost } from '../db/models/Post';
import { validateRequest } from 'zod-express-middleware';
import { createInsert } from '../rest/insert';
import { auth_middleware } from '../middleware/auth';
import { z } from 'zod';
import { createRetrieveAll } from '../rest/retrieve';
import User from '../db/models/User';
import escape from "escape-html";

const router = Router();

router.post("/api/posts",
    auth_middleware,
    validateRequest({
        body: z.object({
            title: z.string().min(1),
            body: z.string().min(1),
            tags: z.array(z.string()).optional(),
            isPublished: z.boolean().default(true)
        })
    }),
    createInsert<IPost>(Post, {
        outputKey: "post",
        inputFields: ["title", "body", "author", "tags", "comments", "isPublished"],
        outputFields: ["_id", "title", "author", "body", "createdAt", "likes"],
        additionalFields: async (request) => {
            return {
                body: escape(request.body.body),
                title: escape(request.body.title),
                author: request.user!._id,
                comments: [],
                tags: [],
                likes: []
            };
        },
        additionalOutput: async (post) => {
            const user = await User.findById(post.author);
            return {
                author: user,
            };
        }
    })
);

// Route to get all posts
router.get('/api/posts',
    createRetrieveAll(Post, {
        outputKey: "posts",
        outputFields: ["_id", "title", "author", "createdAt", "body", "likes"],
        populate: "author"
    })
);

export default router;