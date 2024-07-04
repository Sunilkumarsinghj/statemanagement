import logo from './logo.svg';
import './App.css';
import './index2.css'
import BTNmodule from './button.module.css';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import { questions  } from './questions';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function App() {
 let[status,setStatus]=useState(false);
 let[pstatus,setPstatus]=useState(false)
 let[manuStatus,setManustatus]=useState(false);
 let[modalShow,setModalShow]=useState(false);
 let[showAns,setShowAns]=useState(questions[0].id)
 let notificationType=()=>{
  //NotificationManager.info("info message");
 // NotificationManager.success("successfully done",'code working'); 
 //NotificationManager.warning("warning","not in use yet");
 NotificationManager.error("error",'code not working');
}
  return (
    <div className="App">
      <NotificationContainer/>
      <button className={BTNmodule.warning} onClick={()=>notificationType()}>click</button> 
       
      <button className='en' onClick={()=>setModalShow(true)}>Enquiry now</button>
      <div onClick={()=>setModalShow(false)}  className={`modalOverLay ${(modalShow)?'modalShow':''}`}></div>
      <div className={`modalDiv ${(modalShow)?'modalSee':''}`}>
        <h3>enquiry now <span onClick={()=>setModalShow(false)}>&times;</span></h3></div>
      <button className='micon' onClick={()=>setManustatus(!manuStatus)}>
        {(manuStatus)?<span>&times;</span>:<span>&#9776;</span>}
        </button>
      <div className={`manu ${(manuStatus)?'activeManu':''}`}>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>course</li>
          <li>gellary</li>
          <li>contact us</li>
        </ul>
      </div>
    <input type={(pstatus)?'text':'password'} className={BTNmodule.inputt}/>
    <button className={BTNmodule.warning} onClick={()=>setPstatus(!pstatus)}>{(pstatus)?'hide':'show'}</button><br/>
      <button className='border' onClick={()=>setStatus(!status)}>
        {(status) ?'HIDE !':'SHOW!'}
      </button>
      {(status)
      ?
      <p className='para'>welocome to react app !</p>
       :
       ''}
       <br/>
        <button className={BTNmodule.error}>module BTN</button>
        <div>
        {/*
        <h1>Frequently Asked Questions(FAQs)</h1>
        <div className='faqouter'>
         {questions.map((faqItems,i)=>{
          return(
            <div className='faqItems'>
            <h2 onClick={()=>setShowAns(faqItems.id)}>{faqItems.question}</h2>
             <p className={(showAns==faqItems.id)?'activeAns':''}>{faqItems.answer}</p>
             </div>
  
          )
         })}                   
        </div>*/}
       </div> 
    </div>
    
  );
}

export default App;
