
import './MultiSwitch.css'
import MultiButton from './MultiButton'

const button = [2, 3, 4, 5];
const multibutton = ["1GB","6GB","15GB","40GB","60GB","100GB"];


function MultiSwitchComponent()  {
 return (
  <div>
    <div className="multiswitch_component">
        <div className="title_one">How many SIMS do you need?</div>
        <div className="description">Each extra sim has a 20% discount</div>
        <MultiButton numbers={button} />
    </div>
    <div className="title_two">
      <h3>How much data would you like per SIM?</h3>
      <div className="button"> 
          <MultiButton numbers={multibutton} />
      </div>
    </div>
  </div>  
 )}

 export default MultiSwitchComponent;

