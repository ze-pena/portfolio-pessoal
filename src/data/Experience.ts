// Common used types
type Section = {
  title: string;
};

type Skill = {
  label: string;
  value: string;
  tag: string;
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
          { label: 'Typescript', value: 'typescript', tag: 'typescript' },
          { label: 'Vue.JS', value: 'vue.js', tag: 'vue' },
          { label: 'Nuxt', value: 'nuxt', tag: 'nuxt' },
          { label: 'SCSS', value: 'sass', tag: 'sass' },
          { label: 'Jest', value: 'jest', tag: 'jest' },
          { label: 'Vitest', value: 'vitest', tag: 'vitest' },
          { label: 'Vuex', value: 'vue.js', tag: 'vuex' },
          { label: 'Pinia', value: 'nuxt', tag: 'nuxt' },
          { label: 'Storybook', value: 'storybook', tag: 'storybook' },
          { label: 'Node.JS', value: 'node.js', tag: 'node' },
          { label: 'Express', value: 'express', tag: 'express' },
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
          { label: 'Typescript', value: 'typescript', tag: 'typescript' },
          { label: 'React', value: 'react', tag: 'react' },
          { label: 'Styled Components', value: 'styledcomponents', tag: 'styled-components' },
          { label: 'Jest', value: 'jest', tag: 'jest' },
          { label: 'Redux', value: 'redux', tag: 'redux' },
          { label: '.Net', value: '.net', tag: 'dot-net' },
          { label: 'Blazor', value: 'blazor', tag: 'blazor' },
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
          { label: 'Javascript', value: 'javascript', tag: 'javascript' },
          { label: 'JQuery', value: 'jquery', tag: 'jquery' },
          { label: 'HTML', value: 'html5', tag: 'html' },
          { label: 'CSS', value: 'css3', tag: 'css' },
          { label: 'Bootstrap', value: 'bootstrap', tag: 'bootstrap' },
          { label: 'Handlebars.JS', value: 'handlebars.js', tag: 'handlebars' },
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
          { label: 'Wordpress', value: 'wordpress', tag: 'wordpress' },
          { label: 'Javascript', value: 'javascript', tag: 'javascript' },
          { label: 'HTML', value: 'html5', tag: 'html' },
          { label: 'CSS', value: 'css3', tag: 'css' },
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
          { label: 'Typescript', value: 'typescript', tag: 'typescript' },
          { label: 'Vue.JS', value: 'vue.js', tag: 'vue' },
          { label: 'Nuxt', value: 'nuxt', tag: 'nuxt' },
          { label: 'SCSS', value: 'sass', tag: 'sass' },
          { label: 'Jest', value: 'jest', tag: 'jest' },
          { label: 'Vitest', value: 'vitest', tag: 'vitest' },
          { label: 'Vuex', value: 'vue.js', tag: 'vuex' },
          { label: 'Pinia', value: 'nuxt', tag: 'nuxt' },
          { label: 'Storybook', value: 'storybook', tag: 'storybook' },
          { label: 'Node.JS', value: 'node.js', tag: 'node' },
          { label: 'Express', value: 'express', tag: 'express' },
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
          { label: 'Typescript', value: 'typescript', tag: 'typescript' },
          { label: 'React', value: 'react', tag: 'react' },
          { label: 'Styled Components', value: 'styledcomponents', tag: 'styled-components' },
          { label: 'Jest', value: 'jest', tag: 'jest' },
          { label: 'Redux', value: 'redux', tag: 'redux' },
          { label: '.Net', value: '.net', tag: 'dot-net' },
          { label: 'Blazor', value: 'blazor', tag: 'blazor' },
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
          { label: 'Javascript', value: 'javascript', tag: 'javascript' },
          { label: 'JQuery', value: 'jquery', tag: 'jquery' },
          { label: 'HTML', value: 'html5', tag: 'html' },
          { label: 'CSS', value: 'css3', tag: 'css' },
          { label: 'Bootstrap', value: 'bootstrap', tag: 'bootstrap' },
          { label: 'Handlebars.JS', value: 'handlebars.js', tag: 'handlebars' },
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
          { label: 'Wordpress', value: 'wordpress', tag: 'wordpress' },
          { label: 'Javascript', value: 'javascript', tag: 'javascript' },
          { label: 'HTML', value: 'html5', tag: 'html' },
          { label: 'CSS', value: 'css3', tag: 'css' },
        ],
      },
    ],
  },
];

export { experienceData };
