import { useState, useEffect, useCallback } from "react";
import "./products.scss";
import { IProduct } from "../../types/globaltyping";
import axios from "axios";
import { baseUrl } from "../../constants/urlconstant";
import { Button, Pagination } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Products: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const location = useLocation();
  const redirect = useNavigate();

  const fetchProductsList = useCallback(async () => {
    try {
      const response = await axios.get<IProduct[]>(baseUrl);
      setProducts(response.data);
      if (location?.state) {
        Swal.fire({
          icon: "success",
          title: location?.state?.message,
        });
        redirect(location.pathname, { replace: true });
      }
    } catch (error) {
      alert("An error occurred while fetching products.");
    }
  }, [location, redirect]);

  useEffect(() => {
    fetchProductsList();
  }, [fetchProductsList]);

  const handlePageChange = (_: any, value: number) => {
    setCurrentPage(value);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(products.length / productsPerPage);

  const redirectToEditPage = (id: string) => {
    redirect(`/products/edit/${id}`);
  };

  const redirectToDeletePage = (id: string) => {
    redirect(`/products/delete/${id}`);
  };

  return (
    <div className="products">
      <h1 style={{ color: "black" }}>Products List</h1>
      {products.length === 0 ? (
        <h1>No Products</h1>
      ) : (
        <>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Brand</th>
                  <th>Creation Time</th>
                  <th>Update Time</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {currentProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.brand}</td>
                    <td>{moment(product.createdAt).fromNow()}</td>
                    <td>{moment(product.updatedAt).fromNow()}</td>
                    <td>
                      <Button
                        variant="outlined"
                        color="warning"
                        sx={{ mx: 3 }}
                        onClick={() => redirectToEditPage(product.id)}
                      >
                        <Edit />
                      </Button>
                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => redirectToDeletePage(product.id)}
                      >
                        <Delete />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
            sx={{ mt: 4, display: "flex", justifyContent: "center" }}
          />
        </>
      )}
    </div>
  );
};

export default Products;
