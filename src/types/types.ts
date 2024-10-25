// types.ts
export interface Project {
    _id?: string; // Optional because it might not be present when creating a new project
    title: string;
    description: string;
    link?: string;
    image?: string;
    technologies: string[];
    createdAt?: string; // Optional createdAt field
    githubFrontendLink?: string;
    githubBackendLink?: string;
}
