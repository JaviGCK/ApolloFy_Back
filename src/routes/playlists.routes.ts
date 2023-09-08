import { Router } from 'express'

const playListsRouter: Router = Router();

playListsRouter
    .post("/", createPlayList)
    .get("/", getAllPlayLists)
    .get("/:playListId", getPlayList)
    .put("/:playListId", updatePlayList)
    .delete("/:playListId", deletePlayList)

export default playListsRouter