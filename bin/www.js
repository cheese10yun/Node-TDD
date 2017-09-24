const app = require('../index');
const syncDb = require('./sync-db');

syncDb().then(_=>{
  console.log('Sync Database!');
  app.listen(3000, ()=>{
    console.log('Server ... port 3000');
  });
});
