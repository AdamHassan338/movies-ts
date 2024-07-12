import { get } from "http";
import { useState } from "react";

interface MyButtonProps {
    text : string | number;
    onClick? : () => void;
}

const MyButton : React.FC<MyButtonProps> = (props) =>{
    const [toggled, setToggled] = useState<boolean>(false);

    async function onClick () : Promise<void>  {
        setToggled(!toggled);
        if(props.onClick)
            props.onClick();
        //let responce  = await fetch("/api/films?categoryName=DocumentarY");
       // console.log(responce);
    }

    return  <button onClick={onClick}> {props.text}</button>;
};

{/* <ActorCard firstName={'adam'} lastName={'hassan'} ></ActorCard></> */}

export default MyButton;