const skills = [
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "JavaScript",
  "ReactJS",
  "Django",
  "MongoDB",
  "Java",
  "C",
  "C++",
  "DBMS",
  "SQL",
];

function Skills() {
  return (
    <section id="skills" className="p-10">

      <h2 className="text-4xl font-bold mb-5">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-900 text-white p-4 rounded-xl"
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;