import React, { useRef, useState } from "react";
import { OrderFormContainer } from "./styles";
import FormControl from "@mui/material/FormControl";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";

import { Button, FormHelperText, TextField } from "@mui/material";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import SoftwareSelect from "./SoftwareSelect/";
import ImageUpload from "../ImageUpload";
import {
  storage,
  ref,
  uploadBytes,
  updateMetadata,
} from "../../../firebase/storage/base";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ContactForm() {
  async function handleFormSubmit() {
    setLoading(true);
    const token = await reRef.current?.executeAsync();
    reRef.current?.reset();
    const { data }: any = await axios.post(
      "https://us-central1-meshd-4c2df.cloudfunctions.net/hello",
      {
        email: guestEmail,
        name: guestName,
        company: companyName,
        fileFormats: fileFormats,
        services: services,
        description: description,
        variations: variations,
        reToken: token,
      }
    );

    console.log(data);

    if (data.validationToken) {
      uploadFiles(data.validationToken);
    }else {
      setLoading(false);
    }
  }

  const uploadFiles = (fileUploadValidationToken: string) => {
    if (Array.from(filesToUpload).length === 0) {
      setGuestEmail("");
      setGuestName("");
      setDescription("");
      setVariations("");
      setLoading(false);
      setOpen(true);
      return;
    }

    Array.from(filesToUpload).map((file: any) => {
      const fileRef = ref(
        storage,
        "FormEntries" + guestEmail + "/" + fileUploadValidationToken + "/" + file.name
      );
      const metadata = {
        customMetadata: {
          token: fileUploadValidationToken,
        },
      };

      uploadBytes(fileRef, file).then((snapshot) => {
        updateMetadata(fileRef, metadata);
        setGuestEmail("");
        setGuestName("");
        setDescription("");
        setVariations("");
        setFilesToUpload([]);
        setOpen(true);
        setLoading(false);
        console.log("File Uploaded");
      });
    });
  };

  const [guestEmail, setGuestEmail] = useState("");
  const [guestName, setGuestName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [variations, setVariations] = useState("");
  const [description, setDescription] = useState("");
  const [filesToUpload, setFilesToUpload] = useState<Array<any>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [services, setServices] = useState({
    renders: { name: "Renders", checked: false },
    models: { name: "Models", checked: false },
    textures: { name: "Textures", checked: false },
    videos: { name: "Videos", checked: false },
    repairs: { name: "Repairs/Adjustments", checked: false },
    other: { name: "Other", checked: false },
  });
  const [fileFormats, setFileFormats] = useState({
    native: { name: "Native Software Format", checked: false },
    obj: { name: "OBJ", checked: false },
    stl: { name: "STL", checked: false },
    fbx: { name: "FBX", checked: false },
    glb: { name: "GLB", checked: false },
    png: { name: "PNG", checked: false },
    tiff: { name: "TIFF", checked: false },
    jpg: { name: "JPG", checked: false },
    other: { name: "Other", checked: false },
  });

  const reRef = useRef<ReCAPTCHA>(null);

  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <OrderFormContainer>
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            width: "100%",
            height: "100vh",
            zIndex: 500,
            background: "rgba(255,255,255,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}
      {/* ReCAPTCHA */}
      {process.env.REACT_APP_RECAPTCHA_SITE_KEY && (
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          size="invisible"
          ref={reRef}
        />
      )}

      {/* Snackbar */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Your request was sent. We will get in touch soon!
        </Alert>
      </Snackbar>

      <div className="form-container" id="form-contact">
        <h1>Fill in the form</h1>

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <TextField
            id="quote-form-name-input"
            label="Full name"
            variant="filled"
            required
            value={guestName}
            onChange={(event) => {
              setGuestName(event.target.value);
            }}
          />
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <TextField
            id="quote-form-email-input"
            label="Email"
            variant="filled"
            type="email"
            required
            value={guestEmail}
            onChange={(event) => {
              setGuestEmail(event.target.value);
            }}
          />
        </FormControl>

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <TextField
            id="quote-form-name-input"
            label="Company name"
            variant="filled"
            value={companyName}
            onChange={(event) => {
              setCompanyName(event.target.value);
            }}
          />
        </FormControl>

        <FormGroup>
          <h2 className="form-section-label">
            Which service do you need? (Can choose more than one){" "}
          </h2>

          <div className="radio-group-grid">
            {Object.entries(services).map(([key, value]): any => (
              <FormControlLabel
                label={value.name}
                control={
                  <Checkbox
                    checked={value.checked}
                    onClick={() => {
                      setServices({
                        ...services,
                        [key]: { name: value.name, checked: !value.checked },
                      });
                    }}
                  />
                }
              />
            ))}
          </div>
        </FormGroup>

        <SoftwareSelect />

        <FormGroup>
          <h2 className="form-section-label">Which file formats you need? </h2>
          <div className="radio-group-grid">
            {Object.entries(fileFormats).map(([key, value]): any => (
              <FormControlLabel
                label={value.name}
                control={
                  <Checkbox
                    checked={value.checked}
                    onClick={() => {
                      setFileFormats({
                        ...fileFormats,
                        [key]: { name: value.name, checked: !value.checked },
                      });
                    }}
                  />
                }
              />
            ))}
          </div>
        </FormGroup>

        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <h2 className="form-section-label">Colorways/Variations</h2>
          <TextField
            onChange={(event) => {
              setVariations(event.target.value);
            }}
            id="quote-form-name-input"
            label="Do you need any model variations, or colorways?"
            multiline
            rows={3}
            variant="filled"
            required
            value={variations}
          />
          <FormHelperText sx={{ m: 1 }}>
            If you need your model in different versions, colors or textures,
            they might not be charged as a different model.
          </FormHelperText>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, width: "100%" }}>
          <h2 className="form-section-label">Detailed project description</h2>
          <TextField
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            id="quote-form-name-input"
            label="Project description"
            multiline
            rows={3}
            variant="filled"
            required
            value={description}
          />
          <FormHelperText sx={{ m: 1 }}>
            Please describe in detail the requirements and relevant informations
            about your project.
          </FormHelperText>
        </FormControl>
        <ImageUpload
          setFilesToUpload={setFilesToUpload}
          filesToUpload={filesToUpload}
        />
        <Button
          id="contact-form-submit"
          onClick={handleFormSubmit}
          style={{ margin: "30px 0" }}
        >
          Submit
        </Button>
      </div>
    </OrderFormContainer>
  );
}
