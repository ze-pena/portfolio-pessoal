// Commom used types
type Option = {
  label: string;
  link: string;
};

// Main types
type Navigation = {
  menuList: Array<Option>;
};

// Main data
const navigation: Navigation = {
  menuList: [
    { label: 'Sobre', link: '#about' },
    { label: 'Experiência', link: '#experience' },
    { label: 'Formação', link: '#academic' },
    { label: 'Habilidades', link: '#habilities' },
  ],
};

export { navigation };
