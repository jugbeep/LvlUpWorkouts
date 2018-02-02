let DB = require('../models');

Db.sequelize.sync({force: true})
	.then(
		function(){
			process.exit();
		}
	);
