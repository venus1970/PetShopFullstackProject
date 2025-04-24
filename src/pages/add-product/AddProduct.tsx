import React from "react";
import "./add-product.scss";
import { TextField, Button } from "@mui/material";
import { IProduct } from "../../types/globaltyping";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../constants/urlconstant";

const AddProduct: React.FC = () => {
  const [product, setProduct] = React.useState<Partial<IProduct>>({
    brand: "",
    title: "",
  });
  const redirect = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSaveBtnClick = () => {
    if (product.title === "" || product.brand === "") {
      alert("Please fill in all fields");
      return;
    }

    const data: Partial<IProduct> = {
      brand: product.brand,
      title: product.title,
    };
    axios
      .post(baseUrl, data)
      .then((response) =>
        redirect("/products", {
          state: { message: "Product added successfully" },
        })
      )
      .catch((error) => alert("An error occurred while adding the product"));
  };

  const handleBackBtnClick = () => {
    redirect("/products");
  };

  return (
    <div className="add-product">
      <div className="form-wrapper">
        <h2>Add New Product</h2>
        <form>
          <TextField
            autoComplete="off"
            label="Brand"
            variant="outlined"
            name="brand"
            fullWidth
            value={product.brand}
            onChange={handleChange}
          />
          <TextField
            autoComplete="off"
            label="Title"
            variant="outlined"
            name="title"
            fullWidth
            value={product.title}
            onChange={handleChange}
          />
          <div className="button-group">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveBtnClick}
            >
              Save
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleBackBtnClick}
            >
              Back
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
