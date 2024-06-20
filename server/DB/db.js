import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASS, {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize