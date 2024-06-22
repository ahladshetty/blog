import express from 'express';
import { allPosts, getPost, contactUs } from '../controllers/blogController.js'


const router = express.Router();

router.get('/', allPosts)
router.get('/post/:sno', getPost)
router.post('/contact', contactUs)

export default router
