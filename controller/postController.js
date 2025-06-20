const connection = require("../database/db")
const index = (req, res) => {
    const sql = "SELECT * FROM `posts`";
    connection.query(sql, (err, results) => {
        if(err) return res.status(500).json({error:"Error executing!"});

        console.log(results);
            
        res.json({
            data: results,
            status:200
        });
    });
    // const filterTags = req.query.tags;
    // let fileteredPosts = posts;    
    
    // if(filterTags){
    //     fileteredPosts = fileteredPosts.filter( post => post.tags.includes(filterTags));
    // }

    // res.json({
    //     data: fileteredPosts, 
    //     status : 200
    // });
};
const show = (req, res) => {
    const postId = parseInt(req.params.id);
    const sql = `
        SELECT * 
        FROM posts
        WHERE id = ?`
    ;

    connection.query(sql, [postId], (err, results) =>{
        if(err) return res.status(500).json({error:"Error executing!"});
        if(results.length === 0) return res.status (404).json({error:"Post not found"});

        const post = results[0];

        const sqltags = `
            SELECT tags.*
            FROM post_tag
            INNER JOIN tags
            ON tags.id = post_tag.tag_id
            WHERE tag_id = ?`
        ;
        connection.query(sqltags, [postId], (err, results) =>{
            console.log(results);
            post.tags = results;
            res.json({
                data: post,
                status:200
            });
        });
    });

    // const post = posts.find(post => post.id === postId);

    // if(!post){
    //     const error = new Error("Page not found");
    //     error.statusCode = 404;
    //     throw error;
    // }
    // res.json({
    //     data: post,
    //     status: 200
    // });
};
const store = (req, res) => {
    // const {title, content, image,tags} = req.body;
    // const malformElements = [];

    // if(malformElements.length){
    //     const error = new Error("Request is malformed");
    //     error.statusCode = 400;
    //     error.data = { malformElements };
    //     throw error;
    // };

    // let maxId = 0;
    // for (const post of posts){
    //     if(post.id > maxId) maxId = post.id;
    // }

    // const postId = maxId + 1;
    // const newPost = {id:maxId + 1, title, content, image,tags};
    // posts.push(newPost);

    // res.status(201).json(newPost)
};
const update = (req, res) =>{
    // const {title, content, image, tags } = req.body;
    // const postId = parseInt(req.params.id);
    // const post = posts.find((post) => post.id === postId);

    // if(!post){
    //     const error = new Error("Post Not Found");
    //     error.statusCode = 404;
    //     throw error;
    // }

    // const updatetPost = { id: postId, title, content, image, tags };
    // const malformElements = [];

    // const postIndex = posts.indexOf(post);
    // console.log(postIndex);
    
    // posts.splice(postIndex, 1, updatetPost);
    // res.json(updatetPost);
    // console.log(updatetPost);

    // if(malformElements.length){
    //     const error = new Error("Request is malformed");
    //     error.statusCode = 400;
    //     error.data = { malformElements };
    //     throw error;
    // };
    
};
const modify = (req, res) =>{
    // const postId = parseInt(req.params.id);
    // const originalPost = posts.find((post) => post.id === postId);

    //   if(!originalPost){
    //     const error = new Error("Post Not Found");
    //     error.statusCode = 404;
    //     throw error;
    // }
    
    // const {title, content, image, tags } = req.body;

    // if(title){
    //     originalPost.title = title;
    // }

    // if(content){
    //     originalPost.content= content;
    // }

    // if(tags){
    //     originalPost.tags = tags;
    // }
    // res.json(originalPost);

};
const destroy = (req, res) => {
    // const postId = parseInt(req.params.id);
    // const sql = `
    //     DELETE 
    //     FROM posts
    //     WHERE id = ?`
    // ;
    // connection.query(sql, [postId], (err, results) =>{
    //     if(err) return res.status(500).json({error:"Error executing!"});
    //     if(results.length === 0) return res.status (404).json({error:"Post not found"});

    //     const sqldelete = `
    //         DELETE
    //         FROM posts
    //         WHERE posts.id = ?`
    //     ;
    //     connection.query(sqldelete, [postId], (err, results) =>{
    //         console.log(results);
    //     });
    // })
    // const post = posts.find(post => post.id === id);

    // if (!post) {
    //     const error = new Error("Post Not Found");
    //     error.statusCode = 404;
    //     throw error;
    // }
    // const postIndex = posts.indexOf(post);
    // posts.splice(postIndex, 1);

    // res.sendStatus(204);
}

module.exports = { 
    index,
    show,
    store, 
    update, 
    modify, 
    destroy 
}