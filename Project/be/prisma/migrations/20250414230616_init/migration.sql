-- CreateTable
CREATE TABLE "MMA_Organization" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Fighter" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "weightClass" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "fights" INTEGER NOT NULL,
    "wins" INTEGER NOT NULL,
    "losses" INTEGER NOT NULL,
    "draws" INTEGER NOT NULL,
    "organizationId" INTEGER NOT NULL,
    CONSTRAINT "Fighter_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "MMA_Organization" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
