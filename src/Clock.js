import React from 'react';
import './index.css';
import Content from './component/Content';

export default class Clock extends React.Component {
  state = { date: new Date(), locale: 'en-US' };

  componentDidMount() {
    setInterval(()=>this.setTime(), 1000);
  }

  handleTime = (locale) =>{

    this.setState({
      locale: locale,
    })
  }

  setTime() {
    this.setState({
      date: new Date(),
    });
  }

  giveDay(d){
    const allDay = ["Sun", "Mon", "TUE", "WED", "THU", "FRI", "SAT"];
    return allDay[d];
  }

  giveDayBn(d){
    const allDay = ["রবি", "সোম" , "মঙ্গল", "বুধ" , "বৃহঃ", "শুক্র"];
    return allDay[d];
  }

  handleClick = () =>{
    const{date, locale} = this.state;

      if(locale === 'en-US')
      {
        this.handleTime('bn-BD');
      }
      else this.handleTime('en-US');
  }

  render() {
    
    const {date, locale} = this.state;
    const d = date.toLocaleTimeString(locale, {hour: '2-digit'});
    const hour = d.replace(" AM", "").replace(" PM", "");
    const a = date.getDay();
    var day;
    if(locale === 'en-US')day = this.giveDay(a);
    else day = this.giveDayBn(a);
    
    const minute = date.toLocaleTimeString(locale, {minute: '2-digit'});
    const second = date.toLocaleTimeString(locale, {second: '2-digit'});

    return (
        <>
         <button id="lan" onClick={this.handleClick}>{locale==='en-US' ? 'BN' : 'EN'}</button>
        <Content day={day} hour={hour} minute={minute} second={second} />
        </>
    );
  }
}