import express, { Application } from "express";
import usersRoutes from "./routes/users.routes";
import albumsRouter from "./routes/albums.routes";
import artistsRouter from "./routes/artists.routes";
import followersRouter from "./routes/followers.routes";
import genresRouter from "./routes/genres.routes";
import playListsRouter from "./routes/playlists.routes";
import tracksRouter from "./routes/tracks.routes";
import morgan from "morgan";
import cors from "cors";
import fileUpload from 'express-fileupload';
import usersRouter from "./routes/users.routes";
import { defineDmmfProperty } from "@prisma/client/runtime/library";

// initializations
const app: Application = express();

// settings
app.set("port", process.env.PORT || 8080);

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './tmp/'
}))

// routes
app.use("/users", usersRouter);
app.use("/albums", albumsRouter,);
app.use("/genres", genresRouter);
app.use("/artist", artistsRouter);
app.use("/followers", followersRouter);
app.use("/playlists", playListsRouter);
app.use("/tracks", tracksRouter);

export default app;
