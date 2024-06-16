import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sql from 'mssql';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const dbConfig = {
  user: 'nlqm',
  password: 'Leenox898989.',
  server: 'hexhktsql.database.windows.net',
  database: 'hexhackathon',
  options: {
    encrypt: true
  }
};

sql.connect(dbConfig).then(pool => {
  if (pool.connected) {
    console.log('Connected to Azure SQL');
  }
}).catch(err => {
  console.error('Database connection failed', err);
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  sql.connect(dbConfig).then(pool => {
    return pool.request()
      .input('email', sql.NVarChar, email)
      .query('SELECT * FROM Users WHERE Email = @Email');
  }).then(result => {
    if (result.recordset.length > 0) {
      const user = result.recordset[0];
      // For simplicity, assuming plain text password comparison, use hashing in production
      if (user.PasswordHash === password) {
        res.json({ success: true });
      } else {
        res.json({ success: false });
      }
    } else {
      res.json({ success: false });
    }
  }).catch(err => {
    console.error('Query failed', err);
    res.status(500).send('Server error');
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
