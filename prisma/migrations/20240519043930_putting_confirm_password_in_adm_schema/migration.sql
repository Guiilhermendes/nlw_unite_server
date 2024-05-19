/*
  Warnings:

  - Added the required column `confirmPassword` to the `administrators` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_administrators" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "confirmPassword" TEXT NOT NULL
);
INSERT INTO "new_administrators" ("email", "id", "password") SELECT "email", "id", "password" FROM "administrators";
DROP TABLE "administrators";
ALTER TABLE "new_administrators" RENAME TO "administrators";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
