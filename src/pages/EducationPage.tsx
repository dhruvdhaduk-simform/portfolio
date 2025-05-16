import { PageHeading } from '@/components/PageHeading';
import { EDUCATION } from '@/data/education';
import styles from '@/styles/education.module.css';

export function EducationPage() {
    return (
        <div className="w-full h-full flex flex-col justify-center gap-8">
            <PageHeading title="Education" />

            <ul className="pl-10 flex flex-col gap-8">
                {EDUCATION.map((edu) => (
                    <li
                        key={edu.course}
                        className={`flex flex-col gap-2 ${styles.li}`}
                    >
                        <span className="text-xl font-bold">{edu.course}</span>
                        <span>
                            {edu.institute}, {edu.city}
                        </span>
                        <span className="text-sm">
                            {edu.from} - {edu.to}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
