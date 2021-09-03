import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient
export class VisitorModel {
    static async addVisitor(name: string, roomId: {}) {
        return await prisma.visitors.create({
            data: {
              name: name,
              room: roomId,
            },
          });
    }

    static async getVisitors() {
        console.log('aaaaaaa')
        return await prisma.visitors.findMany();
    }

    // static async putVisitor = () => {

    // }

    static async deleteVisitor(id: number) {
        return await prisma.visitors.delete({
            where: {
                id: id,
            },
        });
    }


}