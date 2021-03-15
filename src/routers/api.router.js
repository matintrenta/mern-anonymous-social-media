import { Router } from 'express'
import Publication from '../models/publication'

const router = Router()


// mostrar endpoints disponibles
router.get('/', (req, res) => {
    res.send('GET /publi/:c returns c cantity of publications\n POST /publi + JSON document saves a new publication')
})

// devolver cantidad de publicaciones recientes

router.get('/first/:limit', async (req, res) => {
    const limit = parseInt(req.params.limit)
    const finded = await Publication.find().limit(limit).sort({ _created: -1 })
    res.json(finded)
})

// devolver recientes desde id

router.get('/upload/:date', async (req, res) => {
    console.log(req.params.date)
    const finded = await Publication.find({ _created: { $lt: req.params.date } }).limit(10).sort({ _created: -1 })
    res.json(finded)
})

// guardar nueva publicacion

router.post('/publi', async (req, res) => {
    const post = new Publication({
        title: req.body.title,
        body: req.body.body,
        likes: req.body.likes,
        gender: req.body.gender,
        age: req.body.age
    })
    post.save()
    res.json(post)
})


export default router;