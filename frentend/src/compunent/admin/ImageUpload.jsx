import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="container mt-3">
      <label className="mb-2 fw-semibold">Product Image</label>
      <div
        {...getRootProps()}
        className="border border-dashed rounded-3 p-5 text-center"
        style={{ border: "2px dashed #ddd", cursor: "pointer" }}
      >
        <input {...getInputProps()} />
        <div className="mb-2">
          <i className="bi bi-upload" style={{ fontSize: "2rem" }}></i>
        </div>
        <p className="mb-1 fw-semibold">Drag and Drop Your Image Here.</p>
        <p className="text-muted small">or</p>
        <button className="btn btn-outline-primary">Browse Image</button>
      </div>
      <div className="text-end mt-2">
        <a href="#" className="text-primary text-decoration-none">
          Add media from URL
        </a>
      </div>
    </div>
  );
};

export default ImageUpload;
