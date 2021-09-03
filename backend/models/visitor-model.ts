import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export class VisitorModel {
  static async addVisitor(
    name: string,
    roomId: number,
    reservationStartDate: Date,
    reservationEndDate: Date
  ) {
    return await prisma.visitors.create({
      data: {
        name: name,
        roomId: roomId,
        reservation_start_date: reservationStartDate,
        reservation_end_date: reservationEndDate,
      },
    });
  }

  static async getVisitors() {
    console.log("aaaaaaa");
    return await prisma.visitors.findMany();
  }

  static async deleteVisitor(id: number) {
    return await prisma.visitors.delete({
      where: {
        id: id,
      },
    });
  }
}
