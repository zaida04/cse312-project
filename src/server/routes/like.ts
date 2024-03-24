import { Router, Request, Response, NextFunction } from 'express';
import Post from '../db/models/Post'; 
import { auth_middleware } from '../middleware/auth';

const router = Router();

router.post('/api/posts/:postId/like', auth_middleware,(async (req: Request, res: Response, next: NextFunction) => {
    const postId = req.params.postId;
    const userId = req.user!._id;

    let post = await Post.findById(postId);

    if (!post) {
        return next(new Error('Post not found'));
    }

    const index = post.likes.findIndex((id: { toString: () => any; }) => id.toString() === userId.toString());

    if (index === -1) {
        post.likes.push(userId);
    } else {
        post.likes.splice(index, 1);
    }

    await post.save();

    post = await Post.findById(postId).populate('likes', 'username');

    res.status(200).send(post);
}));

export default router;
