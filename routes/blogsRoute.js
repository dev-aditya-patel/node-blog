
const express = require('express');
const router = express.Router();
const blogsControllers  = require('../controllers/blogsControllers')
/**
 * @add model Schema for Blog 
 */

router.get('/', blogsControllers.listBlogs)
router.get('/create', blogsControllers.createBlogsget)
router.post('/create', blogsControllers.createBlogs)
router.get("/:id", blogsControllers.getBlogsById)
router.delete('/delete/:id', blogsControllers.deleteBlogs)

module.exports = router;