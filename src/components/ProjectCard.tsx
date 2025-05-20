import { Project } from '@/types/project.types';
import githubLogo from '/logos/github.svg';
import linkLogo from '/logos/link.svg';

interface ProjectCardProp {
    project: Project;
}

/**
 * Renders a Project Card from a single Project data provided.
 */
export function ProjectCard({ project }: ProjectCardProp) {
    return (
        <div className="p-3 border border-gray rounded-xl flex flex-col gap-3">
            <div className="aspect-video relative rounded-xl overflow-hidden">
                <img
                    src={project.thumbnail}
                    className="w-full h-full"
                    alt={project.title}
                />
                <p
                    className="w-52 h-fit absolute inset-0 m-auto text-3xl font-bold text-center"
                    role="heading"
                >
                    {project.title}
                </p>
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <p className="text-xl font-bold" role="heading">
                    {project.title}
                </p>
                <p className="text-sm pb-4">{project.description}</p>
                <p className="mt-auto flex gap-2 text-sm font-semibold text-blue-500">
                    {project.techStack.map((tech) => (
                        <span>{tech}</span>
                    ))}
                </p>
                <div className="pt-2 flex gap-2">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        aria-label={`${project.title} GitHub Link (opens in a new tab)`}
                        className="flex justify-center items-center gap-2 px-4 py-2 border rounded-lg border-gray hover:border-white"
                    >
                        <img
                            src={githubLogo}
                            alt="GitHub Logo"
                            className="w-5"
                        />
                        <span className="font-semibold text-sm">
                            GitHub Link
                        </span>
                    </a>
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            aria-label={`${project.title} Live Link (opens in a new tab)`}
                            className="flex justify-center items-center gap-2 px-4 py-2 border rounded-lg border-gray hover:border-white"
                        >
                            <img
                                src={linkLogo}
                                alt="Link Logo"
                                className="w-5"
                            />
                            <span className="font-semibold text-sm">
                                Live Link
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
