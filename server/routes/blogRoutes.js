import express from 'express';
import { allPosts, getPost, contactUs } from '../controllers/blogController.js'


const router = express.Router();

router.get('/blog/home', allPosts)
router.get('/blog/post/:sno', getPost)
router.post('/blog/contact', contactUs)

export default router
