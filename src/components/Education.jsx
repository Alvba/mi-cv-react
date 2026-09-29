const studies = [
    {
        title: "Desarrollo de Aplicaciones Web",
        vocationalSchool: "Digitech - Progresa Formación",
        start: "2025",
        end: "Actualmente",
    },
    {
        title: "Sistemas Microinformáticos y Redes",
        vocationalSchool: "I.E.S Font de Sant Lluís",
        start: "2022",
        end: "2024",
    }
];

function Education() {
    return (
        <section id="education">
            <h2>Formación</h2>

            {studies.map((study) => (
                <div key={study.title}>
                    <h3>{study.title}</h3>
                    <p>{study.vocationalSchool}</p>
                    <p>
                        {study.start} - {study.end}
                    </p>
                </div>
            ))}
        </section>
    );
}

export default Education;