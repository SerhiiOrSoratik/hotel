/*
  Warnings:

  - You are about to drop the column `roomId` on the `Visitors` table. All the data in the column will be lost.
  - Added the required column `visitorsId` to the `Rooms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rooms" ADD COLUMN     "visitorsId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Visitors" DROP COLUMN "roomId";

-- AddForeignKey
ALTER TABLE "Rooms" ADD FOREIGN KEY ("visitorsId") REFERENCES "Visitors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
