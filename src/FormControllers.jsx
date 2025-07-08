import { updateData } from "./listeners"

function InputWithLabel({id,label,hr=false,className,stateFunc}){
    return(
        <>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} name={id} className={className} onChange={(event)=>{updateData(event,id,stateFunc)}}/>
            {hr && <hr />}
        </>
    )
}

function TextAreaWithLabel({id,label,hr=false,stateFunc}){
    return(
        <>
            <label htmlFor={id}>{label}</label>,
            <textarea id={id} name={id} onChange={(event)=>{updateData(event,id,stateFunc)}}></textarea>
            {hr && <hr />}
        </>
    )
}

export {InputWithLabel, TextAreaWithLabel}