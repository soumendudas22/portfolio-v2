
import { motion } from "framer-motion";
import Link from 'next/link';

export default function Section4({ projects }) {
  return (
    <div className="section-4">
      <div className="nav-title">PROJECTS</div>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <Link href={project.link} passHref key={index}>
            <a target="_blank" className="project-link" style={{ display: 'block' }}>
              <motion.div
                className="project wrapper-box"
                whileHover={{
                  backgroundColor: '#974bf34f'
                }}
              >
                <div className="project-title">{project.repo}</div>
                <div className="project-desc">{project.description}</div>
              </motion.div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}