// Dependências
import { aboutData } from '../../data/about';
import { menuData } from '../../data/menu';

// Components
import ContactCard from '../global/Cards/ContactCard';
import InfoCard from '../global/Cards/InfoCard';
import Menu from '../global/Menu';

// Assets
import ProfilePicture from '../../assets/images/profile_picture.jpg';

// Styling
import './styles.sass';

// Component
function About() {
  return (
    <div className="about">
      <div className="about__profile">
        <img className="about__profile__picture" src={ProfilePicture} alt="Imagem de perfil" />

        <div className="about__profile__info">
          <h1 className="about__profile__info__name">Jose Pena</h1>
          <span className="about__profile__info__role">Desenvolvedor Front-end</span>
        </div>

        <ul className="about__profile__contact">
          {aboutData.personalContact.map((item, index) => (
            <ContactCard key={index} {...item} />
          ))}
        </ul>
      </div>

      <div className="about__content">
        <h2 className="about__content__wellcome">{'{ Olá Mundo! }'}</h2>

        <span className="about__content__sub-content">Design | Clean Code | Criatividade</span>

        <p className="about__content__description">
          Atuando em 6 anos de carreira como desenvolvedor Front-end, tenho vasto conhecimento em vários tipos de
          frameworks e bibliotecas de desenvolvimento web, com destaque para React e Vue. Tenho boas noções de design e
          experiência de usuário, amo técnologia e estou continuamente espandimento meus horizontes.
        </p>

        <ul className="about__content__tags">
          {aboutData.personalInfo.map((item, index) => (
            <InfoCard key={index} {...item} />
          ))}
        </ul>

        <nav className="about__content__navigation">
          <Menu menuList={menuData.menuList} />
        </nav>
      </div>
    </div>
  );
}

export default About;
