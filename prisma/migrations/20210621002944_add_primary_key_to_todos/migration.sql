/*
  Warnings:

  - The `id` column on the `todos` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `username` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `avatar_url` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "todos.id_unique";

-- AlterTable
ALTER TABLE "todos" DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "username" SET NOT NULL,
ALTER COLUMN "avatar_url" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL;
