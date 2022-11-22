import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function Skills() {
	return (
		<section id="skills">
			<Heading index="03" heading="Skills" />
			<div className={styles.container}>
				<div className={styles.left}>
					<p className={styles.desc}>
					<b>Languages: </b> 
					<br/>
					C#, C/C++, GraphQL, HTML/CSS, Java, JavaScript, Python, TypeScript, Unix-BASH

					<br/><br/>

					<b>Technologies: </b> 
					<br/>
					AWS, Azure, Express.JS, Git, MongoDB, Node.JS, Pandas, React, React Native, Unity
					</p>
				</div>
			</div>
		</section>
	);
}

export default Skills;
