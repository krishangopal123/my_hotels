import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchUsers, fetchUsersByGender} from '../redux'
import MapContainer from './MapContainer'
import {Map} from './MapContainer'
class OyoContainer extends Component{
  
  constructor(props){
    super(props)
    this.state={gender:'',flag:false,lat:0,lng:0}
    this.setGender=this.setGender.bind(this);
    this.ese=this.ese.bind(this)
    
    
  }
  setGender=event=>{
    this.setState({flag:false})
    this.state.gender=event.target.value;
    this.props.fetchUsersByGender(this.state.gender)
   

  }
  ese=name1=>{
    
    this.setState({flag:true,lat:name1.lat,lng:name1.lng})
    
    
    
  }
  componentDidMount(){
    this.props.fetchUsers()
  }
    render(){
      var arr=[]
      arr=this.props.userData
      //console.log(arr)
      
     
        return(
          
         <dev>
           {console.log(this.state.flag)}
           {this.state.flag?<MapContainer name={{lat:this.state.lat,lng:this.state.lng}}/>:null}
           <br />
           <br />

              {arr &&this.state.flag==false?arr.map(title=><dev>
                <a href={title} >
                <img src={title} onClick={()=>this.ese({lat:17.4343648,lng:78.3955874})} style={{"pointer-events": "all"}} ></img>
                </a>
                </dev>):null}
              <br />
              <br />
               <br />

               <dev onChange={this.setGender}>
                 <input type="radio" value="male" name="gender" /> Male <br />
                 <input type="radio" value="female" name="gender" />Female
               </dev>



              </dev>
 
        )
    }
}
const mapStateToProps = state => {
  //console.log(state)
    return {
      userData: state.users,
      
    }
    
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchUsers: ()=> dispatch(fetchUsers()),
      fetchUsersByGender:value1=>dispatch(fetchUsersByGender(value1))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OyoContainer)
