import { useState } from 'react'

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  const experiences = [
    {
      id: 0,
      date: 'July - November 2025',
      title: 'Software Engineering Intern',
      link: 'https://www.google.com',
      company: 'Google',
      description: 'Developed robust tooling for automotive perception, optimizing visual odometry pipelines and engineering reliable data-capture systems for high-stakes on-road testing.'
    },
    {
      id: 1,
      date: 'May - July 2025',
      title: 'Robotics Solutions Architect Intern',
      link: 'https://www.nvidia.com',
      company: 'NVIDIA',
      description: 'Fine-tuned foundational VLA models for robotic deployment and engineered "Sim-First" workflows in Isaac Lab to scale data collection and task validation.'
    },
    {
      id: 2,
      date: 'May - August 2024',
      title: 'Software Engineering Intern',
      link: 'https://www.martinrea.com',
      company: 'Martinrea International',
      description: 'Engineered low-latency telemetry pipelines and custom web-based dashboards to enable real-time debugging and visualization for autonomous vehicle deployments on Jetson platforms.'
    },
    {
      id: 3,
      date: 'May - August 2023',
      title: 'Associate Software Developer Intern',
      link: 'https://www.google.com',
      company: 'Google',
      description: 'Developed a Java-based backend and TypeScript frontend to automate productivity data reporting, optimizing internal workflows for the Gmail Delivery team.'
    },
    {
      id: 4,
      date: 'May - December 2023',
      title: 'Software Developer Intern',
      link: 'https://www.ibm.com',
      company: 'IBM',
      description: 'Developed robust Ruby APIs for large-scale data migrations, created custom Python/TypeScript plugins for educational IDEs, and implemented automated cross-service security threat detection.'
    },
    {
      id: 5,
      date: '2024 - 2026',
      title: 'Undergraduate Research Assistant',
      link: 'https://uwaterloo.ca',
      company: 'UWaterloo, SUTD',
      description: 'Contributed to research in various labs on foundation models in inspection robotics, robot learning, and computational neuroscience.'
    }
  ]

  const activeExperience = experiences[activeTab]

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2><span className="section-tag">02</span>Experience</h2>
        <div className="experience-wrapper">
          <div className="experience-tabs">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                className={`experience-tab ${activeTab === exp.id ? 'active' : ''}`}
                onClick={() => setActiveTab(exp.id)}
              >
                <span className="tab-title">{exp.company}</span>
              </button>
            ))}
          </div>
          
          <div className="experience-content">
            <div className="content-header">
              <h3>{activeExperience.title}</h3>
              <span className="experience-date">{activeExperience.date}</span>
            </div>
            <a href={activeExperience.link} target="_blank" rel="noopener noreferrer" className="company-link">
              <p className="company-name">{activeExperience.company}</p>
            </a>
            <p className="experience-description">{activeExperience.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
