import express from 'express';
import { loginAdmin, adminDashboard, editPost, deletePost } from '../controllers/adminController.js'
import userAuth from '../middleware/auth.js'

const router = express.Router();

router.post('/login', loginAdmin)
router.get('/dashboard', adminDashboard)
router.patch('/edit/:sno', userAuth, editPost)
router.delete('/delete/:sno', userAuth, deletePost)


export default router

// home
// post/no
// contact

// login
// dashboard
// delete/no
// edit/no

// about -> react
// logout -> react
// upload -> combine with edit
