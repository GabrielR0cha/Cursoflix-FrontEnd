import { Container,Button } from "reactstrap";
import styles from "./styles.module.scss";
import "../../../../styles/globals.scss";
import "bootstrap/dist/css/bootstrap.min.css"
const HeaderNoAuth = () => {
  return <>

  	<div className={styles.ctaSection}>
		<img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>
    <p>Se cadastre para ter acesso aos cursos</p>
    <img src="/homeNoAuth/logoCta.png" alt="logoCta" className={styles.imgCta}/>

	</div>
  <Container className={styles.nav}>
			<img src="/logoOnebitflix.svg" alt="logoOnebitflix" className={styles.imgLogoNav}/>
			<div>
				<Button className={styles.navBtn} outline>Entrar</Button>
				<Button className={styles.navBtn} outline>Quero fazer parte</Button>
			</div>
		</Container>
  </>;
};

export default HeaderNoAuth;