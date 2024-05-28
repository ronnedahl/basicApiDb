import { Router } from 'express'
import { createMovie, getAllMovies, getSpecificMovie, updateMovie,deleteMovie} from '../services/movies.js'

const router = Router()
// Get all movies
router.get('/', async(req, res)=>{
    const movies =  await getAllMovies()
    res.json({ movies : movies})
})
// POST new movie
router.post('/',(req,res)=>{
   createMovie(req.body)
   res.json({ message :"Movie created successfully"})

})
router.get('/',(req,res)=>{
   res.json({messge: "Request made" })
})

router.get('/:id',async (req,res)=>{
const movie = await getSpecificMovie(req.params.id)
res.json({ movie : movie })

})
// Put specific movie

router.put('/:id', (req,res)=>{
    updateMovie(req.params.id, req.body)
    res.json({ message : "movie updated successfully and great!"})
})

// Delete specific movie
router.delete('/:id',(req,res)=>{
 deleteMovie(req.params.id)
 res.json({message: "Movie deleted succefully"})

})
export default router