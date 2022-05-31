import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useMemo } from "react";

const FormElementContainer = ({ config, formik }) => {
  const builder = (individualConfig) => {
    switch (individualConfig.screenElement) {
      case "TextBox":
        return (
          <>
            <div>
              <InputLabel htmlFor="bootstrap-input">
                {individualConfig.label}
              </InputLabel>
              <TextField
                id={individualConfig.id}
                fullWidth
                placeholder={"Enter " + individualConfig.label}
                variant="outlined"
              />
            </div>
          </>
        );
      case "TextArea":
        return (
          <>
            <div>
              <InputLabel htmlFor="bootstrap-input">
                {individualConfig.label}
              </InputLabel>
              <TextField
                id={individualConfig.id}
                multiline
                fullWidth
                placeholder={"Enter " + individualConfig.label}
                variant="outlined"
                rows={2}
              />
            </div>
          </>
        );
      case "DropDown":
        return (
          <>
            <InputLabel htmlFor="bootstrap-input">
              {individualConfig.label}
            </InputLabel>
            <Select
              // onChange={}
              fullWidth
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem key={"first"} disabled>
                <em>{individualConfig.label}</em>
              </MenuItem>
              {individualConfig.option.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.value}>
                    {item.label}
                  </MenuItem>
                );
              })}
            </Select>
          </>
        );
      case "CheckBox":
        return (
          <>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">{individualConfig.label}</FormLabel>
              <FormGroup aria-label="position" row>
                {individualConfig.option.map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      value="end"
                      control={
                        <Checkbox
                          checked={
                            item.default_checked === "Yes" ? true : false
                          }
                        />
                      }
                      label={item.label}
                      labelPlacement="end"
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </>
        );
      case "Radio":
        let selectedRadioValue = "";
        let selectedRadioItem = individualConfig.option.filter(
          (item) => item.default_checked === "Yes"
        );
        if (selectedRadioItem[0])
          selectedRadioValue = selectedRadioItem[0].value;
        return (
          <>
            <FormControl>
              <FormLabel>{individualConfig.label}</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={selectedRadioValue}
              >
                {individualConfig.option.map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
          </>
        );
      default:
        return <div>Unsupported field</div>;
    }
  };

  return (
    <>
      {config.map((c) => {
        return builder(c);
      })}
    </>
  );
};

export default FormElementContainer;
