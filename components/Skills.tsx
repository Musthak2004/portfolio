const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "C++", "SQL", "JavaScript", "TypeScript"],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    title: "Backend",
    skills: ["Django", "Django REST", "PostgreSQL", "MySQL", "REST APIs"],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.75L4.5 5.25" />
      </svg>
    ),
  },
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React"],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: "Tools & Workflow",
    skills: ["Git & GitHub", "Linux", "VS Code", "Docker", "Agile"],
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.42 15.17l-5.645-5.645m0 0l2.122-2.122m-2.122 2.122l-2.12 2.122m9.424-2.122l5.646 5.645m0 0l-2.122 2.122m2.122-2.122l2.12-2.122M12 6v12" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="mb-16">
          <p className="section-label">/expertise</p>
          <h2 className="section-heading mb-4">Tech Stack & Skills</h2>
          <p className="section-desc">
            Technologies I work with daily to build full-stack web applications
            — from database design to deployment.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="text-accent">{group.icon}</div>
                <h3 className="font-medium text-ink text-sm">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
