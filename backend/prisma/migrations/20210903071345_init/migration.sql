/*
  Warnings:

  - Added the required column `reservation_end_date` to the `Visitors` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reservation_start_date` to the `Visitors` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Visitors" ADD COLUMN     "reservation_end_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "reservation_start_date" TIMESTAMP(3) NOT NULL;
