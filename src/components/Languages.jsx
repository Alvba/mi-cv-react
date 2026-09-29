const languages = [
    {
        language: "Español",
        level: "Nativo"
    },
    {
        language: "Valenciano",
        level: "Básico"
    },
    {
        language: "Inglés",
        level: "Básico"
    }
];

function Languages() {
    return (
        <section>
            <h2>Idiomas</h2>

            {languages.map((language) => (
                <p key={language.language}>
                    {language.language}: {language.level}
                </p>
            ))}
        </section>
    );
}

export default Languages;