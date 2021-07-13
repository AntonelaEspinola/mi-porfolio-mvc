const express = require('express');
const app = express();
const port = 3030;
const indexRouters = require('./routers/index')

//enrutamiento
//index
app.use('/', indexRouters);
/*servidor*/
 app.listen(port, () => console.log(`Server running in http://localhost:${port}`));
