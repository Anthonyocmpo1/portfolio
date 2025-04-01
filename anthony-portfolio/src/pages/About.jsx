const About = () => {
  return (
    <div className="bg-[#0E1124] text-white py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-yellow-400 text-3xl font-bold text-center mb-8">ABOUT ME</h2>
        <div className="md:flex md:justify-between">
          {/* Left Section - About */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Hi, I'm Anthony Mwaura</h3>
            <p className="mb-4">
              I'm a freelance <strong className="font-bold">Full Stack Web Developer</strong> with a passion to create 
              <strong className="font-bold"> responsive, accessible,</strong> and <strong className="font-bold">inclusive</strong> 
              websites using the newest cutting-edge tech.
            </p>
            <p className="mb-4">
              I graduated from <strong>Moringa School</strong> and have hands-on experience developing 
              dynamic applications using <strong>HTML, CSS, JavaScript, Python, React, and Flask</strong>. 
              My focus is on writing clean, efficient, and maintainable code.
            </p>
            <p>
              Beyond coding, I love learning new technologies and collaborating on innovative projects 
              that make a difference. Let's build something amazing together!
            </p>
          </div>
{/* Right Section - Skills */}
<div className="md:w-1/2 mt-8 md:mt-0">
  <h3 className="text-xl font-bold mb-4">My Skills</h3>
  <div className="mb-4">
    <h4 className="text-yellow-400 font-semibold">Frontend</h4>
    <div className="flex flex-wrap gap-2 mt-2">
      {["HTML", "CSS", "Tailwind", "styled-components", "JavaScript", "React", "Next.js", "TypeScript", "GIT", "Github", "NPM"].map(skill => (
        <span key={skill} className="bg-gray-700 px-3 py-1 text-sm rounded">{skill}</span>
      ))}
    </div>
  </div>
  <div>
    <h4 className="text-yellow-400 font-semibold">Backend</h4>
    <div className="flex flex-wrap gap-2 mt-2">
      {["Node.js", "Express", "Mongoose", "REST APIs", "MongoDB", "MySQL"].map(skill => (
        <span key={skill} className="bg-gray-700 px-3 py-1 text-sm rounded">{skill}</span>
      ))}
    </div>
  </div>
  {/* Design Tools */}
  <div>
    <h4 className="text-yellow-400 font-semibold">Design Tools</h4>
    <div className="flex flex-wrap gap-2 mt-2">
      {["Figma"].map(skill => (
        <span key={skill} className="bg-gray-700 px-3 py-1 text-sm rounded">{skill}</span>
      ))}
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default About;
