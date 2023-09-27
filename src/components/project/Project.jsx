  import React from 'react';
  import {info} from '../../info/Info'
  import styles from './Project.module.css'
  import github from '../../img/github.png'

  export default function Portfolio() {
      return (
        <>
        <div className={styles.p_wrap}>
          <section>
          <h1>PROJECTS</h1>
          <ul className={styles.box_wrap}>
            {info.portfolio.map((project, idx) => (
              <li key={idx}>
                  <div>
                    <div className={styles.info_wrap}>
                    <div>
                      <p className={styles.name}>{project.title}</p>
                      <span className={styles.day}>period : {project.period}</span>
                      <p className={styles.desc}>{project.description}</p>
                    </div>
                      <div className={styles.tech}>
                        <span className={styles.label}>기술 스택</span>
                        <ul>
                          {project.techStack.map((tech, index) => (
                            <li key={index}>{tech}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {project.github && <a href={project.github} className='github'><img src={github} ></img></a>}
              </li>
            ))}
          </ul>
        </section>
      </div>
      </>
      );
  }

