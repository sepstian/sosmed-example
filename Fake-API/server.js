const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.post('/generateProfile', (req, res) => {
  const { username, password } = req.body;
  const initial = username.charAt(0).toUpperCase();
  
  // Simpan data pengguna ke dalam database
  router.db.get('users').push({ username, password, profile: `https://place-hold.it/100x100/${initial}/${initial}` }).write();
  
  res.status(201).json({ message: 'User created' });
});

server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
