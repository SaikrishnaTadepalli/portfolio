import Heading from "../../Components/Heading";
import styles from "./styles.module.css";

function Education() {
	return (
		<section id="education">
			<Heading index="02" heading="Education" />
			<div className={styles.container}>
				<div className={styles.uni_logo}>
					<img className={styles.logo_img} src='https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/University_of_Waterloo_seal.svg/1200px-University_of_Waterloo_seal.svg.png' alt="UWaterloo Logo"/>
				</div>

				<div className={styles.left}>
					<div className={styles.title}>
						<h1 id="name">Bachelors of Computer Science</h1>
						<h2 id="date">Sept 2020 - May 2025</h2>
					</div>

					<p className={styles.desc}>
					I'm currently studying Computer Science and 
					Financial Management at the Unicersity of Waterloo. 
					<br/><br/>
					This program is providing me with strong math and CS 
					fundementals that I can apply when working in the industry.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Education;
