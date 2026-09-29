const projects = [
    {
        name: "CV desarrollado con React",
        description: "Mi proyecto de CV desarrollado con React."
    }
];

function Projects() {
    return (
        <section id="projects" className="projects">
            <h2>Proyectos</h2>
            {projects.map((project) => (
                <article key={project.name}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </article>
            ))}
        </section>
    );
}

export default Projects;
