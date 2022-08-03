import React from 'react';

import {
  NavLink,
  Link,
  Outlet
} from "react-router-dom";
import styles from './TwitterAds.module.css';

import{
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";

import axios from 'axios'

// export default class Saved extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       body: "",
//     };

//     this.handleSaveItemPressed = this.handleSaveItemPressed.bind(this);
//   }

//   handleSave = (e) =>{
//     e.preventDefault()
//     axios.post('http://localhost:8000/frontend/api/', this.state)
//     .then(response=>{
//       console.log(response)
//     })
//   }

//   handleSaveItem() {
//     const requestOptions = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         save_item: this.state.body,
//       }),
//     };
//     fetch("/api/create-save", requestOptions)
//       .then((response) => response.json())
//       .then((data) => this.props.history.push("/room/" + data.code));
//   }

//   componentDidMount(){
//     axios.get('http://localhost:8000/frontend/api/')
//     .then(response=>{
//       this.setState({
//         saved_items:response.data
//       })
//       console.log(response.data)
//     })
//   }

//   componentDidMount(){
//       this.refreshList();
//   }
//   refreshList(){
//     fetch('http://localhost:8000/frontend/api/')
//     .then(response=> response.json())
//     .then(data=>{
//       this.setState({saved_items:data});
//     }
//     );
//   }


//   // onClick={()}=>this.deleteSavedItem(saveid.SavedID)
//   deleteSavedItem(saveid)
//   {
//     if(window,confirm('are you sure?'))
//     {
//       fetch('http://localhost:8000/frontend/api/'+ saveid,{
//         method: 'DELETE',
//         header: {'Accept':'application/json',
//         "Content-Type": "application/json"
//       }

//       })
//     }
//   }

//  render(){
//   const{saved_items} = this.state
//   return(
//     <div>
//       <h1> List of posts </h1>
//       {
//        saved_items.maps(saved_items => <div key={saved_items.id}>{saved_items.body}</div>)
//       }
//     </div>
//   )
//  }




// }

const TwitterAds = () => {
 

  return (
    <>
    {/* <Navbar bg="light" variant="dark">
    <Container>
    <Nav className="me-auto">
      <Nav.Link href="#"><h6 className={styles.linkText1}>Template  </h6> </Nav.Link>
    <Nav.Link href="#features"><h6 className={styles.linkText}>   Rewrite </h6> </Nav.Link>
      <Nav.Link href="#pricing"><h6 className={styles.linkText}>Power Mode </h6> </Nav.Link>
    </Nav>
    </Container>
  </Navbar> */}
  <div id="output" className={styles.test}  >
            <p id="content1"></p>
            <button id="list" className="btn  btn-primary" onclick="#">List</button> <nbsp/>
            <button id="whiteboard" className="btn  btn-secondary" onclick="#">Whiteboard</button> <br /><br/>

            <input name="mytext[]"  style={{width:"40vw" , height:"100px"}}/>
           <hr/> <input  name="mytext[]" style={{width:"40vw" , height:"100px"}}/>
            <hr/><input name="mytext[]" style={{width:"40vw" , height:"100px"}}/>

        </div>
      <div className="row">
         <div className="col-3">
        <div className={ styles.sidebar} > 


    <nav>
     
        < ul className = 'py-5' >
        < li className = 'py-4' > <NavLink className={({isActive}) => isActive ? 'text-white  bg-primary p-2 rounded':'text-black' } to = "/twitterads/saved" > Saved </NavLink></li >
          < li className = 'py-4' > <NavLink className={({isActive}) => isActive ? 'text-white  bg-primary p-2 rounded':'text-black' }   to = "/twitterads/primary" > Primary Text</NavLink></li >
          < li className = 'py-4' > <NavLink className={({isActive}) => isActive ? 'text-white  bg-primary p-2 rounded':'text-black' }  to = "/twitterads/headline" > Headline </NavLink></li >

       
        </ul>


      </nav>
    </div>
    <div className={styles.v1}></div>


      </div>
      <div className="col-6">
        <Outlet />
      </div>
     </div>





    </>
  );
};

export default TwitterAds;