import express from "express";
import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("MMA API is running!");
});

app.get("/fighters", async (req, res) => {
  res.json(await prisma.fighter.findMany());
});

app.get("/fighters/:id", async (req, res) => {
  const fighter = await prisma.fighter.findUnique({
    where: { id: +req.params.id },
  });
  fighter
    ? res.json(fighter)
    : res.status(404).json({ error: "Fighter not found!" });
});

app.post("/fighters", async (req, res) => {
  const newFighter = await prisma.fighter.create({ data: req.body });
  res.status(201).json(newFighter);
});

app.put("/fighters/:id", async (req, res) => {
  try {
    const updatedFighter = await prisma.fighter.update({
      where: { id: +req.params.id },
      data: req.body,
    });
    res.json(updatedFighter);
  } catch {
    res.status(404).json({ error: "Fighter not found!" });
  }
});

app.delete("/fighters/:id", async (req, res) => {
  try {
    await prisma.fighter.delete({ where: { id: +req.params.id } });
    res.status(204).end();
  } catch {
    res.status(404).json({ error: "Fighter not found!" });
  }
});

app.get("/organizations", async (req, res) => {
  res.json(await prisma.mMA_Organization.findMany());
});

app.get("/organizations/:id", async (req, res) => {
  const org = await prisma.mMA_Organization.findUnique({
    where: { id: +req.params.id },
    include: { fighters: true },
  });
  org
    ? res.json(org)
    : res.status(404).json({ error: "Organization not found!" });
});

export { app };
