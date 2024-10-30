/*
  Warnings:

  - You are about to drop the column `department_id` on the `Employees` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Employees` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Employees` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Employees` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Employees` table. All the data in the column will be lost.
  - Added the required column `departmentID` to the `Employees` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Employees" DROP CONSTRAINT "Employees_department_id_fkey";

-- AlterTable
ALTER TABLE "Employees" DROP COLUMN "department_id",
DROP COLUMN "password",
DROP COLUMN "role",
DROP COLUMN "status",
DROP COLUMN "username",
ADD COLUMN     "departmentID" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "employeeID" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_employeeID_fkey" FOREIGN KEY ("employeeID") REFERENCES "Employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employees" ADD CONSTRAINT "Employees_departmentID_fkey" FOREIGN KEY ("departmentID") REFERENCES "Departments"("id") ON DELETE CASCADE ON UPDATE CASCADE;
