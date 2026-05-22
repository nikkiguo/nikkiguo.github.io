export default function About() {
  const skills = ['Robotics & Perception', 'Machine Learning', 'Computer Vision', 'Systems Engineering', 'C++', 'Python']

  return (
    <section className="about" id="about">
      <div className="container">
        <h2><span className="section-tag">01</span>About</h2>
        <div className="about-content">
          <div className="about-text">
            <p>I’m passionate about building systems that bridge the digital and physical worlds, whether it be in robotics, autonomous vehicles, or sensor software. With a background in computer science, robotics research, and high-performance software engineering, I enjoy blending technical precision with creative experimentation.</p>
            <p>Away from the keyboard, you'll find me exploring new art mediums, reading books and substack articles, or seeking balance through nature, running, and lifting. I’m a firm believer in the power of curiosity, so I’m almost always a beginner at something new :)</p>
            <div className="contact-info">
              <a href="mailto:ng.nikkiguo@gmail.com" className="contact-link">Email</a>
              <a href="https://www.linkedin.com/in/nikkiguo" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
              <a href="https://github.com/nikkiguo" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
              <a href="https://curius.app/nikki-guo" target="_blank" rel="noopener noreferrer" className="contact-link">Curius</a>
            </div>
            <div className="skills">
              <h3>Skills</h3>
              <div className="skill-tags">
                {skills.map((skill, index) => (
                  <span key={index} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="about-photo">
            <div className="terminal-frame about-frame">
              <span className="frame-title">nikki.jpg</span>
              <div className="image-placeholder">
                <img src="/assets/nikki.jpg" alt="Nikki Guo" className="profile-photo" />
              </div>
              <span className="frame-label">~/about/nikki.jpg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
