/*
  Warnings:

  - You are about to drop the column `des` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Post` DROP COLUMN `des`,
    ADD COLUMN `desc` VARCHAR(255) NULL;
