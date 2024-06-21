import express from 'express';
import { loginAdmin, adminDashboard, editPost, deletePost } from '../controllers/adminController.js'

const router = express.Router();

router.post('/login', loginAdmin)
router.get('/dashboard', adminDashboard)
router.patch('/edit/:sno', editPost)
router.delete('/delete/:sno', deletePost)


export default router

// home
// post/no
// contact

// login
// dasboard
// delete/no
// edit/no

// about -> react
// logout -> react
// upload -> combine with edit
