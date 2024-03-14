import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import "./PriceRangeSlider.css";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider() {
  const [minValue, setMinValue] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(100);

  const handleMinInputChange = (event) => {
    setMinValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleMaxInputChange = (event) => {
    setMaxValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleMinBlur = () => {
    if (minValue < 0) {
      setMinValue(0);
    } else if (minValue > maxValue) {
      setMinValue(maxValue);
    }
  };

  const handleMaxBlur = () => {
    if (maxValue < minValue) {
      setMaxValue(minValue);
    } else if (maxValue > 100) {
      setMaxValue(100);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setMinValue(newValue[0]);
    setMaxValue(newValue[1]);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" gutterBottom>
        Population
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} className="inputs">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Input
              value={minValue}
              size="small"
              onChange={handleMinInputChange}
              onBlur={handleMinBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: maxValue,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
            <Input
              value={maxValue}
              size="small"
              onChange={handleMaxInputChange}
              onBlur={handleMaxBlur}
              inputProps={{
                step: 10,
                min: minValue,
                max: 100,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Slider
            value={[minValue, maxValue]}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
