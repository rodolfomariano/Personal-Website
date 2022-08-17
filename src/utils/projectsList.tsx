import MacroCalcImg from '../assets/portfolio-images/my-macro-calc.png'
import Coffee from '../assets/portfolio-images/coffee.png'
import Storybook from '../assets/portfolio-images/storybook.png'
import MyFinances from '../assets/portfolio-images/myFinances.png'

export const ProjectsList = [
  {
    id: '1',
    title: 'My Macro Calc',
    type: 'web',
    description: 'Calculadora de macro nutrientes diario',
    technologies: ['React js / Vite', 'Sass', 'Framer Motion', 'TypeScript'],
    projectLink: 'https://my-macro-calc.vercel.app/',
    githubLink: 'https://github.com/rodolfomariano/My-Macro-Calc',
    thumbnail: MacroCalcImg,
    images: [],
    learnings:
      'O principal ensinamento desse projeto foi a importância de entender o core do sistema, por exemplo, para desenvolver esse projeto tive que aprender conceitos como: GET(Gasto Energético Total), GEB(Gasto Energético Basal) entre outros.',
  },
  {
    id: '2',
    title: 'Coffee Delivery',
    type: 'web',
    description: 'Um e-commerce para compra de cafés.',
    technologies: [
      'React js / Vite',
      'Styled Components',
      'TypeScript',
      'React DnD',
    ],
    projectLink: 'https://coffee-delivery-coral.vercel.app/',
    githubLink: 'https://github.com/rodolfomariano/Coffee-Delivery',
    thumbnail: Coffee,
    images: [],
    learnings:
      'Nesse projeto de e-commerce Fake, pude aprender a lidar com a lib React DnD que auxilia na função de Drag and Drop(Arrastar e soltar), além de poder usar o hook reducer e também usar a técnica de layouts em projetos react.',
  },
  {
    id: '3',
    title: 'React Simple Form Components',
    type: 'web',
    description: 'Projeto base usando Storybook para criação de design system.',
    technologies: ['NextJS', 'Storybook', 'TypeScript', 'Stitches'],
    projectLink: '',
    githubLink: 'https://github.com/rodolfomariano/react-simple-form-componets',
    thumbnail: Storybook,
    images: [],
    learnings:
      'Esse foi o meu primeiro projeto usando Storybook, muito útil para a criação de design system e para auxiliar no desenvolvimento usei a lib Stitches para facilitar a variação dos component.',
  },
  {
    id: '4',
    title: 'myfinances',
    type: 'mobile',
    description: 'App para auxílio das finanças pessoais.',
    technologies: [
      'React Native / Expo',
      'Styled Components',
      'TypeScript',
      'AsyncStorage',
    ],
    projectLink:
      'https://play.google.com/store/apps/details?id=com.myfinances_rms',
    githubLink: 'https://github.com/rodolfomariano/myfinances',
    thumbnail: MyFinances,
    images: [],
    learnings:
      'Nesse projeto pude praticar meus conhecimentos em React Native, autenticação social e salvar dados no aparelho, usando a lib AsyncStorage.',
  },
]
