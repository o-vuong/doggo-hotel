/*
  Warnings:

  - The values [ADMIN] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - The primary key for the `Facility` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `operatingHours` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Facility` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Facility` table. All the data in the column will be lost.
  - The `id` column on the `Facility` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Kennel` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `Kennel` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Kennel` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Kennel` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Kennel` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Kennel` table. All the data in the column will be lost.
  - You are about to drop the column `tenantId` on the `Kennel` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Kennel` table. All the data in the column will be lost.
  - The `id` column on the `Kennel` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Pet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deletedAt` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `dietaryNeeds` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `medicalInfo` on the `Pet` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Pet` table. All the data in the column will be lost.
  - The `id` column on the `Pet` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Reservation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deletedAt` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `kennelId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Reservation` table. All the data in the column will be lost.
  - The `id` column on the `Reservation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deletedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tenantId` on the `User` table. All the data in the column will be lost.
  - The `id` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `AddOnService` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `AuditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Payment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Permission` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vaccination` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AddOnServiceToReservation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `label` to the `Kennel` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `facilityId` on the `Kennel` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ownerId` on the `Pet` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `petId` on the `Reservation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `Reservation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('SYSTEM_ADMIN', 'FACILITY_ADMIN', 'MANAGER', 'STAFF', 'PET_OWNER');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old" CASCADE;
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'PET_OWNER';
COMMIT;

-- DropForeignKey
ALTER TABLE "AuditLog" DROP CONSTRAINT "AuditLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "Kennel" DROP CONSTRAINT "Kennel_facilityId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_reservationId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_kennelId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_petId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_userId_fkey";

-- DropForeignKey
ALTER TABLE "Vaccination" DROP CONSTRAINT "Vaccination_petId_fkey";

-- DropForeignKey
ALTER TABLE "_AddOnServiceToReservation" DROP CONSTRAINT "_AddOnServiceToReservation_A_fkey";

-- DropForeignKey
ALTER TABLE "_AddOnServiceToReservation" DROP CONSTRAINT "_AddOnServiceToReservation_B_fkey";

-- AlterTable
ALTER TABLE "Facility" DROP CONSTRAINT "Facility_pkey",
DROP COLUMN "address",
DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "email",
DROP COLUMN "operatingHours",
DROP COLUMN "phone",
DROP COLUMN "updatedAt",
ADD COLUMN     "location" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Facility_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Kennel" DROP CONSTRAINT "Kennel_pkey",
DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "name",
DROP COLUMN "price",
DROP COLUMN "status",
DROP COLUMN "tenantId",
DROP COLUMN "updatedAt",
ADD COLUMN     "label" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "facilityId",
ADD COLUMN     "facilityId" INTEGER NOT NULL,
ADD CONSTRAINT "Kennel_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Pet" DROP CONSTRAINT "Pet_pkey",
DROP COLUMN "deletedAt",
DROP COLUMN "dietaryNeeds",
DROP COLUMN "medicalInfo",
DROP COLUMN "updatedAt",
ADD COLUMN     "vaccinated" BOOLEAN,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "breed" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL,
DROP COLUMN "ownerId",
ADD COLUMN     "ownerId" INTEGER NOT NULL,
ADD CONSTRAINT "Pet_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_pkey",
DROP COLUMN "deletedAt",
DROP COLUMN "endDate",
DROP COLUMN "kennelId",
DROP COLUMN "startDate",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'PENDING',
DROP COLUMN "petId",
ADD COLUMN     "petId" INTEGER NOT NULL,
DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL,
ADD CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "deletedAt",
DROP COLUMN "tenantId",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "AddOnService";

-- DropTable
DROP TABLE "AuditLog";

-- DropTable
DROP TABLE "Payment";

-- DropTable
DROP TABLE "Permission";

-- DropTable
DROP TABLE "Vaccination";

-- DropTable
DROP TABLE "_AddOnServiceToReservation";

-- DropEnum
DROP TYPE "KennelStatus";

-- DropEnum
DROP TYPE "PaymentStatus";

-- AddForeignKey
ALTER TABLE "Pet" ADD CONSTRAINT "Pet_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kennel" ADD CONSTRAINT "Kennel_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_petId_fkey" FOREIGN KEY ("petId") REFERENCES "Pet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;