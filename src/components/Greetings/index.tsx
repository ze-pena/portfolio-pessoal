// Components
import { Section } from '../global/Section';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faLocationDot, faCakeCandles } from '@fortawesome/free-solid-svg-icons';

// Images
import ProfilePicture from '../../assets/images/profile_picture.jpg';

// Styling
import './styles.sass';

// Component
function Greetings() {
  return (
    <Section.Root>
      <Section.Container>
        <div className="greetings --title">
          <div className="greetings__title">
            <h2>Jose Pena</h2>
            <sub>Meu portfólio</sub>
          </div>
        </div>
      </Section.Container>

      <Section.Container>
        <Section.Name>Um pouco sobre mim</Section.Name>
        <div className="greetings --about">
          <div className="greetings__about">
            <div className="greetings__about__content">
              <img src={ProfilePicture} alt="Imagem do criador do site" />

              <p>
                Em 6 anos de carreira, tenho bastante experiência trabalhando com frameworks como o Vue, além de sólido
                conhecimento em React. Em destaque, tenho conhecimento bem aprofundado em CSS e o pre-processador SASS.
                Já atuei trabalhando com Redux e Redux-Saga, Vuex e Pinia como controladores de estado global. Já usei
                Jest, Jasmine e Vitest para testes automatizados. Atualmente venho me empenhando em melhorar o meu
                inglês e expandir meus horizontes além do Javascript.
              </p>
            </div>
          </div>
        </div>
      </Section.Container>

      <Section.Container>
        <div className="greetings --info">
          <ul className="greetings__info">
            <li className="greetings__info__item">
              <div className="greetings__info__item__icon">
                <FontAwesomeIcon icon={faFlag} />
              </div>
              <span className="greetings__info__item__label">Brasileiro</span>
            </li>

            <li className="greetings__info__item">
              <div className="greetings__info__item__icon">
                <FontAwesomeIcon icon={faCakeCandles} />
              </div>
              <span className="greetings__info__item__label">27 anos</span>
            </li>

            <li className="greetings__info__item">
              <div className="greetings__info__item__icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <span className="greetings__info__item__label">São paulo - SP</span>
            </li>
          </ul>
        </div>
      </Section.Container>
    </Section.Root>
  );
}

export default Greetings;
