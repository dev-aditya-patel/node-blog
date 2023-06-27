const Blogs = require("../models/blogs");

const listBlogs = (req, res) => {
    Blogs.find({}).sort({ createdAt: -1 })
        .then((data) => {
            res.render('blogs/blog', { title: "All blogs", blogs: data })
        })
        .catch((err) => {
            console.log("Error in getting all the data: " + err);
        })
}
const createBlogs = (req, res) => {
    const BlogForm = new Blogs(req.body);
    BlogForm.save()
        .then((data) => {
            res.redirect("/blog")
        })
        .catch((err) => {
            console.log(err);
        })
}

const createBlogsget = (req, res) => {
    res.render('blogs/blog_create', { title: "Blog | Create a new blog" });
}
const getBlogsById = (req,res)=>{
    Blogs.findById(req.params.id)
    .then((data) => {
        res.render("blogs/details", { title: "All blogs", blog: data })
    })
    .catch((err) => {
        console.log(err)
    })
}
const deleteBlogs = (req,res)=>{
    Blogs.findByIdAndDelete(req.params.id)
    .then((response) => {
        res.json({ redirectTo: '/blog' });
    })
    .then((err) => {
        console.log(err)
    })
}

module.exports = {
    listBlogs,
    createBlogs,
    createBlogsget,
    getBlogsById,
    deleteBlogs
}