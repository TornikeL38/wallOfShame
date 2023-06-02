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
                <h6>Name</h6>
                <p>Excuse</p>
                <span><p>count</p></span>
            </div>
            <div className="shame-wrapper">
                <h4 className="full-name">Brad Simons</h4>
                <span className="spanForTextWidth"><p>Remember when you were young you shone like the sun. Shine on you</p></span>
                <span className="spanForCount"><p>3</p></span>
                <span className="spanForButton"><button className="buttonForIncrease">Increase</button></span>
            </div>
        </div>
    )
}