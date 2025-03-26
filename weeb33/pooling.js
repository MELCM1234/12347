const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'tu_contraseña',
  database: 'testdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

async function main() {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.query('SELECT * FROM usuarios');
    console.log(rows);
  } finally {
    connection.release();
  }
}

main().catch(console.error);
