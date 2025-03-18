import React, { useRef, useEffect } from "react";
import "@vaadin/rich-text-editor";
import "@vaadin/rich-text-editor/theme/material/vaadin-rich-text-editor.js";

import { QuillDeltaToHtmlConverter } from "quill-delta-to-html";

const TextEditor = ({ setFormFields, formFields }) => {
  const editor = useRef();

  useEffect(() => {
    editor.current.addEventListener("value-changed", (e) => {
      let value = e.detail.value;
      if (value) {
        let parsedValue = JSON.parse(value);
        let converter = new QuillDeltaToHtmlConverter(parsedValue, {});
        let convertedValue = converter.convert();
        setFormFields({
          ...formFields,
          product_description: convertedValue,
        });
      }
    });
  });

  return (
    <>
      <div className="text-dark">
        <vaadin-rich-text-editor
          ref={editor}
          name="product_description"
          placeholder="Start typing..."
          className="mx-auto "
          style={{
            "--vaadin-rich-text-editor-background": "white", // Change this to any color you want
            "--vaadin-rich-text-editor-content-color": "black", // Ensuring text is black
            "--vaadin-rich-text-editor-selection-background": "purple",
          }}
        ></vaadin-rich-text-editor>
      </div>
    </>
  );
};

export default TextEditor;
