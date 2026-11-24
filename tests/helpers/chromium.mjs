import { execFile } from "node:child_process";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import { promisify } from "node:util";

const run = promisify(execFile);

export async function chromiumFixture(t) {
  const chrome = process.env.CHROME_BIN || (process.platform === "darwin"
    ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    : "google-chrome");
  try {
    await run(chrome, ["--version"]);
  } catch (error) {
    if (error.code !== "ENOENT" || process.env.CHROME_BIN) throw error;
    t.skip("Set CHROME_BIN to run this browser test with Chromium.");
    return;
  }

  const fixture = await mkdtemp(join(tmpdir(), "walkthrough-browser-"));
  t.after(() => rm(fixture, { recursive: true, force: true }));
  const file = join(fixture, "fixture.html");
  return async (html, width = 1280) => {
    await writeFile(file, html);
    const { stdout } = await run(chrome, [
      "--headless", "--disable-gpu", "--disable-extensions", `--user-data-dir=${fixture}/profile`,
      `--window-size=${width},900`, "--virtual-time-budget=1000", "--dump-dom", pathToFileURL(file).href,
    ]);
    return stdout;
  };
}
