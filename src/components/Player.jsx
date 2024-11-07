import { useState , useRef } from "react";


export default function Player() {
  const player = useRef();
  const [useName,setUseName] = useState(null);
  // const [submitted,setSubmitted]=useState(false)
  // function handleChange(e){
  //   setSubmitted(false)
  //   setUseName(e.target.value);
  // }
  function handleClick(){
    // setSubmitted(true);
    // console.log(player.current.value);
    setUseName(player.current.value);
    player.current.value=' '
  }
  return (
    <section id="player">
      <h2>Welcome {useName ?? 'unknown entity' }</h2>
      <p>
        <input ref={player} type="text"/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
