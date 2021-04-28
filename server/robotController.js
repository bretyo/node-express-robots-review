let robot_data = require('../src/robot_data.json')

module.exports = {
    getRobots: (req,res) => {
        res.status(200).send(robot_data)
    },

    getRobot: (req, res) => {
        const robotIndex= robot_data.findIndex(robot => {
           return robot.id === +req.params.id
        })
        console.log(robotIndex)
        if(!robotIndex) return res.status(500).send('couldn\'t find robot');
        res.status(200).send(robot_data[robotIndex])
    },

    deleteRobot: (req, res) =>{
        const {id} = req.params;

        robot_data = robot_data.filter(robotObj=>robotObj.id !== +id)

        res.status(200).send(robot_data)
    }
}

