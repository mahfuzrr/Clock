import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Content(props)
{
  return(
    <div id="fullBody">

        <div className="part">
          <h1>{props.day}</h1>
          <p>Day</p>
        </div>
        <span className="divider">:</span>

        <div className="part">
          <h1>{props.hour}</h1>
          <p>Hours</p>
        </div>

        <span className="divider">:</span>

        <div className="part">
          <h1>{props.minute}</h1>
          <p>Minutes</p>
        </div>

        <span className="divider">:</span>

        <div className="part">
          <h1>{props.second}</h1>
          <p>Seconds</p>
        </div>
      </div>
  );
}


setInterval(()=>{
  const dateContent = {
    fullDate: new Date(),
    day: function(){
      const d = this.fullDate.getDay();
      const allDay = ["Sun", "Mon", "TUE", "WED", "THU", "FRI", "SAT"];
      return allDay[d];
    },
    hour: function(){
      const h = this.fullDate.getHours();
      return h;
    },
  
    minute: function(){
      return this.fullDate.getMinutes();
    },
  
    second: function(){
      return this.fullDate.getSeconds();
    }
  }
  ReactDOM.render(<Content day={dateContent.day()} hour={dateContent.hour()} minute={dateContent.minute()} second={dateContent.second()}/>, document.getElementById('upper'))
}, 1000)