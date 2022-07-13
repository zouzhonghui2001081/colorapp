import {FaStar} from "react-icons/fa";

export default function Star(props:{ selected:boolean, onSelect:() =>void}) {
    return <FaStar color={props.selected ? "red" : "grey"} onClick={props.onSelect} />;
  }