import './MultiSwitch.css'

function MultiButton(props)  {
  const numbers = props.numbers;
  return numbers.map((val) => {    
      return <button className="multi_button">{ val }</button>   
  }   
)};

export default MultiButton;



