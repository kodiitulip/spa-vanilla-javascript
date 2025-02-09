import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { resolve } from "path";

const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use("/static", express.static(resolve(__dirname, "frontend", "static")));

app.get("/*", (_req, res) => {
  res.sendFile(resolve(__dirname, "frontend", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("server running..."));
