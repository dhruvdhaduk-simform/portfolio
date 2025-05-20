import { PageHeading } from '@/components/PageHeading';
import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS } from '@/data/projects';

export function Projects() {
    return (
        <div className="w-full flex flex-col justify-center gap-8">
            <PageHeading title="Projects" />

            <div className="grid grid-cols-auto-fit gap-8">
                {PROJECTS.map((project) => (
                    <ProjectCard project={project} key={project.title} />
                ))}
            </div>
        </div>
    );
}
