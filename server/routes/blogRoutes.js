import express from 'express';
import { homePage, editPost, deletePost } from '../controllers/blogController.js'


const router = express.Router();

router.get('/', allPosts)
router.get('post/:sno', getPost)
router.post('/contact', contactUs)

export default router