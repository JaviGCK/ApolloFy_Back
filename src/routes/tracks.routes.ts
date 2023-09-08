import { Router } from 'express'

const tracksRouter: Router = Router();

tracksRouter
    .post("/", createTrack)
    .get("/", getAllTracks)
    .get("/:trackId", getTrack)
    .put("/:trackId", updateTrack)
    .delete("/:trackId", deleteTrack)

export default tracksRouter