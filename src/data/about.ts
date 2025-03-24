// Common used types
type Profile = {
  name: string;
  role: string;
};

type Message = {
  title: string;
  subtitle: string;
  body: string;
};

type Info = {
  label: string;
  type: 'local' | 'age';
};

type Contact = {
  label: string;
  link: string;
  type: 'mail' | 'phone' | 'linkedin' | 'github';
};

// Main types
export type AboutData = {
  profile: Profile;
  message: Message;
  infoList: Array<Info>;
  contactList: Array<Contact>;
};

// Main data
const aboutData: Array<AboutData> = [
  {
    profile: {
      name: 'Jose Pena',
      role: 'Desenvolvedor Front-end',
    },
    message: {
      title: '{ Olá Mundo! }',
      subtitle: 'Design | Clean Code | Criatividade',
      body: 'Atuando em 6 anos de carreira como desenvolvedor Front-end, tenho vasto conhecimento em vários tipos de frameworks e bibliotecas de desenvolvimento web, com destaque para React e Vue. Tenho boas noções de design e experiência de usuário, amo técnologia e estou continuamente espandimento meus horizontes.',
    },
    infoList: [
      { label: 'Brasil, São Paulo - SP', type: 'local' },
      { label: '27 anos', type: 'age' },
    ],
    contactList: [
      { label: 'E-mail', link: 'jose.pena.dev@gmail.com', type: 'mail' },
      { label: 'Whatsapp', link: '+5511942008326', type: 'phone' },
      { label: 'Linkedin', link: 'https://www.linkedin.com/in/ze-pena', type: 'linkedin' },
      { label: 'Github', link: 'https://www.github.com/ze-pena', type: 'github' },
    ],
  },
  {
    profile: {
      name: 'Jose Pena',
      role: 'Front-end Developer',
    },
    message: {
      title: '{ Hello world! }',
      subtitle: 'Design | Clean Code | Creativity',
      body: 'With 6 years of experience as a Front-end developer, I have extensive knowledge of various types of web development frameworks and libraries, with a focus on React and Vue. I have a good understanding of design and user experience, love technology, and am continuously expanding my horizons.',
    },
    infoList: [
      { label: 'Brazil, São Paulo - SP', type: 'local' },
      { label: '27 years', type: 'age' },
    ],
    contactList: [
      { label: 'E-mail', link: 'jose.pena.dev@gmail.com', type: 'mail' },
      { label: 'Whatsapp', link: '+5511942008326', type: 'phone' },
      { label: 'Linkedin', link: 'https://www.linkedin.com/in/ze-pena', type: 'linkedin' },
      { label: 'Github', link: 'https://www.github.com/ze-pena', type: 'github' },
    ],
  },
];

export { aboutData };
