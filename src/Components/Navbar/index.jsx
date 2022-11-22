import styles from "./styles.module.css";

function Navbar() {
	const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Saikrishna_Tadepalli_Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
				
                alink.href = fileURL;
				alink.target="_blank";

                alink.click();
            })
        })
    }

	return (
		<nav className={styles.nav_container}>
			<div className={styles.nav_left}>
				<a href="#home">Portfolio</a>
			</div>
			<div className={styles.nav_right}>
				<a href="#about" className={styles.nav_link}>
					<span>01.</span>About
				</a>
				<a href="#education" className={styles.nav_link}>
					<span>02.</span>Education
				</a>
				<a href="#skills" className={styles.nav_link}>
					<span>03.</span>Skills
				</a>
				<a href="#experience" className={styles.nav_link}>
					<span>04.</span>Experience
				</a>
				<a href="#projects" className={styles.nav_link}>
					<span>05.</span>Projects
				</a>
				<a href="#contact" className={styles.nav_link}>
					<span>06.</span>Contact
				</a>
				<button onClick={onButtonClick} target="_blank" class={styles.nav_resume_btn}>Resume</button>
			</div>
		</nav>
	);
}

export default Navbar;
