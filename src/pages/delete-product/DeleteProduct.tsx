import React from "react";
import "./delete-product.scss";
import { Button } from "@mui/material";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../constants/urlconstant";

const DeleteProduct = () => {
  const redirect = useNavigate();
  const { id } = useParams();

  const handleDeleteBtnClick = () => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then(() => {
        redirect("/products", {
          state: { message: "Product deleted successfully" },
        });
      })
      .catch(() => alert("An error occurred"));
  };

  const handleCancelBtnClick = () => {
    redirect("/products");
  };

  return (
    <div className="delete-product">
      <h2>Delete Product</h2>
      <h4>Are You Sure You want to delete this product?</h4>

      <div className="button-group">
        <Button
          variant="outlined"
          color="primary"
          onClick={handleDeleteBtnClick}
        >
          Delete
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleCancelBtnClick}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default DeleteProduct;
