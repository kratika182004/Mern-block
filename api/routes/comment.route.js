import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';

import {
    createComment,
    //deleteComment,
    //editComment,
    getPostComments,
    //getcomments,
   likeComment,
  } from '../controllers/comment.controller.js';
  

const router = express.Router();
router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
export default router;