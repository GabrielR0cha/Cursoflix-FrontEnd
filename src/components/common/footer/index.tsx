import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
  return <>
  <>
	<Container className={styles.footer}>
	  {/* <img src="/logoOnebitcode.svg" alt="logoFooter" className={styles.footerLogo} /> */}
    <a href="" target={"blank"} className={styles.footerLink}>Cursoflix.COM</a>
  </Container>
</></>;
};

export default Footer