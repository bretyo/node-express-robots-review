import {Component} from 'react'
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      robotArr: []
    }
  }

  componentDidMount(){
    axios.get('/api/robot_data')
    .then(res => this.setState({ robotArr: res.data}))
    .catch(err => console.log(err))
  }

  handleDelete = (id) =>{
    axios.delete(`/api/robot_data/${id}`)
    .then(res => this.setState({ robotArr: res.data}))
    .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
        <div>ROBOTS!!!</div>
        {
          this.state.robotArr.map(robotObj=>{
            return(
              <div key={robotObj.id}>
                <h2>{robotObj.name}</h2>
                <img src={robotObj.image} alt = {robotObj.name} />
                <br/>
                <button onClick={()=> this.handleDelete(robotObj.id)}>Delete</button>
              </div>
            )
          })
        }
      </div>
    );

  }
}

export default App;
