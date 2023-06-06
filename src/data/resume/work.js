/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [

  {
    name: 'Sumo Digital',
    position: 'Level Designer',
    url: 'https://www.sumo-digital.com/',
    startDate: '2019-01-02',
    endDate: '2020-02-20',
    summary: 'While at Sumo, I worked on two separate projects. The first project was an unannounced AAA Multiplayer Shooter, which was the initial reason for my hire. Additionally, I contributed to the development of a puzzle platformer game called Spyder, designed for Apple Arcade on iOS.',
    highlights: [
      'Collaborating with cross discipline teams to create exciting, innovative and engaging levels.',
      'Understanding the role of pacing, narrative, theme and mechanics in creating compelling gameplay experiences.',
      'Realizing the high-level vision of my levels through all stages of development from initial block out through to final shipped product.',
      'Planning, executing and refining my levels from high-level concept to low-level scripting.',
      'Using player feedback and design direction to hone the gameplay experience.',
    ],
  },
  {
    name: 'Sledgehammer Games',
    position: 'Associate Technical Level Designer',
    url: 'https://www.sledgehammergames.com/',
    startDate: '2016-05-15',
    endDate: '2017-05-17',
    summary: 'I worked here for a year until my U.S. work visa, which I obtained after completing my M.S. degree, expired after a full year.',
    highlights: [
      'Planning, building, and revising interesting layouts for gameplay.',
      'Designing and owning systems/mechanics from concept to completion.',
      'Creating and iterating on the second to second experiences.',
      'Implementing gameplay using proprietary level editor and scripting language.',
      'Collaborating with the Design, Art, and Engineering teams to create and refine gameplay mechanics, combat encounters, and cinematic sequences.',
    ],
  },
  {
    name: 'Zygobot',
    position: 'Technical Game Designer',
    url: '',
    startDate: '2016-10-01',
    endDate: '2017-04-01',
    highlights: [
      'Utilized C# programming language and Unity Game Engine to create interactive and engaging gameplay experiences.',
      'Collaborated with the technical team to optimize game performance, identifying and resolving bottlenecks and implementing efficient coding practices within Unity.',
    ],
  },
  {
    name: 'Petkim',
    position: 'Software Engineer Intern',
    url: 'https://www.petkim.com.tr/',
    startDate: '2013-08-01',
    endDate: '2013-09-15',
    highlights: [
      "Collaborated with the IT team to maintain and manage the company's network infrastructure.",
    ],
  },
  {
    name: 'PHICOMM',
    position: 'Software Engineer Intern',
    url: '',
    startDate: '2012-07-15',
    endDate: '2012-08-30',
    highlights: [
      'Utilized Java programming language and Eclipse IDE to create robust and efficient Android applications while implementing new features and improving existing functionality.',
    ],
  },
];

export default work;
