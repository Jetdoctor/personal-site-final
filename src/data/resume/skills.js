const skills = [
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Express.JS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Bootstrap',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'JQuery',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'REST',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'EJS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Mongoose',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Azure',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Git/Perforce',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'VS Code',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Visual Studio',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'JIRA',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Confluence',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: '3ds Max + Blender',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'AWS',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Authentication + Security',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Level Design + Combat Design',
    competency: 5,
    category: ['Game Development'],
  },
  {
    title: 'AI Design',
    competency: 3,
    category: ['Game Development'],
  },
  {
    title: 'Gameplay Programming',
    competency: 4,
    category: ['Game Development'],
  },
  {
    title: 'Unreal Engine',
    competency: 5,
    category: ['Game Development', 'Tools'],
  },
  {
    title: 'Radiant Engine',
    competency: 4,
    category: ['Game Development', 'Tools'],
  },
  {
    title: 'Unity Engine',
    competency: 4,
    category: ['Game Development', 'Tools'],
  },
  {
    title: 'C',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'C#',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Java',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Turkish',
    competency: 5,
    category: ['Real Languages'],
  },
  {
    title: 'English',
    competency: 5,
    category: ['Real Languages'],
  },
  {
    title: 'Japanese',
    competency: 2,
    category: ['Real Languages'],
  },
  {
    title: 'Russian',
    competency: 2,
    category: ['Real Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
//  '#6968b3',
//  '#37b1f5',
//  '#40494e',
//  '#515dd4',
  '#e47202',
  //  '#cc7b94',
  '#37b1f5',
  '#c3423f',
  '#40494e',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
