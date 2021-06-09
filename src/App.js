import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

import Schema from "./utils/schma";

function App() {
  const formikProps = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      dob: null,
    },
    validationSchema: Schema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="app">
      <Container>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form onSubmit={formikProps.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formikProps.values.name}
              onChange={formikProps.handleChange}
              error={
                formikProps.touched.name && Boolean(formikProps.errors.name)
              }
              helperText={formikProps.touched.name && formikProps.errors.name}
            />
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formikProps.values.email}
              onChange={formikProps.handleChange}
              error={
                formikProps.touched.email && Boolean(formikProps.errors.email)
              }
              helperText={formikProps.touched.email && formikProps.errors.email}
            />
            <KeyboardDatePicker
              fullWidth
              id="dob"
              name="dob"
              label="Dae of Birth"
              disableToolbar
              variant="inline"
              id="date-picker-inline"
              value={formikProps.values.dob}
              onChange={(date) => {
                formikProps.setFieldValue("dob", date);
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              error={formikProps.touched.dob && Boolean(formikProps.errors.dob)}
              helperText={formikProps.touched.dob && formikProps.errors.dob}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formikProps.values.password}
              onChange={formikProps.handleChange}
              error={
                formikProps.touched.password &&
                Boolean(formikProps.errors.password)
              }
              helperText={
                formikProps.touched.password && formikProps.errors.password
              }
            />
            <TextField
              fullWidth
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formikProps.values.confirmPassword}
              onChange={formikProps.handleChange}
              error={
                formikProps.touched.confirmPassword &&
                Boolean(formikProps.errors.confirmPassword)
              }
              helperText={
                formikProps.touched.confirmPassword &&
                formikProps.errors.confirmPassword
              }
            />
            <Box marginTop={2}>
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Submit
              </Button>
            </Box>
          </form>
        </MuiPickersUtilsProvider>
      </Container>
    </div>
  );
}

export default App;
