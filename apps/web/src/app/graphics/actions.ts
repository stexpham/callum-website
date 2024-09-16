import type { Project } from "./projects";

export async function getProjects(): Promise<Project[]> {
  // This saves serverless function max-size issues if just importing
  const { default: projects } = await import("./projects");
  return projects;
}
