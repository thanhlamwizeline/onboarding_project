const { Helper } = require('codeceptjs');
const sql = require('mssql');
require('dotenv').config();

class LegacyDb extends Helper {
  async getJanusPersonRecord() {
    const config = {
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      server: process.env.DB_SERVER,
      port: parseInt(process.env.DB_PORT, 10),
      database: process.env.DB_DATABASE,
      options: {
        encrypt: false,
        trustServerCertificate: true,
        instanceName: process.env.DB_INSTANCE
      }
    };

    try {
      const pool = await sql.connect(config);
      const result = await pool.request().query(`
        SELECT TOP 1 * 
        FROM tblPerson WITH (NOLOCK) 
        WHERE Source IN ('bismarcktribune', 'chippewa', 'beatricedailysun', 'columbustelegram', 'fremonttribune')
      `);
      return result.recordset[0];
    } catch (err) {
      console.error('DB Error:', err);
      throw err;
    }
  }
}

module.exports = LegacyDb;
