import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content", "blog");
const postExtensions = [".mdx", ".md"];

const parseFrontMatter = (raw) => {
  if (!raw.startsWith("---")) {
    return { data: {}, content: raw };
  }

  const end = raw.indexOf("\n---", 3);
  if (end === -1) {
    return { data: {}, content: raw };
  }

  const frontMatter = raw.slice(3, end).trim();
  const content = raw.slice(end + 4).trimStart();
  const data = {};

  for (const line of frontMatter.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separatorIndex = trimmed.indexOf(":");
    if (separatorIndex === -1) continue;
    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    data[key] = value;
  }

  return { data, content };
};

export const getPostSlugs = () => {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((name) =>
      postExtensions.some((ext) => name.toLowerCase().endsWith(ext))
    )
    .map((name) => name.replace(/\.(md|mdx)$/i, ""));
};

export const getPostBySlug = (slug) => {
  const realSlug = slug.replace(/\.(md|mdx)$/i, "");
  const fullPath =
    postExtensions
      .map((ext) => path.join(postsDirectory, `${realSlug}${ext}`))
      .find((candidate) => fs.existsSync(candidate)) || null;

  if (!fullPath) return null;

  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontMatter(file);

  return {
    slug: realSlug,
    title: data.title || realSlug,
    metaTitle: data.metaTitle || "",
    date: data.date || "",
    description: data.description || "",
    metaDescription: data.metaDescription || "",
    cover: data.cover || "",
    content,
  };
};

export const getAllPosts = () => {
  const posts = getPostSlugs().map(getPostBySlug).filter(Boolean);
  return posts.sort((a, b) => {
    const aTime = a.date ? Date.parse(a.date) : 0;
    const bTime = b.date ? Date.parse(b.date) : 0;
    return bTime - aTime;
  });
};
