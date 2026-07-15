interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export default function Projects() {
  const SecProjects: ProjectItem[] = [
    {
      title: "Automated Log Analyser",
      description:
        "Build lightweight Python script for network automation and security log analysis, screening files for pattern and anomalous behaviours.",
      tags: ["Python", "Automation", "Cybersecurity"],
    },
  ];

  const UpcomingProjects: ProjectItem[] = [
    {
      title: "Will be updated",
      description: "Details coming soon.",
      tags: [],
    },
  ];

  return (
    <section id="Projects" className="py-20 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-extrabold bg-linear-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent uppercase tracking-wider">
            Featured Work
          </h2>
          <div className="h-0.5 w-20 bg-purple-500 rounded-full" />
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-linear-to-r from-gray-900/80 to-purple-500/40 backdrop-blur-md p-8 md:p-10 group hover:border-purple-500/40 transition-all duration-300">
          <div className="absolute top-0 right-0 px-4 py-1 bg-purple-600 text-xs font-bold tracking-widest rounded-bl-xl text-white uppercase">
            Hackathon Project
          </div>
          <div className="max-w-2xl space-y-4">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-widest text-white group-hover:text-purple-400 transition-colors">
              Smart India Hackathon (SIH) Platform
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Made a Frontend web interface featuring search console, and an analytical dashboard.
              Which also included upload file section with filtering.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["React.js", "Tailwind css", "Data Analysis"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SecProjects.map((project, idx) => {
            const isLastOdd = SecProjects.length % 2 !== 0 && idx === SecProjects.length - 1;

            return (
              <div
                key={idx}
                className={`relative overflow-hidden bg-linear-to-br from-gray-900/80 to-purple-950/10 backdrop-blur-md border border-purple-500/10 rounded-xl p-6 flex flex-col justify-between group hover:border-purple-500/40 transition-all duration-300 ${
                  isLastOdd ? "md:col-span-2" : ""
                }`}
              >
                <div className="absolute top-0 right-0 px-4 py-1 bg-purple-800/50 text-xs font-bold tracking-widest rounded-bl-xl text-white uppercase">
                  Network Analysis
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold tracking-wide text-white group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-6 mt-auto">

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-2.5 py-0.5 text-xs font-mono rounded-md bg-purple-500/5 border border-purple-500/20 text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-8">
          <h3 className="text-2xl font-bold text-white tracking-wider mb-6">
            Upcoming Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UpcomingProjects.map((project, index) => {
              const isLastOdd = UpcomingProjects.length % 2 !== 0 && index === UpcomingProjects.length - 1;

              return (
                <div
                  key={index}
                  className={`relative overflow-hidden bg-black backdrop-blur-md border border-dashed border-gray-700 rounded-xl p-6 flex flex-col justify-between group hover:border-gray-500 transition-all duration-300 opacity-80 hover:opacity-100 ${
                    isLastOdd ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="absolute top-0 right-0 px-3 py-1 bg-gray-800 text-[10px] font-bold tracking-widest rounded-bl-lg text-gray-300 uppercase">
                    In Progress
                  </div>
                  <div className="space-y-3 mt-2">
                    <h4 className="text-lg font-bold tracking-wide text-gray-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-gray-800 text-gray-400 "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}