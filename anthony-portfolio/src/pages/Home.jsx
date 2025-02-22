import myImage from "../assets/Image.jpeg"; // Replace with the correct image path

const Home = () => {
  return (
    <div className="home-container">
      <div className="content">
        <img src={myImage} alt="Anthony Mwaura" className="profile-image" />
        <h1>Anthony Mwaura</h1>
        <h2>Full-Stack Software Engineer</h2>
        <p>Software Engineer | Frontend & Backend Developer</p>
        
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>React</span>
          <span>Flask</span>
        </div>

        <p>Graduated from <strong>Moringa School</strong>, passionate about building scalable web applications.</p>

        <a href="#projects" className="btn">Press next</a>
      </div>
    </div>
  );
};

export default Home;
