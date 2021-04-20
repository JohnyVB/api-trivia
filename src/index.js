const app = require('./app');
require('./db');

app.listen(app.get('PORT'), () => {
  console.log('Server up');
  console.log('http://localhost:%d/', app.get('PORT'));
});
