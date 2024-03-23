import { Router, Request, Response } from 'express';
import Post from '../db/models/Post';
import { validateRequest } from 'zod-express-middleware';
import { createInsert } from '../rest/insert';
import { auth_middleware } from '../middleware/auth';
import { z } from 'zod';
import { createRetrieveAll } from '../rest/retrieve';

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
    createInsert(Post, {
        outputKey: "post",
        inputFields: ["title", "body", "author", "tags", "comments", "isPublished"],
        outputFields: ["_id", "title", "author", "createdAt"],
        additionalFields: async (request) => {
            return { author: request.user!._id, comments: [], tags: [] };
        }
    })
);


// Route to get all posts
router.get('/api/posts',
    createRetrieveAll(Post, {
        outputKey: "posts",
        outputFields: ["_id", "title", "author", "createdAt", "body"],
        populate: "author"
    })
);

export default router;