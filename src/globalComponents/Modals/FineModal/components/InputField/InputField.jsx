import { TextField } from "@mui/material";
import moment from "moment";
import { useState } from "react";

export default function InputField({
  fineModalData,
  inputName,
  updateModalState,
}) {
  const [shrink, setShrink] = useState(false);
  const inputData = [
    {
      inputName: "comment",
      label: "Rəy",
      type: "string",
      marginBottom: "0",
      inputValue: fineModalData[inputName] || "",
      charLength: fineModalData[inputName] ? fineModalData[inputName].length : 0
    },
  ];

  return (
    <>
      <TextField
        sx={{
          "& input": {
            fontSize: "12px",
            paddingRight: inputData.find((item) => item.inputName === inputName)
              ?.paddingRight,
          },
          marginTop: inputData.find((item) => item.inputName === inputName)
            .marginTop,
          marginBottom: inputData.find((item) => item.inputName === inputName)
            ?.marginBottom,
        }}
        InputLabelProps={{
          shrink:
            inputName === "date"
              ? true
              : inputData.find((item) => item.inputName === inputName)
                  .inputValue
              ? true
              : shrink,
          style: {
            fontSize: "12px",
            color: "#3F3F3F",
            marginBottom: inputData.find((item) => item.inputName === inputName)
              .marginBottom,
          },
        }}
        fullWidth
        id={inputName}
        name={inputName}
        type={inputData.find((item) => item.inputName === inputName).type}
        label={inputData.find((item) => item.inputName === inputName).label}
        value={
          inputData.find((item) => item.inputName === inputName)?.inputValue
        }
        onChange={(e) => {
          if(inputName === "comment") {
            if(e.target.value.length <= 250) {
              updateModalState(inputName, e.target.value);
            } else {
              updateModalState(inputName, e.target.value.slice(0, 250));
            }
          } else {
            updateModalState(inputName, e.target.value);
          }
        }}
        onBlur={(e) => {
          setShrink(!!e.target.value);
        }}
        onFocus={() => setShrink(true)}
      />

      {inputName === "comment" &&  <div className="char-length">{inputData.find((item) => item.inputName === inputName)?.charLength} / 250</div>}
    </>
  );
}
