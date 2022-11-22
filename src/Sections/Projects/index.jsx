import Heading from "../../Components/Heading";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import constant from "../../constant.json";
import styles from "./styles.module.css";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// <p className={styles.desc}>{project.desc}</p>

function Projects() {
	return (
		<section id="projects">
			<Heading index="05" heading="Some Things I’ve Worked On" />
			<div className={styles.container}>
				{constant.projects.map((project, index) =>
					index % 2 === 0 ? (
						<div className={styles.project}>
							<div className={styles.left}>
								<a href={project.link} target="__blank">
									<img
										src={project.image}
										className={styles.img}
										alt="project_img"
									/>
								</a>
							</div>
							<div className={styles.right}>
								<a href={project.link} className={styles.heading}>
									{project.title}
								</a>
								<p className={styles.desc}>
									{project.desc.map((x) => {
										return (
											<>
												<PlayArrowIcon className={styles.arrow}/> 
												&nbsp; {x}
												<br/> <br/>
											</>
										)
									})}
								</p>
								<div className={styles.skill_container}>
									{project.skills.map((skill) => (
										<p>{skill}</p>
									))}
								</div>
								<div>
									<a href="/" className={styles.link}>
										<GitHubIcon />
									</a>
									<a href="/" className={styles.link}>
										<OpenInNewIcon />
									</a>
								</div>
							</div>
						</div>
					) : (
						<div className={styles.project}>
							<div className={styles.left}>
								<a href={project.link} className={styles.heading}>
									{project.title}
								</a>
								
								<p className={styles.desc}>
									{project.desc.map((x) => {
										return (
											<>
												<PlayArrowIcon className={styles.arrow}/> 
												&nbsp; {x}
												<br/> <br/>
											</>
										)
									})}
								</p>
								<div className={styles.skill_container}>
									{project.skills.map((skill) => (
										<p>{skill}</p>
									))}
								</div>
								<div>
									<a href="/" className={styles.link}>
										<GitHubIcon />
									</a>
									<a href="/" className={styles.link}>
										<OpenInNewIcon />
									</a>
								</div>
							</div>
							<div className={styles.right}>
								<a href={project.link} target="__blank">
									<img
										src={project.image}
										className={styles.img}
										alt="project_img"
									/>
								</a>
							</div>
						</div>
					)
				)}
			</div>
		</section>
	);
}

export default Projects;
