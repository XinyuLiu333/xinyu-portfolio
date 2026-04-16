import fs from "fs";
import path from "path";

const publicDir = path.join(process.cwd(), "public");

export function bustImageCache(src: string): string {
  if (!src.startsWith("/")) return src;

  try {
    const filePath = path.join(publicDir, src);
    const stat = fs.statSync(filePath);
    return `${src}?v=${Math.floor(stat.mtimeMs)}`;
  } catch {
    return src;
  }
}
