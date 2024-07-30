import express from 'express';
import { loginAdmin, adminDashboard, createPost, editPost, deletePost, contactList } from '../controllers/adminController.js'
import userAuth from '../middleware/auth.js'

const router = express.Router();

router.post('/admin/login', loginAdmin)
router.get('/admin/dashboard', adminDashboard)
router.get('/admin/contactlist', userAuth, contactList)

router.post('/admin/create', userAuth, createPost)
router.patch('/admin/edit/:sno', userAuth, editPost)
router.delete('/admin/delete/:sno', userAuth, deletePost)


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
