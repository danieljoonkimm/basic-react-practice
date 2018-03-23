import React, { Component } from 'react';
import Name from '../UserData/Name';
import Birthday from '../UserData/Birthday';
import Hobbies from '../UserData/Hobbies';
class Profile extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      'name': this.props.users.name, // FIX ME
      'birthday': this.props.users.birthday, // FIX ME
      'hobbies': this.props.users.hobbies // FIX ME
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div>
        <h4>Welcome to my Profile!</h4><br/><br/>
        <input name='name' type='text' defaultValue='Change My Name' onChange={this.onChangeHandler}></input>
        <Name name={this.state.name}/>
        <br/><br/>
        -------------------------------------------------<br/><br/>
        <Birthday birthday={this.state.birthday}/>
        <br/><br/>
        -------------------------------------------------<br/><br/>
        <Hobbies hobbies={this.state.hobbies}/>
        <br/><br/>
      </div>
    )
  }

}

export default Profile;












/* ----------------------
-------------------------
SOLUTION BEGINS:
*/

// import React, { Component } from 'react';
// import Name from '../UserData/Name';
// import Birthday from '../UserData/Birthday';
// import Hobbies from '../UserData/Hobbies';
// class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       'name': this.props.userInfo.name,
//       'birthday': this.props.userInfo.birthday,
//       'hobbies': this.props.userInfo.hobbies
//     }
//     this.onChangeHandler = this.onChangeHandler.bind(this);
//   }

//   onChangeHandler(e) {
//     this.setState({[e.target.name]: e.target.value});
//   }

//   render() {
//     return (
//       <div>
//         <h4>Welcome to my Profile!</h4><br/><br/>
//         <input name='name' type='text' defaultValue='Change My Name' onChange={this.onChangeHandler}></input>
//         <Name name={this.state.name}/>
//         <br/><br/>
//         -------------------------------------------------<br/><br/>
//         <Birthday birthday={this.state.birthday}/>
//         <br/><br/>
//         -------------------------------------------------<br/><br/>
//         <Hobbies hobbies={this.state.hobbies}/>
//         <br/><br/>
//       </div>
//     )
//   }
// }

// export default Profile;

/*
SOLUTION ENDS:
-------------------------
-----------------------*/