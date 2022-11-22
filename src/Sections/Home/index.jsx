import styles from "./styles.module.css";

function Home() {
	return (
		<section className={styles.home_section} id="home">
			<h1 className={styles.heading_1}>Saikrishna Tadepalli</h1>
			<h1 className={styles.heading_2}>Software Engineer</h1>
			<a href="#about">
				<button className={styles.btn}>Get to Know me !</button>
			</a>
		</section>
	);
}

export default Home;
