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

type Category = {
  category: 'programming' | 'front-end' | 'frameworks' | 'back-end' | 'testing' | 'devops' | 'agile';
  description: string;
  skillList: Array<Skill>;
};

// Main types
export type SkillData = {
  section: Section;
  categoryList: Array<Category>;
};

// Main data
const skillData: Array<SkillData> = [
  {
    section: {
      title: 'Habilidades',
    },
    categoryList: [
      {
        category: 'front-end',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'HTML', value: 'html5', tag: 'html', color: 'e34f26' },
          { label: 'CSS', value: 'css3', tag: 'css', color: '1572b6' },
          { label: 'React', value: 'react', tag: 'react', color: '61dafb' },
          { label: 'JQuery', value: 'jquery', tag: 'jquery', color: '0769ad' },
          { label: 'SCSS', value: 'sass', tag: 'sass', color: 'cc6699' },
          { label: 'Styled Components', value: 'styledcomponents', tag: 'styled-components', color: 'db7093' },
          { label: 'Bootstrap', value: 'bootstrap', tag: 'bootstrap', color: '7952b3' },
          { label: 'Tailwind', value: 'tailwindcss', tag: 'tailwind', color: '06B6D4' },
          { label: 'Storybook', value: 'storybook', tag: 'storybook', color: 'ff4785' },
        ],
      },
      {
        category: 'back-end',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'Node.JS', value: 'node.js', tag: 'node', color: '5fa04e' },
          { label: 'Java', value: 'simpleicons', tag: 'java', color: 'f0931c' },
        ],
      },
      {
        category: 'programming',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'Javascript', value: 'javascript', tag: 'javascript', color: 'f7df1e' },
          { label: 'Typescript', value: 'typescript', tag: 'typescript', color: '3178c6' },
          { label: 'C#', value: 'simpleicons', tag: 'c-sharp', color: '5834d4' },
          { label: 'Java', value: 'simpleicons', tag: 'java', color: 'f0931c' },
        ],
      },
      {
        category: 'frameworks',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'Vue.JS', value: 'vue.js', tag: 'vue', color: '4fc08d' },
          { label: 'Nuxt', value: 'nuxt', tag: 'nuxt', color: '00dc82' },
          { label: 'Next.JS', value: 'next.js', tag: 'next-js', color: '000000' },
          { label: 'Angular', value: 'angular', tag: 'angular', color: '0F0F11' },
          { label: 'Svelte', value: 'svelte', tag: 'svelte', color: 'FF3E00' },
          { label: 'Express', value: 'express', tag: 'express', color: '000000' },
        ],
      },
      {
        category: 'testing',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'Jest', value: 'jest', tag: 'jest', color: 'c21325' },
          { label: 'Vitest', value: 'vitest', tag: 'vitest', color: '6e9f18' },
          { label: 'Jasmine', value: 'jasmine', tag: 'jasmine', color: '8A4182' },
        ],
      },
      {
        category: 'devops',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'Docker', value: 'docker', tag: 'docker', color: '2496ED' },
          { label: 'Git', value: 'git', tag: 'git', color: 'F05032' },
          { label: 'Github', value: 'github', tag: 'github', color: '181717' },
          { label: 'Azure', value: 'simpleicons', tag: 'azure', color: '00b5ea' },
        ],
      },
      {
        category: 'agile',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'CI/CD', value: 'simpleicons', tag: 'ci-cd', color: 'c2d328' },
          { label: 'Scrum', value: 'simpleicons', tag: 'scrum', color: '0164ff' },
          { label: 'Kanban', value: 'simpleicons', tag: 'kanban', color: '64e7a4' },
          { label: 'MeisterTask', value: 'simpleicons', tag: 'meister-task', color: '1891ff' },
          { label: 'Trello', value: 'trello', tag: 'trello', color: '0052CC' },
        ],
      },
    ],
  },
  {
    section: {
      title: 'Skills',
    },
    categoryList: [
      {
        category: 'front-end',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'HTML', value: 'html5', tag: 'html', color: 'e34f26' },
          { label: 'CSS', value: 'css3', tag: 'css', color: '1572b6' },
          { label: 'React', value: 'react', tag: 'react', color: '61dafb' },
          { label: 'JQuery', value: 'jquery', tag: 'jquery', color: '0769ad' },
          { label: 'SCSS', value: 'sass', tag: 'sass', color: 'cc6699' },
          { label: 'Styled Components', value: 'styledcomponents', tag: 'styled-components', color: 'db7093' },
          { label: 'Bootstrap', value: 'bootstrap', tag: 'bootstrap', color: '7952b3' },
          { label: 'Tailwind', value: 'tailwindcss', tag: 'tailwind', color: '06B6D4' },
          { label: 'Storybook', value: 'storybook', tag: 'storybook', color: 'ff4785' },
        ],
      },
      {
        category: 'back-end',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'Node.JS', value: 'node.js', tag: 'node', color: '5fa04e' },
          { label: 'Java', value: 'simpleicons', tag: 'java', color: 'f0931c' },
        ],
      },
      {
        category: 'programming',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'Javascript', value: 'javascript', tag: 'javascript', color: 'f7df1e' },
          { label: 'Typescript', value: 'typescript', tag: 'typescript', color: '3178c6' },
          { label: 'C#', value: 'simpleicons', tag: 'c-sharp', color: '5834d4' },
          { label: 'Java', value: 'simpleicons', tag: 'java', color: 'f0931c' },
        ],
      },
      {
        category: 'frameworks',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'Vue.JS', value: 'vue.js', tag: 'vue', color: '4fc08d' },
          { label: 'Nuxt', value: 'nuxt', tag: 'nuxt', color: '00dc82' },
          { label: 'Next.JS', value: 'next.js', tag: 'next-js', color: '000000' },
          { label: 'Angular', value: 'angular', tag: 'angular', color: '0F0F11' },
          { label: 'Svelte', value: 'svelte', tag: 'svelte', color: 'FF3E00' },
          { label: 'Express', value: 'express', tag: 'express', color: '000000' },
        ],
      },
      {
        category: 'testing',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'Jest', value: 'jest', tag: 'jest', color: 'c21325' },
          { label: 'Vitest', value: 'vitest', tag: 'vitest', color: '6e9f18' },
          { label: 'Jasmine', value: 'jasmine', tag: 'jasmine', color: '8A4182' },
        ],
      },
      {
        category: 'devops',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'Docker', value: 'docker', tag: 'docker', color: '2496ED' },
          { label: 'Git', value: 'git', tag: 'git', color: 'F05032' },
          { label: 'Github', value: 'github', tag: 'github', color: '181717' },
          { label: 'Azure', value: 'simpleicons', tag: 'azure', color: '00b5ea' },
        ],
      },
      {
        category: 'agile',
        description: 'Clique nas habilidades para ver informações sobre',
        skillList: [
          { label: 'CI/CD', value: 'simpleicons', tag: 'ci-cd', color: 'c2d328' },
          { label: 'Scrum', value: 'simpleicons', tag: 'scrum', color: '0164ff' },
          { label: 'Kanban', value: 'simpleicons', tag: 'kanban', color: '64e7a4' },
          { label: 'MeisterTask', value: 'simpleicons', tag: 'meister-task', color: '1891ff' },
          { label: 'Trello', value: 'trello', tag: 'trello', color: '0052CC' },
        ],
      },
    ],
  },
];

export { skillData };
