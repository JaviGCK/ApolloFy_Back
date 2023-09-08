import { Router } from 'express'

const artistsRouter: Router = Router();

artistsRouter
    .post("/", createArtist)
    .get("/", getAllArtist)
    .get("/:artistId", getArtistById)
    .put("/:artistId", updateArtist)
    .delete("/:artistId", deleteArtist)

export default artistsRouter