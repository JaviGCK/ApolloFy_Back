import { Request, Response } from "express";
import prisma from "../db/clientPrisma";

export const createAlbum = async (req: Request, res: Response) => { }
export const getAllAlbums = async (req: Request, res: Response) => { }
export const getAlbum = async (req: Request, res: Response) => {
    const { albumId } = req.params;

    try {
        const album = await prisma.albums.findFirst({
            where: {
                id: albumId
            }
        });

        if (!album) {
            res.status(404).send({ error: "Album not found" })
            return
        }
        res.status(200).send(album)

    } catch (error) {
        res.status(500).send(error)
    }
}
export const updateAlbum = async (req: Request, res: Response) => { }
export const deleteAlbum = async (req: Request, res: Response) => { }
