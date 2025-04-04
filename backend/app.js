const express = require('express');
const { Pool } = require("pg");
const cors = require('cors');

const app = express();
const PORT = 3001;

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

app.use(cors({ origin: 'http://localhost:8080' }));

app.get('/api', async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW() AS current_time;");
    res.json({ message: "Conexão bem-sucedida! Agora são ", 
      db_time: result.rows[0].current_time });
  } catch (error) {
    console.error("Erro ao conectar no banco:", error);
    res.status(500).json({ error: "Erro ao conectar no banco" });
  }

});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
