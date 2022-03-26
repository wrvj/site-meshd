import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function SoftwareSelect() {
  return (
    <FormControl>
      <h2 className="form-section-label">
        Which software do you want your model to be made?
      </h2>
      <RadioGroup
        aria-labelledby="software-select-radio-buttons-group-label"
        defaultValue="blender"
        name="radio-buttons-group"
        className="radio-group-grid"
      >
        <FormControlLabel
          value="blender"
          control={<Radio />}
          label="Blender 3d"
        />
        <FormControlLabel value="3dsmax" control={<Radio />} label="3ds Max" />
        <FormControlLabel
          value="clo"
          control={<Radio />}
          label="Clo/Marvelous Designer"
        />
        <FormControlLabel value="maya" control={<Radio />} label="Maya" />
        <FormControlLabel value="sPainter" control={<Radio />} label="Substance Painter" />
        <FormControlLabel
          value="fusion"
          control={<Radio />}
          label="Fusion 360"
        />
        <FormControlLabel
          value="sketchup"
          control={<Radio />}
          label="Sketchup"
        />
        <FormControlLabel value="other" control={<Radio />} label="Other (specify in the description)" />
        <FormControlLabel
          value="non-specific"
          control={<Radio />}
          label="Not software-specific"
        />
      </RadioGroup>
    </FormControl>
  );
}
