const express = require('express');
const app = express();

const robotCtrl = require('./robotController')

// * ENDPOINTS
app.get('/api/robot_data', robotCtrl.getRobots)
app.get('/api/robot_data/:id', robotCtrl.getRobot)
app.delete('/api/robot_data/:id', robotCtrl.deleteRobot)

const port = 3005;

app.listen(port, ()=>console.log(`The server is now listening to port ${port}`));