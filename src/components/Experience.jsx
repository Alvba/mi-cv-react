const experienceGroups = [
    {
        title: "Experiencia Laboral",
        experiences: [
            {
                company: "Cuidum",
                position: "Desarrollador Full-Stack",
                start: "Marzo 2024",
                end: "Junio 2024",
                description: "- Corrección de bugs y optimización del código fuente de la página web.\n" +
                    "- Mejora de la apariencia visual de la página."
            }
        ]
    },
    {
        title: "Experiencia no Vinculada a Estudios",
        experiences: [
            {
                company: "Locutorio Donde Jhon",
                position: "Dependiente cara al público",
                start: "Junio 2022",
                end: "Agosto 2022",
                description: "- Atención al cliente tanto por vía telefónica como presencial.\n" +
                    "- Reposición y organización de productos tanto en tienda como en almacén.\n" +
                    "- Limpieza y aseo de la tienda al finalizar la jornada.\n" +
                    "- Mejora de la apariencia visual de la página."
            }
        ]
    }
];


function Experience() {
    return (
        <section id="experience">
            {experienceGroups.map((group) => (
                <div key={group.title}>
                    <h2>{group.title}</h2>
                    {group.experiences.map((experience) => (
                        <div key={experience.company}>
                            <p>{experience.company}</p>
                            <p>{experience.position}</p>
                            <p>{experience.start} - {experience.end}</p>
                            <p style={{ whiteSpace: "pre-line" }}>{experience.description}</p>
                        </div>
                    ))}
                </div>
            ))}
        </section>
    );
}

export default Experience;