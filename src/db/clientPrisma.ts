import { Prisma } from "@prisma/client";
import { PrismaClient as MongoClient } from "../../prisma/generated/mongo_client";
import { DefaultArgs } from "@prisma/client/runtime/library";

const DATA_SOURCE = process.env.DATA_SOURCE ?? "mongodb";

type ClientMongo = MongoClient<Prisma.PrismaClientOptions, never, DefaultArgs>

export const mongoClient: ClientMongo = new MongoClient();

export let prisma = mongoClient;

