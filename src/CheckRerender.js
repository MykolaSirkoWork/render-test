import React, {useState} from "react";


export function useForceUpdate(){
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);

}

export const Updates = ({ updates }) => {
    const forceUpdate = useForceUpdate();
    let eventUpdates = React.useRef(2);



    return (
        <h4 className="update">
            <button onClick={forceUpdate}>Rerender</button>
            Paints
            <br />
            {eventUpdates.current++}
        </h4>
    )
}

