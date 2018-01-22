
const defaultPost = {
  title: '',
  short: '',
  id: '',
  date: '',
  tags: []
};

const blog = {
  // posts should be ordered newest first
  posts: [
    Object.assign(defaultPost, {
      title: 'Hello World',
      short: 'First post on the new site.',
      id: 'hello-world',
      date: '2018-01-22',
      tags: [ 'hello', 'world' ],
      component: 'HelloWorld'
    })
  ]
};

export default blog;
