import type { NextConfig } from "next";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectPage = process.env.GITHUB_ACTIONS === "true" && repositoryName && !repositoryName.endsWith(".github.io");

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProjectPage ? `/${repositoryName}` : "",
  reactStrictMode: true,
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
