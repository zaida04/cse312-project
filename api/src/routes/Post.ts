import { Router, Request, Response } from 'express';
import Post from '../db/models/Post';

const router = Router();

router.post('/posts', async (req: Request, res: Response) => {
    const { title, body, author, tags, comments, isPublished } = req.body;
    
    const newPost = new Post({
      title,
      body,
      author,
      tags,
      comments,
      isPublished
    });

    await newPost.save();
    res.status(201).json(newPost);
});

// Route to get all posts
router.get('/posts', async (req: Request, res: Response) => {
    const posts = await Post.find().sort({ createdAt: -1 }); // Fetch all posts, newest first
    res.json(posts);
});

export default router;

