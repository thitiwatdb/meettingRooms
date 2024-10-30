/*
  Warnings:

  - You are about to drop the column `employeeID` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_employeeID_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "employeeID";
