function Projects() {
  return (
    <section id="projects" className="p-10">

      <h2 className="text-4xl font-bold mb-5">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div className="bg-slate-900 text-white p-6 rounded-xl">
          <h3>Portfolio Website</h3>
          <p>Modern responsive portfolio.</p>
        </div>

        <div className="bg-slate-900 text-white p-6 rounded-xl">
          <h3>Student Management System</h3>
          <p>CRUD based project.</p>
        </div>

      </div>

    </section>
  );
}

export default Projects;