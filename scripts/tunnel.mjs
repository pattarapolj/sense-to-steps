import { existsSync } from "node:fs";
import { spawn } from "node:child_process";

const candidates = [
  process.env.CLOUDFLARED_PATH,
  "C:\\Program Files (x86)\\cloudflared\\cloudflared.exe",
  "C:\\Program Files\\Cloudflare\\cloudflared\\cloudflared.exe",
  "cloudflared",
].filter(Boolean);

const cloudflared = candidates.find(
  (candidate) => candidate === "cloudflared" || existsSync(candidate),
);

if (!cloudflared) {
  console.error(
    "cloudflared not found. Install with: winget install Cloudflare.cloudflared",
  );
  process.exit(1);
}

const port = process.env.PORT ?? "3000";
const child = spawn(
  cloudflared,
  ["tunnel", "--url", `http://localhost:${port}`],
  {
    stdio: "inherit",
    shell: cloudflared === "cloudflared",
  },
);

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
