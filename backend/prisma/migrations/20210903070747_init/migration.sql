/*
  Warnings:

  - You are about to drop the column `classId` on the `Rooms` table. All the data in the column will be lost.
  - You are about to drop the column `typeId` on the `Rooms` table. All the data in the column will be lost.
  - Added the required column `class` to the `Rooms` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Rooms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rooms" DROP COLUMN "classId",
DROP COLUMN "typeId",
ADD COLUMN     "class" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
