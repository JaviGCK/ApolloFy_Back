import { Router } from 'express'

const albumsRouter: Router = Router();

albumsRouter
    .post("/", createAlbum)
    .get("/", getAllAlbums)
    .get("/:albumId", getAlbum)
    .put("/:albumId", updateAlbum)
    .delete("/:albumId", deleteAlbum)

export default albumsRouter