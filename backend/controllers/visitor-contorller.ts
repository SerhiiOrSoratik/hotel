import { Request, Response } from "express"
import { VisitorModel } from "../models/visitor-model"

export class VisitorController {
    static addVisitor(name: any, roomId: any) {
        return VisitorModel.addVisitor(name, roomId);
    }

    static getVisitors() {
        return VisitorModel.getVisitors();
    }

    // public putVisitor = (req: Request, res: Response) => {

    // }

    static deleteVisitor = (id: number) => {
        return VisitorModel.deleteVisitor(id);
    }


}