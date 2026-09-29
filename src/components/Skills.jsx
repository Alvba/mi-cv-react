import Skill from "./Skill";

const skills = [
    { name: "React", level: 30 },
    { name: "JavaScript", level: 30 },
    { name: "HTML", level: 75 },
    { name: "CSS", level: 60 },
    { name: "Git", level: 70 }
];

function Skills() {
    return (
        <section id="skills">
            <h2>Habilidades</h2>

            {skills.map((skill) => (
                <Skill
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                />
            ))}
        </section>
    );
}

export default Skills;