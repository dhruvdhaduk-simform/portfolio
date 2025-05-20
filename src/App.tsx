import { Home } from '@/pages/Home';
import { Skills } from '@/pages/Skills';
import { Projects } from '@/pages/Projects';
import { Education } from '@/pages/Education';
import { PageLayout } from '@/layouts/PageLayout';
import { Header } from '@/components/Header';

function App() {
    return (
        <div className="w-full max-w-[80rem] m-auto">
            <Header />

            <PageLayout>
                <Home />
            </PageLayout>

            <div
                id="skills"
                className="w-full h-[50dvh] min-h-[15rem] max-h-[30rem] p-4 pt-20"
            >
                <Skills />
            </div>

            <div id="projects" className="p-4 pt-20">
                <Projects />
            </div>

            <div
                id="education"
                className="w-full h-[50dvh] min-h-[15rem] p-4 pt-20"
            >
                <Education />
            </div>
        </div>
    );
}

export default App;
