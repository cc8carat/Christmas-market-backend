import pg from 'pg';

const { Pool } = pg;

const connectionString = 'postgres://gvphlvvm:KpAb1SUGaAIYUkC45Mq5ZQfBi7A_dnCw@ella.db.elephantsql.com/gvphlvvm'
const pool = new Pool({ connectionString });

export default pool;



// postgres://awpbgyih:06RCQJlz84n8y4gX42KGK_HVSptRmZkZ@tai.db.elephantsql.com/awpbgyih

 