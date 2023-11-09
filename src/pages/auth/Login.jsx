import { useFormik } from "formik";
import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";
import { AuthContext } from "../../AuthContext";
import { Link } from "react-router-dom";
const Login = () => {
  const { login } = useContext(AuthContext);
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required().email(),
      password: Yup.string().required().min(6),
    }),
    onSubmit: (vals) => {
      console.log("vals", vals);
      if (formik.isValid) {
        try {
          login({ email: vals.email, password: vals.password });
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

          <Link
            to="/"
            className="btn btn-outline-primary text-center w-100 p-2 "
          >
            Login
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Login;
