import express, { Request, Response } from "express";
import { PrismaClient } from ".prisma/client";

const app = express();
app.use(express.json());

const prisma = new PrismaClient();

app.post("/", async (req: Request, res: Response) => {
  const { name, roomId } = req.body;
  const newVisitor = await prisma.visitors.create({
    data: {
      name: name,
      roomId: roomId,
    },
  });
  res.json(newVisitor);
});

app.get("/", async (req: Request, res: Response) => {
    const visitors = await prisma.visitors.findMany();
    res.json(visitors);
});

app.get("/:id", async (req: Request, res: Response) => {
    const {id} = req.params;
    const visitors = await prisma.visitors.findUnique({
        where: {
            id: +id,
        }
    });
    res.json(visitors);
});

app.put("/", async (req: Request, res: Response) => {
    const {id, name} = req.body;
    const updatedVisitors = await prisma.visitors.update({
        where: {
            id: id,
        },
        data: {
            name: name,
        }
    });
    res.json(updatedVisitors);
});

app.delete("/:id", async (req: Request, res: Response) => {
    const {id} = req.params;
    const deletedVisitors = await prisma.visitors.delete({
        where: {
            id: +id,
        },
    });
    res.json(deletedVisitors);
});

app.listen(3001, () => {
  console.log("SERVER RUNING ON PORT 3001");
});
