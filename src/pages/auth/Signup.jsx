import { useFormik } from "formik";
import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { AuthContext } from "../../AuthContext";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      username: "",
      email: "",
      password: "",
      ConfirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required(),
      email: Yup.string().required().email(),
      password: Yup.string().required().min(6),
      ConfirmPassword: Yup.string()
        .required()
        .min(6)
        .oneOf([Yup.ref("password")], "not equal to password"),
    }),
    onSubmit: (vals) => {
      console.log("vals", vals);
      if (formik.isValid) {
        try {
          signup({ email: vals.email, password: vals.password });
        } catch (error) {
          alert(error.message);
        }
      }
    },
  });
  console.log("formik".formik);

  return (
    <>
      <div className="w-50">
        <Form
          className="p-4 bg-light form-login"
          onSubmit={formik.handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label> UserName </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.username && formik.touched.username}
            />
            {formik.errors.email && formik.touched.email ? (
              <Form.Text className="text-muted">
                {formik.errors.username}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.email && formik.touched.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <Form.Text className="text-muted">
                {formik.errors.email}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.password && formik.touched.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <Form.Text className="text-muted">
                {formik.errors.password}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label> ConfirmPassword</Form.Label>
            <Form.Control
              type="password"
              placeholder="ConfirmPassword"
              name="ConfirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={
                formik.errors.ConfirmPassword && formik.touched.ConfirmPassword
              }
            />
            {formik.errors.ConfirmPassword && formik.touched.ConfirmPassword ? (
              <Form.Text className="text-muted">
                {formik.errors.ConfirmPassword}
              </Form.Text>
            ) : null}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Agree" />
          </Form.Group>
          <button className="btn btn-outline-success text-center w-100 p-2 ">
            SingUp
          </button>
        </Form>
      </div>
      ;
    </>
  );
};

export default Signup;
