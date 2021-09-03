import { VisitorModel } from "../models/visitor-model";

export class VisitorController {
  static addVisitor(
    name: string,
    roomId: number,
    reservationStartDate: Date,
    reservationEndDate: Date
  ) {
    return VisitorModel.addVisitor(
      name,
      roomId,
      reservationStartDate,
      reservationEndDate
    );
  }

  static getVisitors() {
    return VisitorModel.getVisitors();
  }

  static deleteVisitor = (id: number) => {
    return VisitorModel.deleteVisitor(id);
  };
}
