// Commom used types
type Option = {
  label: string;
  link: string;
};

type Scheme = 'Light' | 'Dark' | 'Claro' | 'Escuro';

type Language = 'pt-BR' | 'en-US';

type Settings = {
  schemeList: Array<Scheme>;
  languageList: Array<Language>;
};

// Main types
export type HeaderData = {
  menuList: Array<Option>;
  menuSettings: Settings;
};

// Main data
const headerData: Array<HeaderData> = [
  {
    menuList: [
      { label: 'Sobre', link: '#start' },
      { label: 'Experiência', link: '#experience' },
      { label: 'Formação', link: '#academic' },
      { label: 'Habilidades', link: '#skills' },
    ],
    menuSettings: {
      schemeList: ['Claro', 'Escuro'],
      languageList: ['pt-BR', 'en-US'],
    },
  },
  {
    menuList: [
      { label: 'About', link: '#start' },
      { label: 'Experience', link: '#experience' },
      { label: 'Academic', link: '#academic' },
      { label: 'Skills', link: '#skills' },
    ],
    menuSettings: {
      schemeList: ['Light', 'Dark'],
      languageList: ['pt-BR', 'en-US'],
    },
  },
];

export { headerData };
