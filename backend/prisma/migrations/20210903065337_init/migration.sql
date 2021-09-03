/*
  Warnings:

  - You are about to drop the column `visitorsId` on the `Rooms` table. All the data in the column will be lost.
  - You are about to drop the `RoomClasses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoomTypes` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `roomId` to the `Visitors` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Rooms" DROP CONSTRAINT "Rooms_visitorsId_fkey";

-- AlterTable
ALTER TABLE "Rooms" DROP COLUMN "visitorsId";

-- AlterTable
ALTER TABLE "Visitors" ADD COLUMN     "roomId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "RoomClasses";

-- DropTable
DROP TABLE "RoomTypes";

-- AddForeignKey
ALTER TABLE "Visitors" ADD FOREIGN KEY ("roomId") REFERENCES "Rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;
