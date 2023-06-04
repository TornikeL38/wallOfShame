import "./style.scss"

const inputData = {
    name: {
       text : 'Name'
    },
    excuse:{
        text : 'Excuse'
    },
}


export default function Input(props) {
  const { type, onChange } = props;
  const item = inputData[type];

  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <>
      <input className="input" type="text" placeholder={item.text} onChange={handleInputChange} />
    </>
  );
}
