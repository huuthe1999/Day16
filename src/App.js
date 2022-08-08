import React from "react";

const Input = ({ onChange, type }) => {
  return <input onChange={onChange} type={type} />;
};

const inputWithType = (CompParam, type = "text") => {
  const types = [
    "date",
    "number",
    "tel",
    "button",
    "checkbox",
    "radio",
    "file",
    "password"
  ];

  const typeInput = types.find((typeItem) => typeItem === type);
  return (props) => {
    return <CompParam {...props} type={typeInput} />;
  };
};

const NewInput = inputWithType(Input);
const DateInput = inputWithType(Input, "date");
const NumberInput = inputWithType(Input, "number");
const TelInput = inputWithType(Input, "tel");
const ButtonInput = inputWithType(Input, "button");
const CheckBoxInput = inputWithType(Input, "checkbox");
const RadioInput = inputWithType(Input, "radio");
const FileInput = inputWithType(Input, "file");
const PasswordInput = inputWithType(Input, "password");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NewInput onChange={(e) => console.log(e.target.value)} />
        <DateInput onChange={(e) => console.log(e.target.value)} />
        <NumberInput onChange={(e) => console.log(e.target.value)} />
        <TelInput onChange={(e) => console.log(e.target.value)} />
        <ButtonInput onChange={(e) => console.log(e.target.value)} />
        <CheckBoxInput onChange={(e) => console.log(e.target.value)} />
        <RadioInput onChange={(e) => console.log(e.target.value)} />
        <FileInput onChange={(e) => console.log(e.target.value)} />
        <PasswordInput onChange={(e) => console.log(e.target.value)} />
      </div>
    );
  }
}

export default App;
