import React,{useState} from "react";

const Counter = (props) => {
	// console.log(props);
	// const [value, setValue] = useState(props.value); 
	const {value} = props;

	const formatValue = () => {
		return	value === 0 ? 'empty' : value
	};

	const getBadgeClasses = () => {
		let classes = "badge  m-2 ";
		classes+=value===0?"bg-warning":"bg-primary";
		return classes;
	}

	const getButtonClasses = () => {
		let classes = "btn btn-sm m-2 ";
		classes+=value===0?"btn-secondary":"btn-danger";
		return classes;
	}

	// const handleIncrement = () => {
	// 	// setValue((prevState) => prevState + 1)
	// }

	// const handleDecrement = () => {
	// 	if (value > 0) {
	// 		// setValue((prevState) => prevState - 1)
	// 	}
	// }

	return (
			<div>
				<span>{props.name}</span>
				<span  className= {getBadgeClasses()}>{formatValue()}</span>
				<button className="btn btn-primary btn-sm m-2" onClick={() => props.onHandleIncrement(props.id)}>+</button>
				<button className={getButtonClasses()} onClick={() => props.onHandleDecrement(props.id)} >-</button>
				<button className="btn btn-danger btn-sm m-2" onClick={ () => props.onDelete(props.id)}>Delete</button>
			</div>);
  };	

  export default Counter