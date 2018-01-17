
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
