import React from "react";
import image1 from '../images/path_to_movies_image.jpeg'
import image2 from '../images/path_to_vet_image.jpg'
import image3 from '../images/current read.jpeg'

const projects = [
  {
    title: "Movies Website",
    description:
      "A site where you can download movies for free without many ads getting in the way.",
    technologies: ["React", "Tailwind", "TypeScript", "Rest API", "Debounce"],
    image: image1,
    liveDemo: "https://react-movies-lac.vercel.app/",
 
  },
  {
    title: "Vet Admin Dashboard",
    description:
      "An admin dashboard for vet management, tracking clients, employees, and appointments.",
    technologies: ["Next.js", "MongoDB", "Mongoose", "TypeScript", "Next-auth"],
    image: image2,
    liveDemo: "https://vet-management-system.vercel.app/",
    
  },
  {
    title: "Current Read",
    description:
      "A website for keeping track of books that I'm currently reading and managing reading lists.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Next-auth",
      "Tailwind",
      "NodeJS",
      "Mongoose",
      "MongoDB",
    ],
    image: image3,
    liveDemo: "https://current-book.vercel.app/",
  
  },
];

const Projects = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 border border-gray-700"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-bold text-yellow-400 mt-4">
              {project.title}
            </h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-yellow-600 text-black px-3 py-1 text-sm rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex justify-between">
            <a
  href={project.liveDemo}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-orange-500 px-4 py-2 text-sm font-bold rounded shadow hover:bg-orange-600"
>
  Live Demo
</a>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;