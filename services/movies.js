import nedb from 'nedb-promises'

const database = new nedb({ filename: "movies.db", autoload: true })

// add new movie

async function createMovie(movie) {

    try {
        const newMovie = await database.insert(movie)
        console.log(newMovie)

    } catch (error) {
        console.error(error)
    }
}

// Get all movies
async function getAllMovies() {

    try {
        const movies = await database.find({})
        return movies

    } catch (error) {
        console.error(error)
    }

}
//Get specific movie with help of ID
async function getSpecificMovie(id) {

    try {
        return await database.findOne({ imdbid: id })

    } catch (error) {

        console.error(error)
    }
}


// Updater movie
async function updateMovie(id, updatedMovie){

const movie= await database.findOne({imdbid : id})
return await database.update({_id: movie._id},{ $set : updatedMovie})
}

// delete movie

async function deleteMovie(id){
const deletedMovie = await  database.remove({imdbid : id})

}

export { createMovie, getAllMovies, getSpecificMovie, updateMovie, deleteMovie}