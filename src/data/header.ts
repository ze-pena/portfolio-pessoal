// Commom used types
type Option = {
  label: string;
  link: string;
};

// Main types
export type Header = {
  menuList: Array<Option>;
};

// Main data
const header: Header = {
  menuList: [
    { label: 'Sobre', link: '#about' },
    { label: 'Experiência', link: '#experience' },
    { label: 'Formação', link: '#academic' },
    { label: 'Habilidades', link: '#habilities' },
  ],
};

export { header };
