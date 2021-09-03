import { Router } from "express";
import { Request, Response } from "express";
import { PrismaClient } from ".prisma/client";
import { VisitorController } from "../controllers/visitor-contorller";
export const router = Router();

const prisma = new PrismaClient();

router.post("/", async (req: Request, res: Response) => {
    const { name, roomId } = req.body;
    res.json(VisitorController.addVisitor(name, roomId))
  });
  
  router.get("/", async (req: Request, res: Response) => {
      res.json(VisitorController.getVisitors());
  });
  
//   router.get("/:id", async (req: Request, res: Response) => {
//       const {id} = req.params;
//       const visitors = await prisma.visitors.findUnique({
//           where: {
//               id: +id,
//           }
//       });
//       res.json(visitors);
//   });
  
//   router.put("/", async (req: Request, res: Response) => {
//       const {id, name} = req.body;
//       const updatedVisitors = await prisma.visitors.update({
//           where: {
//               id: id,
//           },
//           data: {
//               name: name,
//           }
//       });
//       res.json(updatedVisitors);
//   });
  
  router.delete("/:id", async (req: Request, res: Response) => {
      const {id} = req.params;
     res.json(VisitorController.deleteVisitor(+id))
  });