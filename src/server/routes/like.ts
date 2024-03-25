import { Router, Request, Response, NextFunction } from 'express';
import Post from '../db/models/Post'; 
import { auth_middleware } from '../middleware/auth';

const router = Router();

router.post('/api/posts/:postId/like', auth_middleware, async (req: Request, res: Response, next: NextFunction) => {
    const postId = req.params.postId;
    const userId = req.user!._id;

    let post = await Post.findById(postId);

    if (!post) {
        return next(new Error('Post not found'));
    }

    // const alreadyLiked = post.likes.some(id => id.toString() === userId.toString());
    const alreadyLiked = post.likes.includes(userId);
    console.log("alreadyLiked: ", alreadyLiked);


    if (!alreadyLiked) {
        post.likes.push(userId);
        await post.save();
        
        res.status(200).json({error: true, "liked": post?.likes});
    } else {
        return res.status(409).send({ message: "You have already liked this post." });
    }
});

export default router;
