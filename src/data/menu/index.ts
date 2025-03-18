type MenuItem = {
  label: string;
  link: string;
};

type MenuData = {
  menuList: MenuItem[];
};

const menuData: MenuData = {
  menuList: [
    { label: 'Sobre', link: '#about' },
    { label: 'Experiência', link: '#experience' },
    { label: 'Formação', link: '#academic' },
    { label: 'Habilidades', link: '#habilities' },
  ],
};

export { menuData };
