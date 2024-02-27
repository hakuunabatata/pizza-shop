import { Elysia } from 'elysia'

const PORT = 3000
const app = new Elysia()

app.get('/', () => ({ msg: 'Hello Elysia' }))

app.listen(PORT, () => {
  console.log(`🔥 HTTP Server running on port ${PORT}`)
})
