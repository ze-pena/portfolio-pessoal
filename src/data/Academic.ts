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

type Academic = {
  college: 'unicid';
  name: string;
  course: string;
  interval: string;
  description: string;
  model: 'presencial' | 'hibrido' | 'remoto';
  skillList: Array<Skill>;
};

// Main types
export type AcademicData = {
  section: Section;
  academicList: Array<Academic>;
};

// Main data
const academicData: Array<AcademicData> = [
  {
    section: {
      title: 'Formação',
    },
    academicList: [
      {
        college: 'unicid',
        name: 'UNICID',
        course: 'Ciência da Computação',
        interval: '01/2018 - 12/2021',
        description:
          'Conhecimentos teórico e prático sobre estrutura de dados, complexidade de algorítimos, administração de redes e bancos de dados e gestão de projetos.',
        model: 'hibrido',
        skillList: [
          { label: 'HTML', value: 'html5', tag: 'html', color: 'e34f26' },
          { label: 'CSS', value: 'css3', tag: 'css', color: '1572b6' },
          { label: 'Javascript', value: 'javascript', tag: 'javascript', color: 'f7df1e' },
          { label: 'PHP', value: 'php', tag: 'php', color: '777bb4' },
          { label: 'C', value: 'c', tag: 'c', color: 'a8b9cc' },
          { label: 'Java', value: 'simpleicons', tag: 'java', color: 'f0931c' },
        ],
      },
    ],
  },
  {
    section: {
      title: 'Academic',
    },
    academicList: [
      {
        college: 'unicid',
        name: 'UNICID',
        course: 'Data Science',
        interval: '01/2018 - 12/2021',
        description:
          'Theoretical and practical knowledge about data structures, algorithm complexity, network and database administration, and project management.',
        model: 'hibrido',
        skillList: [
          { label: 'HTML', value: 'html5', tag: 'html', color: 'e34f26' },
          { label: 'CSS', value: 'css3', tag: 'css', color: '1572b6' },
          { label: 'Javascript', value: 'javascript', tag: 'javascript', color: 'f7df1e' },
          { label: 'PHP', value: 'php', tag: 'php', color: '777bb4' },
          { label: 'C', value: 'c', tag: 'c', color: 'a8b9cc' },
          { label: 'Java', value: 'simpleicons', tag: 'java', color: 'f0931c' },
        ],
      },
    ],
  },
];

export { academicData };
