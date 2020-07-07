 import React, { Component } from 'react';
 import style from './stylesheet.module.css';
 
 class profile extends Component {
     constructor(props){
         super(props);
         const person =  [{
             timestamp:new Date().getTime(),
             user:{
                 id:1,
                 name:'Ankit',
                 avatar:"profile.jpg"
             },
             comments:[{from:'arai',text:'hi'}]
         },
        ]
     }
     
     render() {
         return (
             <div>
                 <h1>Ankit Nidhi Shroff</h1>
         <div>{person }</div>
                 <div image={style.error}>hi</div>
             </div>
         );
     }
 }
 
 export default profile;