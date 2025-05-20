/**
 * Interface representing a single Project.
 */
export interface Project {
    /**
     * Title of the project.
     */
    title: string;
    /**
     * Description of the project.
     */
    description: string;
    /**
     * URL of the thumbnail of the project.
     */
    thumbnail: string;
    /**
     * GitHub repo link of the project.
     */
    githubLink: string;
    /**
     * Live Deployed link of the project.
     * Can be 'null' because the project might not be a website.
     */
    liveLink: string | null;
    /**
     * Tech stack used in the project.
     */
    techStack: Array<string>;
}
