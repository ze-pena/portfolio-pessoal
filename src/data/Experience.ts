// Common used types
type Section = {
  title: string;
};

type Skill = {
  label: string;
  value: string;
  tag: string;
  color: string;
};

type Experience = {
  company: 'alfa' | 'hiplatform' | 'procon';
  name: string;
  role: string;
  interval: string;
  description: string;
  model: 'presencial' | 'hibrido' | 'remoto';
  skillList: Array<Skill>;
};

// Main types
export type ExperienceData = {
  section: Section;
  experienceList: Array<Experience>;
};

// Main data
const experienceData: Array<ExperienceData> = [
  {
    section: {
      title: 'Experiência',
    },
    experienceList: [
      {
        company: 'alfa',
        name: 'Banco Alfa',
        role: 'Front-end | Pleno',
        interval: '07/2022 - 11/2024',
        description:
          'Desenvolvimento de sistemas e plataformas para uso interno (para colaboradores) e externos (para usuário), criação e manutenção de páginas institucionais. Gerenciamentos de dados globais da aplicação, testes unitários e documentação de componente.',
        model: 'hibrido',
        skillList: [
          { label: 'Typescript', value: 'typescript', tag: 'typescript', color: '3178c6' },
          { label: 'Vue.JS', value: 'vue.js', tag: 'vue', color: '4fc08d' },
          { label: 'Nuxt', value: 'nuxt', tag: 'nuxt', color: '00dc82' },
          { label: 'SCSS', value: 'sass', tag: 'sass', color: 'cc6699' },
          { label: 'Jest', value: 'jest', tag: 'jest', color: 'c21325' },
          { label: 'Vitest', value: 'vitest', tag: 'vitest', color: '6e9f18' },
          { label: 'Vuex', value: 'vue.js', tag: 'vuex', color: '4fc08d' },
          { label: 'Pinia', value: 'nuxt', tag: 'nuxt', color: '00dc82' },
          { label: 'Storybook', value: 'storybook', tag: 'storybook', color: 'ff4785' },
          { label: 'Node.JS', value: 'node.js', tag: 'node', color: '5fa04e' },
          { label: 'Express', value: 'express', tag: 'express', color: '000000' },
        ],
      },
      {
        company: 'hiplatform',
        name: 'Hi Platform',
        role: 'Front-end | Júnior',
        interval: '01/2021 - 07/2022',
        description:
          'Atuei na manutenção e desenvolvimento de uma nova ferramenta de reviews. Atendimento à tickets para a solução de bugs na ferramenta relacionados à quebras de layout e detecção de possíveis problemas de integração.',
        model: 'remoto',
        skillList: [
          { label: 'Typescript', value: 'typescript', tag: 'typescript', color: '3178c6' },
          { label: 'React', value: 'react', tag: 'react', color: '61dafb' },
          { label: 'Styled Components', value: 'styledcomponents', tag: 'styled-components', color: 'db7093' },
          { label: 'Jest', value: 'jest', tag: 'jest', color: 'c21325' },
          { label: 'Redux', value: 'redux', tag: 'redux', color: '764abc' },
          { label: '.Net', value: '.net', tag: 'dot-net', color: '512bd4' },
          { label: 'Blazor', value: 'blazor', tag: 'blazor', color: '512bd4' },
        ],
      },
      {
        company: 'hiplatform',
        name: 'Hi Platform',
        role: 'Front-end | Estágio',
        interval: '01/2020 - 12/2020',
        description:
          'Atuei com a implantação da ferramenta de reviews (Yourviews) em sites e-commerce, realizando correções e personalizando templates da ferramenta e de e-mails. Atendimento à tickets para a solução de bugs na ferramenta relacionados à quebras de layout e detecção de possíveis problemas de integração.',
        model: 'hibrido',
        skillList: [
          { label: 'Javascript', value: 'javascript', tag: 'javascript', color: 'f7df1e' },
          { label: 'JQuery', value: 'jquery', tag: 'jquery', color: '0769ad' },
          { label: 'HTML', value: 'html5', tag: 'html', color: 'e34f26' },
          { label: 'CSS', value: 'css3', tag: 'css', color: '1572b6' },
          { label: 'Bootstrap', value: 'bootstrap', tag: 'bootstrap', color: '7952b3' },
          { label: 'Handlebars.JS', value: 'handlebars.js', tag: 'handlebars', color: '000000' },
        ],
      },
      {
        company: 'procon',
        name: 'Procon',
        role: 'Suporte Técnico',
        interval: '01/2019 - 12/2019',
        description:
          'Atuei com suporte a usuários internos, instalação e configuração de softwares, limpeza, troca e manutenção de equipamentos, computadores e periféricos e auxiliei em postagens do blog interno (intranet).',
        model: 'presencial',
        skillList: [
          { label: 'Wordpress', value: 'wordpress', tag: 'wordpress', color: '21759b' },
          { label: 'Javascript', value: 'javascript', tag: 'javascript', color: 'f7df1e' },
          { label: 'HTML', value: 'html5', tag: 'html', color: 'e34f26' },
          { label: 'CSS', value: 'css3', tag: 'css', color: '1572b6' },
        ],
      },
    ],
  },
  {
    section: {
      title: 'Experience',
    },
    experienceList: [
      {
        company: 'alfa',
        name: 'Alfa Bank',
        role: 'Front-end | Mid Level',
        interval: '07/2022 - 11/2024',
        description:
          'Development of systems and platforms for internal use (for employees) and external use (for users), creation and maintenance of institutional pages. Management of global application data, unit testing, and component documentation.',
        model: 'hibrido',
        skillList: [
          { label: 'Typescript', value: 'typescript', tag: 'typescript', color: '3178c6' },
          { label: 'Vue.JS', value: 'vue.js', tag: 'vue', color: '4fc08d' },
          { label: 'Nuxt', value: 'nuxt', tag: 'nuxt', color: '00dc82' },
          { label: 'SCSS', value: 'sass', tag: 'sass', color: 'cc6699' },
          { label: 'Jest', value: 'jest', tag: 'jest', color: 'c21325' },
          { label: 'Vitest', value: 'vitest', tag: 'vitest', color: '6e9f18' },
          { label: 'Vuex', value: 'vue.js', tag: 'vuex', color: '4fc08d' },
          { label: 'Pinia', value: 'nuxt', tag: 'nuxt', color: '00dc82' },
          { label: 'Storybook', value: 'storybook', tag: 'storybook', color: 'ff4785' },
          { label: 'Node.JS', value: 'node.js', tag: 'node', color: '5fa04e' },
          { label: 'Express', value: 'express', tag: 'express', color: '000000' },
        ],
      },
      {
        company: 'hiplatform',
        name: 'Hi Platform',
        role: 'Front-end | Junior',
        interval: '01/2021 - 07/2022',
        description:
          'I worked on the maintenance and development of a new review tool. I handled tickets to resolve tool bugs related to layout breaks and detected potential integration issues.',
        model: 'remoto',
        skillList: [
          { label: 'Typescript', value: 'typescript', tag: 'typescript', color: '3178c6' },
          { label: 'React', value: 'react', tag: 'react', color: '61dafb' },
          { label: 'Styled Components', value: 'styledcomponents', tag: 'styled-components', color: 'db7093' },
          { label: 'Jest', value: 'jest', tag: 'jest', color: 'c21325' },
          { label: 'Redux', value: 'redux', tag: 'redux', color: '764abc' },
          { label: '.Net', value: '.net', tag: 'dot-net', color: '512bd4' },
          { label: 'Blazor', value: 'blazor', tag: 'blazor', color: '512bd4' },
        ],
      },
      {
        company: 'hiplatform',
        name: 'Hi Platform',
        role: 'Front-end | Intern',
        interval: '01/2020 - 12/2020',
        description:
          'I worked on implementing the Yourviews review tool on e-commerce websites, performing corrections and customizing templates for the tool and emails. I addressed tickets to resolve tool bugs related to layout issues and detected potential integration problems.',
        model: 'hibrido',
        skillList: [
          { label: 'Javascript', value: 'javascript', tag: 'javascript', color: 'f7df1e' },
          { label: 'JQuery', value: 'jquery', tag: 'jquery', color: '0769ad' },
          { label: 'HTML', value: 'html5', tag: 'html', color: 'e34f26' },
          { label: 'CSS', value: 'css3', tag: 'css', color: '1572b6' },
          { label: 'Bootstrap', value: 'bootstrap', tag: 'bootstrap', color: '7952b3' },
          { label: 'Handlebars.JS', value: 'handlebars.js', tag: 'handlebars', color: '000000' },
        ],
      },
      {
        company: 'procon',
        name: 'Procon',
        role: 'Support',
        interval: '01/2019 - 12/2019',
        description:
          'I provided support to internal users, including software installation and configuration, maintenance, replacement, and servicing of equipment, computers, and peripherals. Additionally, I assisted in posts for the internal blog (intranet).',
        model: 'presencial',
        skillList: [
          { label: 'Wordpress', value: 'wordpress', tag: 'wordpress', color: '21759b' },
          { label: 'Javascript', value: 'javascript', tag: 'javascript', color: 'f7df1e' },
          { label: 'HTML', value: 'html5', tag: 'html', color: 'e34f26' },
          { label: 'CSS', value: 'css3', tag: 'css', color: '1572b6' },
        ],
      },
    ],
  },
];

export { experienceData };
