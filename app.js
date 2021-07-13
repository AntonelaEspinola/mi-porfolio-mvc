const express = require('express');
const app = express();
const port = 3030;
app.use(express.static('public'));
const indexRouters = require('./routers/index');
const aboutRouter = require('./routers/about');


//enrutamiento
//index
app.use('/', indexRouters);
app.use('/about', aboutRouter);



/*servidor*/
 app.listen(port, () => console.log(`Server running in http://localhost:${port}`));
