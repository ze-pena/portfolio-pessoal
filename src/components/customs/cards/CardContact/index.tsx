// Dependências
import { useRef, useMemo } from 'react';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';

// Styling
import './styles.sass';

// Typing
type ContactType = 'mail' | 'phone' | 'linkedin' | 'github';

type Props = {
  label: string;
  link: string;
  type: ContactType;
};

// Component
function ContactCard(props: Props) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  const link = useMemo(() => {
    const { link, type } = props;
    if (type === 'phone') return `https://wa.me/${link}`;
    if (type === 'mail') return `mailto:${link}`;
    return link;
  }, [props]);

  const clickContact = (): void => {
    if (!linkRef.current) return;
    linkRef.current.click();
  };

  return (
    <li className="card-contact">
      <a className="card-contact__link" href={link} target="_blank" ref={linkRef} />

      <button className="card-contact__content" type="button" onClick={clickContact}>
        <div className="card-contact__content__icon">
          {props.type === 'mail' && <FontAwesomeIcon icon={faEnvelope} />}
          {props.type === 'phone' && <FontAwesomeIcon icon={faWhatsapp} />}
          {props.type === 'linkedin' && <FontAwesomeIcon icon={faLinkedin} />}
          {props.type === 'github' && <FontAwesomeIcon icon={faGithub} />}
        </div>

        <div className="card-contact__content__label">{props.label}</div>
      </button>
    </li>
  );
}

export default ContactCard;
