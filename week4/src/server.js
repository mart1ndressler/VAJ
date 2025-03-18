import express from 'express'
import {PrismaClient} from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// See tasks in README.md


// Get all users
app.get('/users/', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch(e) {
    console.error(e)
    res.status(500).json({error: "SERVER ERROR"})
  }
})

// Get specific user
app.get('/users/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id), user = await prisma.user.findUnique({where: {id: userId}})
    user ? res.json(user) : res.status(404).json({error: "USER NOT FOUND"})
  } catch(e) {
    console.error(e)
    res.status(500).json({error: "SERVER ERROR"})
  }
})

// Implement the rest of the end points
app.get('/users/:id/posts/:postId', async (req, res) => {
  try {
    const userId = parseInt(req.params.id), postId = parseInt(req.params.postId), post = await prisma.post.findFirst({where: {id: postId, authorId: userId}})
    post ? res.json(post) : res.status(404).json({error: "POST NOT FOUND"})
  } catch(e) {
    console.error(e)
    res.status(500).json({error: "SERVER ERROR"})
  }
})

app.get('/users/:id/posts', async (req, res) => {
  try {
    const userId = parseInt(req.params.id), published = req.query.published
    let query = {authorId: userId}

    if(published !== undefined) query.published = (published === 'true')
    const posts = await prisma.post.findMany({where: query})
    res.json(posts)
  } catch(e) {
    console.error(e)
    res.status(500).json({error: "SERVER ERROR"})
  }
})

app.post('/users/', async (req, res) => {
  try {
    const email = req.body.email, name = req.body.name, newUser = await prisma.user.create({data: {email: email, name: name}})
    res.status(201).json(newUser)
  } catch(e) {
    console.error(e)
    res.status(500).json({error: "SERVER ERROR"})
  }
})

app.put('/users/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id), email = req.body.email, name = req.body.name, updatedUser = await prisma.user.update({where: {id: userId}, data: {email: email, name: name}})	
    res.json(updatedUser)
  } catch(e) {
    console.error(e)
    res.status(500).json({error: "SERVER ERROR"})
  }
})

app.delete('/users/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id)
    await prisma.user.delete({where: {id: userId}})
    res.status(204).send()
  } catch(e) {
    console.error(e)
    res.status(500).json({error: "SERVER ERROR"})
  }
})

app.get('/posts/', async (req, res) => {
  try {
    const published = req.query.published
    let query = {}

    if(published !== undefined) query.published = (published === 'true')
    const posts = await prisma.post.findMany({where: query})
    res.json(posts)
  } catch(e) {
    console.error(e)
    res.status(500).json({error: "SERVER ERROR"})
  }
})

app.post('/posts/', async (req, res) => {
  try {
    const title = req.body.title, content = req.body.content, published = req.body.published, userId = req.body.userId
    if(!userId) 
    {
      res.status(400).json({error: "USER ID REQUIRED"})
      return
    }

    const newPost = await prisma.post.create({data: {title: title, content: content, published: published, authorId: userId}})
    res.status(201).json(newPost)
  } catch(e) {
    console.error(e)
    res.status(500).json({error: "SERVER ERROR"})
  }
})

export { app };