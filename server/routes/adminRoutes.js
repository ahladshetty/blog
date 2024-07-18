import express from 'express';
import { loginAdmin, adminDashboard, editPost, deletePost } from '../controllers/adminController.js'
import userAuth from '../middleware/auth.js'

const router = express.Router();

router.post('/admin/login', loginAdmin)
router.get('/admin/dashboard', adminDashboard)
router.patch('/admin/edit/:sno', editPost)
router.delete('/admin/delete/:sno', deletePost)


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
