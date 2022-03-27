import { FormHandles } from "@unform/core";
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import { Form } from "@unform/web";
import Input from "../../../../unform/Input";
import { Button } from "@mui/material";
import * as Yup from "yup";
import Alert from "@mui/material/Alert";

export default function UserProfile() {
  const { currentUser, login, updatePassword }: any = useAuth();
  const formRef = useRef<FormHandles>(null);
  const [message, setMessage] = useState<{
    severity: "error" | "info" | "success";
    message: string;
  }>({ severity: "info", message: "" });

  async function handleSubmit(data: any, {reset}: any) {
    try {
      await formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        oldPassword: Yup.string().required("Old password is required"),
        newPassword: Yup.string().required("Old password is required"),
        newPasswordConfirmation: Yup.string()
          .required("Password Confirmation is required")
          .oneOf([Yup.ref("newPassword")], "Passwords must match"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      if (data.oldPassword === data.newPassword) {
        formRef.current?.setErrors({
          newPassword: "New password must be different from old password",
        });

        return;
      }


      login(currentUser.email, data.oldPassword).then((user: any) => {
        updatePassword(user.user, data.newPassword)
          .then(() => {
            reset();
            setMessage({
              severity: "success",
              message: "Password updated successfully",
            });
          })
          .catch((err: any) => {
            setMessage({
              severity: "error",
              message: err.code,
            });
          });
      }).catch((err: any) => {
        setMessage({
          severity: "error",
          message: err.code,
          });
      });

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        let errorMessages = {};

        err.inner.forEach((e) => {
          errorMessages = { ...errorMessages, [e.path!]: e.message };
        });

        formRef.current!.setErrors(errorMessages);
      } else {
        console.log(err);
      }
    }

    console.log(data);
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2>User Profile</h2>
      <p>Email: {currentUser.email} {currentUser.emailVerified ? "" : "(Not verified)"} </p>
      <p>Name: {currentUser.displayName}</p>
      <p>Phone: {currentUser.phone}</p>

      <Form onSubmit={handleSubmit} ref={formRef} style={{ maxWidth: "300px" }}>
        <Input
          name="oldPassword"
          placeholder="Old Password"
          type="password"
          autoComplete="password"
        />
        <Input
          name="newPassword"
          placeholder="New Password"
          type="password"
          autoComplete="new-password"
        />
        <Input
          name="newPasswordConfirmation"
          placeholder="Confirm new Password"
          type="password"
          autoComplete="new-password"
        />
        <Button variant="contained" fullWidth type="submit">
          Change Password
        </Button>
      </Form>
      {message.message && (
        <Alert severity={message.severity} sx={{ marginTop: "1rem" }}>
          {message.message}
        </Alert>
      )}
    </div>
  );
}
