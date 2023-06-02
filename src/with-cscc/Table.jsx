import "./style.scss"
import Input from "./input"

export default function Table(){
    return(
        <div className="main-wrapper">
            <div className="flex">
                <div>
                    <h3>Wall of shame</h3>
                    <p>5 members</p>
                </div>
                <div className="flex input-conteiner">
                    <Input type ='name'/>
                    <Input type ='excuse'/>
                    <button>Create</button>
                </div>
            </div>
            <div className="info-wrapper"> 
                <h5>Name</h5>
                <p>Excuse</p>
                <span><p>count</p></span>
            </div>
        </div>
    )
}