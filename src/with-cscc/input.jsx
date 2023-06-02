import "./style.scss"

const inputData = {
    name: {
       text : 'Name'
    },
    excuse:{
        text : 'Excuse'
    },
}

export default function Input(props){
    const item = inputData[props.type];
    return(
        <>
            <input className="input" type="text" placeholder={item.text} /> 
        </>
    )
}