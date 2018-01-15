
export const rootUrl = 'https://raw.githubusercontent.com/MarsCapone/samsondanziger.com-content/master';
export const devmode = true;

export function getRootUrl () {
  if (devmode) return '/static/content';
  else return rootUrl;
}

export function getMdUrl(a, b, dev) {
  if (devmode && dev === undefined) return `/static/content/${a}/${b}.md`;
  else return `${rootUrl}/${a}/${b}.md`;
}

export const categories = [
  {
    name: 'general',
    colour: 'dark-red',
    projects: [
      {
        name: 'Fractal Viewer',
        id: 'fractal-viewer',
        description: 'An application for viewing and exploring fractals. Written in Java.',
        url: 'github'
      },
      {
        name: 'Splat',
        id: 'splat',
        description: 'A functional programming language for operating on streams. Written in OCaml.',
        url: 'github'
      },
      {
        name: 'Classical Cipher Encrypter / Decrypter',
        id: 'classical-cipher',
        description: 'An application is encrypt, perform crypto-analysis on, and decrypt classical ciphers. Written in Java.',
        url: 'github'
      }
    ]
  },
  {
    name: 'web',
    colour: 'blue',
    projects: [
      {
        name: 'Apprentice Bingo',
        id: 'apprentice-bingo',
        description: 'Bingo for the BBC television series, The Apprentice. Originally in AngularJS.',
        url: 'github'
      },
      {
        name: 'samsondanziger.com',
        id: 'this-site',
        description: 'Updating and modifying this website. My first proper attempt into recent web technologies.',
        url: 'github'
      }
    ]
  },
  {
    name: 'games',
    colour: 'dark-green',
    projects: [
      {
        name: 'Parrot Parazzi',
        id: 'parrot-parazzi',
        description: 'A simple puzzle/exploring game created with Unity.',
        url: 'github'
      },
      {
        name: 'Mornington Crescent *',
        id: 'mornington-crescent',
        description: 'A web game, based on the game of the same name from the BBC Radio 4 programme, I\'m Sorry I Haven\'t a Clue.',
        url: 'github'
      }
    ]
  }
];

export function getRaw (url, cb) {
  let req = new XMLHttpRequest();
  req.open('get', url, true);
  req.send();
  console.log(`Fetching ${url}`);
  req.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(this.responseText);
    } else {
      //cb()
    }
  }
}
