import styles from "./About.module.css";
import data from "../../../data.json"

const About = () => {
    return (
        <div id="about" className={styles.AboutWrapper}>
            <h1>About us</h1>
            <p>{data.about}</p>
        </div>
    );
};

export default About;
