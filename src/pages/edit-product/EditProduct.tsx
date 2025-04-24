import React from "react";
import "./edit-product.scss";
import { TextField, Button } from "@mui/material";
import { IProduct } from "../../types/globaltyping";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../constants/urlconstant";

const EditProduct: React.FC = () => {
  const [product, setProduct] = React.useState<Partial<IProduct>>({
    brand: "",
    title: "",
  });

  const redirect = useNavigate();
  const { id } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    axios.get<IProduct>(`${baseUrl}/${id}`).then((response) =>
      setProduct({
        title: response.data.title,
        brand: response.data.brand,
      })
    );
  }, [id]);

  const handleSaveChangesBtnClick = () => {
    if (product.title === "" || product.brand === "") {
      alert("Enter Values");
      return;
    }

    const data: Partial<IProduct> = {
      brand: product.brand,
      title: product.title,
    };
    axios
      .put(`${baseUrl}/${id}`, data)
      .then((response) =>
        redirect("/products", {
          state: { message: "Product Updated successfully" },
        })
      )
      .catch((error) => alert("An error occurred"));
  };

  const handleCancelBtnClick = () => {
    redirect("/products");
  };
  return (
    <div className="edit-product">
      <div className="form-wrapper">
        <h2>Edit Product</h2>
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
              color="success"
              onClick={handleSaveChangesBtnClick}
            >
              Save Changes
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={handleCancelBtnClick}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
