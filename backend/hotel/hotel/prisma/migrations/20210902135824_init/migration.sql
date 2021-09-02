-- CreateTable
CREATE TABLE "Rooms" (
    "id" SERIAL NOT NULL,
    "typeId" INTEGER NOT NULL,
    "classId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomTypes" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RoomClasses" (
    "id" SERIAL NOT NULL,
    "class" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visitors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "roomId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);
