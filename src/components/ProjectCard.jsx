import React from 'react'
import '../styles/ProjectCard.css'

const ProjectCard = () => {
  const AvatarGroup = () => (
    <div className="avatar-group">
      <div className="avatar">
        <div className="avatar-bg"></div>
      </div>
      <div className="avatar">
        <div className="avatar-bg"></div>
      </div>
      <div className="avatar">
        <div className="avatar-bg"></div>
      </div>
      <div className="avatar">
        <div className="avatar-bg"></div>
      </div>
    </div>
  )

  const projects = [
    {
      id: 1,
      title: "Modern",
      subtitle: "Project #1",
      description: "As Uber works through a huge amount of internal management turmoil.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/345d48134f294e96c85d438f091af77ab49766e4?width=740"
    },
    {
      id: 2,
      title: "Scandinavian",
      subtitle: "Project #2",
      description: "Music is something that every person has his or her own specific opinion about.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/8dba56f211b8187f6b64a483920aadda20c90d71?width=808"
    },
    {
      id: 3,
      title: "Minimalist",
      subtitle: "Project #3",
      description: "Different people have different taste, and various types of music.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/ef34487ac2c4493a4d4d63e1832d4601b3902b0b?width=1100"
    }
  ]

  return (
    <div className="project-card">
      <div className="project-card-background"></div>

      <div className="project-header">
        <div className="project-title">Projects</div>
        <div className="project-subtitle">Architects design houses</div>
      </div>

      <div className="project-cards-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card-item">
            <div className="card-image-container">
              <div className="card-image-background"></div>
              <img className="card-image" src={project.image} alt={project.title} />
            </div>

            <div className="card-content">
              <div className="card-subtitle">{project.subtitle}</div>
              <div className="card-title">{project.title}</div>
              <div className="card-description">{project.description}</div>

              <button className="view-all-button">VIEW ALL</button>

              <AvatarGroup />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard
