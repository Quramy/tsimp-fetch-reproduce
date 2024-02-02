import express from "express";

const app = express();

app.get("/api", async (_, res) => {
  const result = await fetch("https://github.com");
  res.json({
    status: result.status,
  });
});

app.listen(7070, () => {
  console.log("start", "http://localhost:7070");
});
