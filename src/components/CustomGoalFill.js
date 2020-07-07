import React from "react";
import ReactDOM from "react-dom";
import { TextField } from "@material-ui/core";

export default function CustomGoalFill() {
  const CHARACTER_LIMIT = 50;
  const [values, setValues] = React.useState({
    name: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <div>
      <TextField
        label="Type your custom goal here"
        inputProps={{
          maxlength: CHARACTER_LIMIT,
        }}
        value={values.name}
        helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
        onChange={handleChange("name")}
        variant="filled"
        fullWidth
        multiline
        rows={4}
      />
    </div>
  );
}
