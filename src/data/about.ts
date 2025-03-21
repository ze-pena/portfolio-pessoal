// Common used types
type Contact = {
  label: string;
  link: string;
  type: 'mail' | 'phone' | 'linkedin' | 'github';
};

type Info = {
  label: string;
  type: 'local' | 'age';
};

// Main types
export type AboutData = {
  contactList: Array<Contact>;
  infoList: Array<Info>;
};

// Main data
const aboutData: AboutData = {
  contactList: [
    { label: 'Email', link: 'jose.pena.dev@gmail.com', type: 'mail' },
    { label: 'Whatsapp', link: '+5511942008326', type: 'phone' },
    { label: 'Linkedin', link: 'https://www.linkedin.com/in/ze-pena', type: 'linkedin' },
    { label: 'Github', link: 'https://www.github.com/ze-pena', type: 'github' },
  ],
  infoList: [
    { label: 'São Paulo', type: 'local' },
    { label: '27 anos', type: 'age' },
  ],
};

export { aboutData };
