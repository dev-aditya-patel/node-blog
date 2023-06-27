Route Parameter:
demo url: https://shop.com/blog/122333
route:  app.get('/blog/:id', (req,res)=>{
    let id = req.params.id
})