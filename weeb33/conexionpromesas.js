const mysql = require('mysql2/promise');

async function main() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tu_contraseña',
    database: 'testdb'
  });

  console.log('Conectado a la base de datos.');

  const [rows] = await connection.execute('SELECT * FROM usuarios');
  console.log(rows);

  await connection.end();
}

main().catch(console.error);
