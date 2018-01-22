
const defaultProject = {
  name: '',
  id: '',
  category: '',
  url: '',
  component: ''
};

const projects = [
  // general
  {
    name: 'Fractal Viewer',
    id: 'fractal-viewer',
    category: 'general',
    description: 'An application for viewing and exploring fractals. Written in Java.',
    url: 'https://github.com/MarsCapone/fractal-viewer',
    component: 'NullProject'
  },
  {
    name: 'Splat',
    id: 'splat',
    description: 'A functional programming language for operating on streams. Written in OCaml.',
    url: 'https://github.com/MarsCapone/splat',
    component: 'NullProject'
  },
  {
    name: 'Classical Cipher Encrypter / Decrypter',
    id: 'classical-cipher',
    category: 'general',
    description: 'An application to encrypt, perform cryptanalysis, and decrypt classical ciphers.',
    url: 'https://github.com/MarsCapone/cipher',
    component: 'NullProject'
  },

  // web
  {
    name: 'Apprentice Bingo',
    id: 'apprentice-bingo',
    category: 'web',
    description: 'A game of Bingo to play whilst watching the BBC television series, The Apprentice.',
    url: 'https://github.com/MarsCapone/apprentice-bingo',
    component: 'NullProject'
  },

  // games
  {
    name: 'Parrot Parazzi',
    id: 'parrot-parazzi',
    category: 'games',
    description: 'A simple puzzle / exploring game created with Unity.',
    url: 'https://github.com/MarsCapone/parrot-parazzi',
    component: 'NullProject'
  },
  {
    name: 'Mornington Crescent *',
    id: 'mornington-crescent',
    category: 'games',
    description: 'A web game based on the BBC Radio 4 game of the same name.',
    url: 'https://gitlab.com/parrot-parazzi/mornington-crescent-client',
    component: 'NullProject'
  }
];

export default projects;
