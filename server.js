const express = require("express")
const app = express()

app.use(express.json())
app.use((req, res, next) => {

    const time = new Date().toLocaleTimeString()

    console.log(`[${req.method}] ${req.url} - ${time}`)

    next()

})

// ⭐ Mock Database (TOP par hi hona chahiye)
let blogPosts = []
let idCounter = 1


app.get("/", (req, res) => {
    res.send("Server chal raha hai 🚀")
})

// ⭐ GET all posts
app.get("/posts", (req, res) => {
    res.json(blogPosts)
})

// ⭐ GET post by id
app.get("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const post = blogPosts.find(p => p.id === id)
    res.json(post)
})

// ⭐ CREATE post
app.post("/posts", (req, res) => {
    const { title, content } = req.body

    const newPost = {
        id: idCounter++,
        title,
        content
    }

    blogPosts.push(newPost)

    res.json(newPost)
})

// ⭐ DELETE post
app.delete("/posts/:id", (req, res) => {
    const id = parseInt(req.params.id)
    blogPosts = blogPosts.filter(p => p.id !== id)
    res.json({ message: "Post deleted" })
})
app.put("/posts/:id", (req, res) => {

    const id = parseInt(req.params.id)

    const post = blogPosts.find(p => p.id === id)

    if (!post) {
        return res.status(404).json({ message: "Post not found" })
    }

    post.title = req.body.title
    post.content = req.body.content

    res.json(post)

})
app.post("/login", (req, res) => {

    const { username, password } = req.body

    if (username === "admin" && password === "123") {

        res.json({
            token: "fake-jwt-token-123456"
        })

    } else {

        res.status(401).json({
            message: "Invalid credentials"
        })

    }

})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})