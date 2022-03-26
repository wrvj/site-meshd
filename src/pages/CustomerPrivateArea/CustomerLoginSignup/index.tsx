import React, { useEffect, useState } from "react";
import { Form } from "@unform/web";
import { useRef } from "react";
import { FormHandles, SubmitHandler, Scope } from "@unform/core";
import * as Yup from "yup";
import Input from "../../../unform/Input";
import Card from "@mui/material/Card";
import { useAuth } from "../../../contexts/AuthContext";
import { LoginSignupContainer } from "./styles";
import { Button, Link } from "@mui/material";
import { FirebaseError } from "firebase/app";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";

export default function CustomerLoginSignup() {
  const [option, setOption] = useState<"login" | "signup">("login");
  const { logout, currentUser }: any = useAuth();
  const [message, setMessage] = useState<{
    severity: "error" | "info" | "success";
    message: string;
  }>({ severity: "info", message: "" });

  useEffect(() => {
    //log the current user info
    console.log(currentUser);
  }, []);

  return (
    <LoginSignupContainer>
      <div className="video-container">
        <video poster="/images/VideoFrame01.jpg" autoPlay muted loop>
          <source src="/videos/hero_meshd_2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Card className="card-form">
        {option === "login" && (
          <CustomerLogin setOption={setOption} setMessage={setMessage} />
        )}
        {option === "signup" && (
          <CustomerSignup setOption={setOption} setMessage={setMessage} />
        )}
        {message.message && (
          <Alert severity={message.severity} sx={{ marginTop: "1rem" }}>
            {message.message}
          </Alert>
        )}
      </Card>
    </LoginSignupContainer>
  );
}

function CustomerLogin({ setOption, setMessage }: any) {
  //onSubmit
  const formRef = useRef<FormHandles>(null);
  const { login }: any = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const Navigate = useNavigate();

  useEffect(() => {
    setMessage({ severity: "info", message: "" });
  }, []);

  const handleSubmit: SubmitHandler<any> = async (data, { reset }) => {
    setLoading(true);
    setMessage({ severity: "info", message: "Logging in..." });

    try {
      await formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Invalid email"),
        password: Yup.string().required("Password is required"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      await login(data.email, data.password);
      Navigate("/customer/dashboard");
    } catch (err) {
      setLoading(false);
      if (err instanceof Yup.ValidationError) {
        let errorMessages = {};

        err.inner.forEach((e) => {
          errorMessages = { ...errorMessages, [e.path!]: e.message };
        });

        formRef.current!.setErrors(errorMessages);
      } else if (err instanceof FirebaseError) {
        console.log(err.message);
        setMessage({ severity: "error", message: err.code });
      }
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input
          disabled={loading}
          name="email"
          label="Email"
          type="email"
          autoComplete="email"
          autoFill="off"
        />
        <Input
          disabled={loading}
          name="password"
          label="Password"
          type="password"
          autoComplete="password"
        />
        <Button type="submit">Login</Button>
      </Form>
      <Link className="link" onClick={() => setOption("signup")}>
        Need an account? Sign Up!
      </Link>
    </>
  );
}

function CustomerSignup({ setOption, setMessage }: any) {
  const formRef = useRef<FormHandles>(null);
  const { signup }: any = useAuth();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setMessage({ severity: "info", message: "" });
  }, []);

  const handleSubmit: SubmitHandler<any> = async (data, { reset }) => {
    setLoading(true);
    setMessage({ severity: "info", message: "Signing up..." });

    try {
      await formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required("Email is required")
          .email("Invalid email"),
        name: Yup.string().required("Name is required"),
        password: Yup.string().required("Password is required"),
        passwordConfirmation: Yup.string()
          .required("Password Confirmation is required")
          .oneOf([Yup.ref("password")], "Passwords must match"),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      await signup(data.email, data.password);
      setLoading(false);
      setOption("login");
    } catch (err) {
      setLoading(false);
      if (err instanceof Yup.ValidationError) {
        let errorMessages = {};

        err.inner.forEach((e) => {
          errorMessages = { ...errorMessages, [e.path!]: e.message };
        });

        formRef.current!.setErrors(errorMessages);
      } else if (err instanceof FirebaseError) {
        console.log(err.message);
        setMessage({ severity: "error", message: err.code });
      }
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Input name="email" label="Email" type="email" autoComplete="email" />
        <Input name="name" label="Full Name" autoComplete="name" />
        <Input
          name="password"
          label="Password"
          type="password"
          autoComplete="new-password"
        />
        <Input
          name="passwordConfirmation"
          label="Password Confirmation"
          type="password"
          autoComplete="new-password"
        />
        <Button type="submit">Sign Up</Button>
      </Form>
      <Link className="link" onClick={() => setOption("login")}>
        Already have an account? Log in!
      </Link>
    </>
  );
}
