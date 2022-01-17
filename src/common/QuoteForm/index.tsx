import React from "react";
import { QuoteFormContainer } from "./styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FormHelperText, TextField } from "@mui/material";

export default function QuoteForm() {
  const [serviceType, setServiceType] = React.useState("");
  const handleChange = (event: any): void => {
    setServiceType(event.target.value as string);
    console.log(event.target.value);
  };
  return (
    <QuoteFormContainer>
      <div className="form-container" id="form-quote">
        <h1>Think we got what you need?</h1>
        <h2>Tell us a bit about your project and we will send you an estimate!</h2>

        <div style={{ height: "60px" }}></div>

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <InputLabel id="quote-form-application-label">Application</InputLabel>
          <Select
            labelId="dquote-form-application-label"
            value={serviceType}
            onChange={handleChange}
          >
            <MenuItem value="notsure">
              <em>Not sure</em>
            </MenuItem>
            <MenuItem value={"product"}>Product</MenuItem>
            <MenuItem value={"archviz"}>Architeture</MenuItem>
            <MenuItem value={"games"}>Games</MenuItem>
            <MenuItem value={"ar"}>AR/VR</MenuItem>
            <MenuItem value={"other"}>Other</MenuItem>
          </Select>
          <FormHelperText sx={{m: 1}}>
            What is the model going to be used for?
          </FormHelperText>
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <TextField
            id="quote-form-quantity-input"
            label="Quantity"
            variant="filled"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormHelperText sx={{m: 1}}>How many models do you need?</FormHelperText>
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <TextField
            id="quote-form-description-input"
            label="Description"
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            multiline
            rows={3}
          />
          <FormHelperText sx={{m: 1}}>Tell us more about your project!</FormHelperText>
        </FormControl>


        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <TextField
            id="quote-form-email-input"
            label="Email"
            variant="filled"
            type="email"
            required
          />
          <FormHelperText sx={{m: 1}}>Your or your company's email.</FormHelperText>
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <TextField
            id="quote-form-name-input"
            label="Name"
            variant="filled"
            required
          />
          <FormHelperText sx={{m: 1}}>Your or your company's name.</FormHelperText>
        </FormControl>
      </div>
    </QuoteFormContainer>
  );
}
