const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'testdb'
});

connection.connect(err => {
  if (err) {
    console.error('Error de conexión:', err.stack);
    return;
  }
  console.log('Conectado como id ' + connection.threadId);
  
  connection.query('SELECT * FROM usuarios', (error, results) => {
    if (error) throw error;
    console.log(results);
    connection.end();
  });
});

