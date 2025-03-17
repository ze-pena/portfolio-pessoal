// Dependências
import { useRef } from 'react';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';

// Styling
import './styles.sass';

// Typing
type Icon = 'mail' | 'phone' | 'linkedin' | 'github' | 'location';
type Type = 'none' | 'external' | 'mail' | 'phone';

type Props = {
  label: string;
  icon?: Icon;
  link?: string;
  type: Type;
};

// Component
function ContactCard(props: Props) {
  const createLink = (link: string = '', type: Type): string => {
    if (type === 'phone') return `https://wa.me/${link}`;
    if (type === 'mail') return `mailto:${link}`;
    return link;
  };

  const handleClick = (): void => {
    if (!linkRef.current || props.type === 'none') return;
    linkRef.current.click();
  };

  const link = createLink(props.link, props.type);
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <li className="contact-card">
      {props.link && props.type !== 'none' && (
        <a className="contact-card__link" href={link} target="_blank" ref={linkRef} />
      )}

      <button className="contact-card__content" type="button" onClick={handleClick}>
        {props.icon && (
          <div className="contact-card__content__icon">
            {props.icon === 'phone' && <FontAwesomeIcon icon={faWhatsapp} />}
            {props.icon === 'mail' && <FontAwesomeIcon icon={faEnvelope} />}
            {props.icon === 'location' && <FontAwesomeIcon icon={faLocationDot} />}
            {props.icon === 'linkedin' && <FontAwesomeIcon icon={faLinkedin} />}
            {props.icon === 'github' && <FontAwesomeIcon icon={faGithub} />}
          </div>
        )}

        <div className="contact-card__content__label">{props.label}</div>
      </button>
    </li>
  );
}

export default ContactCard;
