// Components
import InfoCard from '@components/customs/cards/CardInfo';
import ContactCard from '@components/customs/cards/CardContact';
import Section from '@components/composable/Section';

// Assets
import profilePicture from '@assets/images/profile_picture.jpg';

// Styling
import './styles.sass';

// Typing
import { AboutData } from '@data/About';

type Props = { data: AboutData };

// Component
function ContentAbout(props: Props) {
  return (
    <Section.Root id="about" position="first">
      <Section.Container>
        <div className="content-about">
          <div className="content-about__profile">
            <div className="content-about__profile__content">
              <img className="content-about__profile__content__picture" src={profilePicture} alt="Imagem de perfil" />

              <div className="content-about__profile__content__about">
                <h1 className="content-about__profile__content__about__name">{props.data.profile.name}</h1>
                <span className="content-about__profile__content__about__role">{props.data.profile.role}</span>
                <ul className="content-about__profile__content__about__info">
                  {props.data.infoList.map((infoItem, index) => (
                    <InfoCard key={index} {...infoItem} />
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="content-about__message">
            <div className="content-about__message__content">
              <h2 className="content-about__message__content__title">{props.data.message.title}</h2>
              <span className="content-about__message__content__subtitle">{props.data.message.subtitle}</span>
              <p className="content-about__message__content__body">{props.data.message.body}</p>
              <ul className="content-about__message__content__contact">
                {props.data.contactList.map((contactItem, index) => (
                  <ContactCard key={index} {...contactItem} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section.Container>
    </Section.Root>
  );
}

export default ContentAbout;
