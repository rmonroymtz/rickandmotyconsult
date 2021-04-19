import {useRef, useEffect} from 'react';
import M from 'materialize-css';
export const Input = (props) => (
    <div className="input-field col s6">
        <label htmlFor={props.id}>{props?.name?.toUpperCase()} </label>
        <input type="text" {...props}/>
    </div>
)

export const Select = (props) => {
    let selectRef = useRef();
    useEffect(()=>{
        M.FormSelect.init(selectRef)
    },[])

    return(
        <div className="input-field col s6">
            <select {...props} ref={select => selectRef = select}>
                {props.children}
            </select>
            <label htmlFor={props.id}>{props?.name.toUpperCase()}</label>
        </div>
    )
}