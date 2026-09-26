import ProjectHero from "../components/ProjectHero";
import ProjectForm from "../components/ProjectForm";
import Footer2 from "../components/Footer2";

function StartProject() {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-6 py-20'>
        <div className='grid md:grid-cols-2 gap-16 items-start'>
          <ProjectHero />
          <ProjectForm />
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default StartProject;
