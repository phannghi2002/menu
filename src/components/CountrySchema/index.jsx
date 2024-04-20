import * as Yup from "yup";

export const CountrySchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  code: Yup.string().trim().max(50, "Too Long!").required("Required"),
  description: Yup.string()
    .trim()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
