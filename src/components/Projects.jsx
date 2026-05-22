export default function Projects() {
  const projects = [
    {
      title: 'NeRF-Card',
      description: '3D travel postcards made from real places. Inspired by my travels abroad while on my exchange term in Singapore.',
      image: '/assets/project1.gif',
      tags: ['C++', 'OpenGL', 'GLFW', 'Computer Graphics', 'NeRF'],
      link: 'https://github.com/nikkiguo/NeRF-Card'
    },
    {
      title: 'VLA Sweeping Controller',
      description: 'Ongoing work in progress. A low-latency C++ simulation workspace built natively on MuJoCo and GLFW for sweeping and sorting robotic tasks.',
      image: '/assets/project2.jpg',
      tags: ['C++', 'MuJoCo', 'GLFW', 'Robotics', 'VLA', 'Simulation'],
      link: 'https://github.com/nikkiguo/vla-sweeping-controller'
    },
    {
      title: 'Ripple',
      description: 'An Android carbon-tracking mobile app built with features such as daily activity input, data visualization, and sustainability tips.',
      image: '/assets/project3.jpg',
      tags: ['Java', 'Android', 'Firebase', 'Mobile Development', 'Frontend', 'Backend'],
      link: 'https://github.com/nikkiguo/Ripple-App'
    }
  ]

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2><span className="section-tag">03</span>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag-small">{tag}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link">View project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
