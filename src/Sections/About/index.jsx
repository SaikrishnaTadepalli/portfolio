import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function About() {
	return (
		<section id="about">
			<Heading index="01" heading="About Me" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					Hi, I'm Saikrishna. 

					<br/><br/>
					
					I'm a software engineer looking to create impact in all the work that I do. 
					My current interests are in full-stack development and the application of software in the finance industry. 
					Apart from engineering, I enjoy exploring nature and playing video games.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
