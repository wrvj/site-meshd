import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface iProps {
  setFilesToUpload: Dispatch<SetStateAction<any[]>>;
  filesToUpload: Array<any>;
}

export default function ImageUpload(props: iProps) {
  const { setFilesToUpload, filesToUpload } = props;
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => onFilesDropped(files),
  });

  const onFilesDropped = (files: any) => {
    const newFiles = [...filesToUpload, ...files];
    setFilesToUpload(newFiles);
  };

  return (
    <>
      <h2 className="form-section-label">
        Send us some reference images or any other files that are relavant to
        the project.
      </h2>

      <section className="container">
        <div
          {...getRootProps({ className: "dropzone" })}
          style={{
            padding: "25px",
            borderRadius: "8px",
            background: "rgba(255,255,255,.05)",
          }}
        >
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside>
          <div>
            {filesToUpload.map((file: any) => (
              <>
                {file.name} - {Math.trunc(file.size / 1024)} kb <br />
              </>
            ))}
          </div>
        </aside>
        <button
          onClick={() => {
            setFilesToUpload([]);
          }}
        >
          Remove Files
        </button>
      </section>
    </>
  );
}
