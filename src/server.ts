import express from "express";

async function main() {
  const app = express();

  app.get("/api", async (_, res) => {
    const result = await fetch("https://google.com");
    res.json({
      status: result.status,
    });
  });

  app.listen(7070, () => {
    console.log("start", "http://localhost:7070");
  });
}

main();
