import { SKILLS } from '@/data/skills';
import { PageHeading } from '@/components/PageHeading';
import marqueeStyles from '@/styles/marquee.module.css';

export function SkillsPage() {
    return (
        <div className="w-full h-full flex flex-col justify-center gap-8">
            <PageHeading title="Skills" />

            <div
                className={`w-full max-w-[50rem] overflow-hidden flex gap-5 ${marqueeStyles.marquee}`}
            >
                <div className="flex shrink-0 gap-5 min-w-full">
                    {SKILLS.map((skill) => (
                        <a
                            href={skill.url}
                            target="_blank"
                            className="w-16 h-16 md:w-20 md:h-20"
                            tabIndex={-1}
                            key={skill.name}
                        >
                            <img
                                className="w-full h-full object-contain"
                                src={skill.logo}
                                alt={skill.name}
                            />
                        </a>
                    ))}
                </div>

                <div className="flex shrink-0 gap-5 min-w-full">
                    {SKILLS.map((skill) => (
                        <a
                            href={skill.url}
                            target="_blank"
                            className="w-16 h-16 md:w-20 md:h-20"
                            tabIndex={-1}
                            key={skill.name}
                        >
                            <img
                                className="w-full h-full object-contain"
                                src={skill.logo}
                                alt={skill.name}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
