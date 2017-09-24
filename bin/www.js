const app = require('../index');
const syncDb = require('./sync-db');

syncDb().then(_ => {
  console.info('Sync Database!');
  app.listen(3000, () => {
    console.info('Server ... port 3000');
  });
});
