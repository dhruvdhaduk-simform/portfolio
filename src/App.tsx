import { Home } from '@/pages/Home';
import { Skills } from '@/pages/Skills';
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
                className="w-full h-[50dvh] min-h-[15rem] max-h-[20rem] p-4"
            >
                <Skills />
            </div>

            <div id="education" className="w-full h-[50dvh] min-h-[15rem] p-4">
                <Education />
            </div>
        </div>
    );
}

export default App;
