import React from "react";

class Content extends React.Component{

    render(){
      return(
        <div id="fullBody">
  
          <div className="part">
            <h1>{this.props.day}</h1>
            <p>Day</p>
          </div>
          <span className="divider">:</span>
  
          <div className="part">
            <h1>{this.props.hour}</h1>
            <p>Hours</p>
          </div>
  
          <span className="divider">:</span>
  
          <div className="part">
            <h1>{this.props.minute}</h1>
            <p>Minutes</p>
          </div>
  
          <span className="divider">:</span>
  
          <div className="part">
            <h1>{this.props.second}</h1>
            <p>Seconds</p>
          </div>
        </div>
      );
    }
}

export default Content;