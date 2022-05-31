import "./App.css";
import { useFormik } from "formik";
import schemas from "./Schema_JSON/schema.json";
import FormElementContainer from "./components/FormElementContainer";
import * as yup from "yup";
import { Button, InputLabel } from "@mui/material";

function App() {
  const signupSchema = yup.object().shape({
    name: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: signupSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <InputLabel htmlFor="bootstrap-input" color="info">
        {schemas.myForm.formLabel}
      </InputLabel>
      <FormElementContainer
        config={schemas.myForm.fields}
        formTitle={schemas.myForm.formLabel}
        formik={formik}
      />     
      <div>
        <Button variant="contained" type="submit">Submit</Button>
      </div>
    </form>
  );
}

export default App;
