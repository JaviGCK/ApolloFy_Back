import { Request, Response } from "express";
import prisma from "../db/clientPrisma";


export const createPlayList = async (req: Request, res: Response) => { }
export const getAllPlayLists = async (req: Request, res: Response) => { }
export const getPlayList = async (req: Request, res: Response) => {
    const { playListId } = req.params;

    try {
        const playList = await prisma.playLists.findFirst({
            where: {
                id: playListId
            }
        });

        if (!playList) {
            res.status(404).send({ error: "PlayList not found" })
            return
        }
        res.status(200).send(playList)

    } catch (error) {
        res.status(500).send(error)
    }
}
export const updatePlayList = async (req: Request, res: Response) => { }
export const deletePlayList = async (req: Request, res: Response) => { }