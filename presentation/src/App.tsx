import Footer from '@components/Footer';
import Header from '@components/Header';
import ProjectPreview from '@components/ProjectPreview';
import modules from './models/modules';
import ModuleCard from '@components/ModuleCard';
import VideoList from '@components/VideoList';
import {
  projectVideos,
  javascriptVideos,
  cssVideos,
  htmlVideos,
} from './models/projectVideos';
import TeamMembers from '@components/TeamMembers';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <TeamMembers />
        <ProjectPreview />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>

        <h2 id="html-video" className="text-2xl font-bold mb-4">
          Aulas de HTML
        </h2>
        <VideoList videos={htmlVideos} />

        <h2 id="css-video" className="text-2xl font-bold mb-4 mt-4">
          Aulas de CSS
        </h2>
        <VideoList videos={cssVideos} />

        <h2 id="javascript-video" className="text-2xl font-bold mb-4 mt-4">
          Aulas de Javascript
        </h2>
        <VideoList videos={javascriptVideos} />

        <h2 id="projeto-final-video" className="text-2xl font-bold mb-4 mt-4">
          Aulas do Projeto Final
        </h2>
        <VideoList videos={projectVideos} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
