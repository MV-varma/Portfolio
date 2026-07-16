import { FaCode,FaLaptop,FaStar } from "react-icons/fa";

export default function Skills() {
    const SkillsCategories=[
        {
            title:"Languages",
            icon:<FaCode className="w-5 h-5 text-cyan-400 "/>,
            skills:["JavaScript","Python","HTML","CSS"],
            glowcolor:"hover:border-cyan-500/40",
        },
        {
            title:"Web Technologies",
            icon:<FaLaptop className="w-5 h-5 text-purple-400 "/>,
            skills:["React.js","Next.js","Tailwind CSS"],
            glowcolor:"hover:border-purple-500/40",
        },
        {
            title:"Currently Learning",
            icon:<FaStar className="w-5 h-5 text-indigo-400"/>,
            skills:["TypeScript","Cybersecurtiy Basics","Firebase"],
            glowcolor:"hover:border-indigo-500/40",
        },
    ]

    return(
        <section id="Skills" className="py-20 bg-black text-white px-6">
            <div className="max-w-5xl mx-auto space-y-16">
                <div className="space-y-4 flex flex-col items-center text-center">
                    <h2 className="text-4xl font-extrabold bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent uppercase tracking-wider">
                        Skills
                    </h2>
                    <div className="h-0.5 w-20 bg-purple-500 rounded-full"/>
                    <p className="">
                        The skills I have acquired through my journey and the logic frameworks I am currently mastering to build secure, scalable applications.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grids-cols-3 gap-6">
                    {SkillsCategories.map((category,index)=>(
                        <div
                            key={index}
                            className={`relative overflow-hidden bg-linear-to-r from-gray-900/80 to-purple-950/10 backdrop-blur-md border border-purple-500/10 rounded-xl p-6 flex flex-col group transition-all duration-300 ${category.glowcolor}`}>
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-3 bg-gray-900/80  rounded-lg border border-gray-800 group-hover:scale-110 transition-transform duration-300"> 
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold tracking-wide text-white">
                                        {category.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2.5 mt-auto">
                                    {category.skills.map((skill,idx)=>(
                                        <span
                                        key={idx}
                                        className="px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-purple-500/5 border border-purple-500/20 text-gray-300 group-hover:text-white transition-colors cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}