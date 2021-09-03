import { Router } from "express";
import { Request, Response } from "express";
import { VisitorController } from "../controllers/visitor-contorller";
export const router = Router();

router.post("/", async (req: Request, res: Response) => {
  const { name, roomId, reservationStartDate, reservationEndDate } = req.body;
  res.json(
    VisitorController.addVisitor(
      name,
      roomId,
      reservationStartDate,
      reservationEndDate
    )
  );
});

router.get("/", async (req: Request, res: Response) => {
  res.json(VisitorController.getVisitors());
});

router.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  res.json(VisitorController.deleteVisitor(+id));
});
