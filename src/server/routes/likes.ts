import { Router, Request, Response, NextFunction } from 'express';
import Post from '../db/models/Post';
import { auth_middleware } from '../middleware/auth';

const router = Router();

router.post('/api/posts/:postId/like', auth_middleware, async (req: Request, res: Response, next: NextFunction) => {
    const postId = req.params.postId;
    const userId = req.user!._id;

    const post = await Post.findById(postId);
    if (!post) {
        return res.status(404).json({
            error: true,
            message: "Post not found"
        });
    }

    if (post.likes.includes(userId)) {
        return res.status(409).json({
            error: true,
            message: "You have already liked this post."
        });
    }

    post.likes.push(userId);
    await post.save();
    res.status(200).json({
        error: false,
        likes: post.likes
    });
});

router.post('/api/posts/:postId/unlike', auth_middleware, async (req: Request, res: Response, next: NextFunction) => {
    const postId = req.params.postId;
    const userId = req.user!._id;

    const post = await Post.findById(postId);
    if (!post) {
        return res.status(404).json({
            error: true,
            message: "Post not found"
        });
    }

    if (!post.likes.includes(userId)) {
        return res.status(409).json({
            error: true,
            message: "You haven't liked this post."
        });
    }

    post.likes = post.likes.filter((like) => like.toString() !== userId.toString());
    await post.save();
    res.status(200).json({
        error: false,
        likes: post.likes
    });
});

export default router;
