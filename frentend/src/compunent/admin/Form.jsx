import React, { useEffect, useState } from "react";
import Image from "./Image";
import { Button, TextField } from "@mui/material";
import TextEditor from "./TextEditor";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, Input } from "reactstrap";
import {
  addProductData,
  productReset,
} from "../../features/products/productSlice";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const Form = () => {
  const [formFields, setFormFields] = useState({
    product_name: "",
    product_description: "",
    product_category: "",
    product_price: "",
    product_images: [],
  });

  // destructure

  const {
    product_name,
    product_description,
    product_category,
    product_price,
    product_images,
  } = formFields;

  const handleChange = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]:
        e.target.type == "checkbox" || e.target.type == "switch"
          ? e.target.checked
          : e.target.value,
    });
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { productError, productSuccess, productLoading, productMessage } =
    useSelector((state) => state.items);

  useEffect(() => {
    if (productError) {
      toast.error(productMessage);
    }

    if (productSuccess) {
      toast.success("Product Uploaded", {
        icon: "📦",
      });
    }

    dispatch(productReset());
  }, [productError, productSuccess, dispatch]);

  const publishProduct = () => {
    const productData = {
      product_name,
      product_description,
      product_category,
      product_price,
      product_images,
      user: user?._id,
    };

    dispatch(addProductData(productData));
  };

  // const handleImageChange = (e) => {
  //   setFormFields({ ...formFields, image: e.target.files[0] });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Product Submitted", formFields);
  // };

  return (
    <div className="container ">
      <div className="d-flex gap-4 align-items-end justify-content-center mb-5 mt-2">
        <img
          width="100px"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/KFC_Logo.svg/2560px-KFC_Logo.svg.png"
          alt=""
        />
        <h2 className="m-0 text-danger">Product Entry Form</h2>
      </div>
      <form
        className="border row mx-auto p-4 rounded shadow"
        style={{ backgroundColor: "#282625" }}
      >
        <div className="col-lg-6">
          <div className="mb-3">
            <TextField
              className="w-100 rounded-4 my-2"
              style={{ backgroundColor: "#000000", color: "white" }}
              value={product_name}
              label="Product Name"
              onChange={handleChange}
              variant="filled"
              name="product_name"
              sx={{
                "& label": {
                  color: "#256eae", // Label color
                },
                "& label.Mui-focused": {
                  color: "#256eae", // Label color when focused
                },
                "& .MuiInputBase-input": {
                  color: "white", // **Text color inside input field**
                },
                "& .MuiFilledInput-root": {
                  backgroundColor: "#000000", // **Ensure background stays black**
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                    borderRadius: "1rem", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                    borderRadius: "1rem", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                    borderRadius: "1rem", // Border color when focused
                  },
                },
              }}
            />

            <FormGroup className="booking__form border-0 d-inline-block w-100 my-2">
              <Input
                type="select"
                className="w-100 border-0 p-3 rounded-4"
                style={{ backgroundColor: "#000000", color: "#256EAE" }}
                name="product_category"
                value={product_category}
                onChange={handleChange}
              >
                <option value="deals">Catagery</option>
                <option value="burger">burger</option>
                <option value="pizza">pizza</option>
                <option value="bites">bites</option>
                <option value="fries">fries</option>
              </Input>
                  
            </FormGroup>

            <div className="">
              <TextEditor
                formFields={formFields}
                {...formFields}
                setFormFields={setFormFields}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <TextField
              className="w-100 rounded-4 my-2"
              style={{ backgroundColor: "#000000", color: "white" }}
              value={product_price}
              label="Product Price"
              onChange={handleChange}
              variant="filled"
              name="product_price"
              sx={{
                "& label": {
                  color: "#256eae", // Label color
                },
                "& label.Mui-focused": {
                  color: "#256eae", // Label color when focused
                },
                "& .MuiInputBase-input": {
                  color: "white", // **Text color inside input field**
                },
                "& .MuiFilledInput-root": {
                  backgroundColor: "#000000", // **Ensure background stays black**
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                    borderRadius: "1rem", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                    borderRadius: "1rem", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                    borderRadius: "1rem", // Border color when focused
                  },
                },
              }}
            />
          </div>

          <div className="my-3 row">
            <div className="col-md-12">
              <Image {...formFields} setFormFields={setFormFields} />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>

        <Button
          disabled={productLoading}
          onClick={publishProduct}
          variant="contained"
          className={`text-white  fw-semibold ${
            productLoading ? "bg-secondary" : "bg-purple"
          } `}
        >
          {productLoading ? (
            <ClipLoader color="white" size={20} />
          ) : (
            "Publish product"
          )}
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
