# 🐾 Pet Shop Web Application
Welcome to the **Pet Shop** — an interactive React-based web app that lets users explore a variety of pet products. Whether you're shopping for dogs, cats, or parrots, this app has everything your furry and feathered friends need!

This project is built with:
- 🧠 **Frontend**: React + TypeScript + SCSS
- 🔧 **Backend**: ASP.NET Core Web API
- 💾 **Database**: SQL Server


## 📸 Preview
![Pet Shop Screenshot](./assets/images/screenshot-home.png) <!-- replace with your actual screenshot path -->


## 📁 Project Structure:
PetShopFullstackProject/ │ ├── backend/ # ASP.NET Core Web API │ ├── Controllers/ │ ├── Models/ │ └── ... │ ├── frontend/ # React + TypeScript client │ ├── src/ │ ├── public/ │ └── ... │ ├── README.md └── .gitignore

## 📂 Project Structure deeply:
src/ ├── assets/ │ └── images/ ├── components/ │ └── Navbar.tsx │ └── ProductList.tsx ├── pages/ │ └── Home.tsx │ └── About.tsx │ └── Contact.tsx │ └── AddProduct.tsx ├── App.tsx ├── index.tsx └── styles/ └── navbar.scss └── productlist.scss

## 🚀 Features
| Feature               | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| 🧭 Responsive Navbar  | Includes navigation links and a hamburger menu for mobile                   |
| 🔍 Search Bar         | Search for products using keywords                                          |
| 🛒 Product Listings   | Browse through featured pet items                                           |
| 💬 Contact Page       | Users can reach out with questions or inquiries                            |
| ➕ Add Product Page    | Easily add new items to the product catalog (admin only)                   |
| 🎨 Modern UI          | Clean and modern interface using SCSS and Material-UI icons                |

## 🚀 Getting Started

### Prerequisites

- [.NET SDK 8.0](https://dotnet.microsoft.com/en-us/download/dotnet/8.0)
- [Node.js + npm](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

---

### 📦 Backend (ASP.NET Core)

```bash
cd backend
dotnet restore
dotnet build
dotnet run


## 🛠️ Technologies Used

- React with TypeScript
- React Router DOM
- SCSS for styling
- Material-UI icons

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/venus1970/pet-shop.git
cd pet-shop

# Install dependencies
npm install

# Start development server
npm run dev

## 📷 Screenshot

![Screenshot](frontend/src/assets/images/screenshot-home.png)
💻 Frontend (React)
bash
Copy code
cd frontend
npm install
npm start
🌟 Features
✅ Browse pets and products

🛒 Add to cart

🐶 View pet details

🧾 Admin dashboard (for managing products, users)

🌍 Responsive design

🔒 Environment Variables
frontend/.env

bash
Copy code
REACT_APP_API_BASE_URL=http://localhost:3000/api
backend/appsettings.json

json
Copy code
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=PetShopDb;Trusted_Connection=True;"
  }
}
👨‍💻 Author
Made with ❤️ by Tzila Aharoni.2025

Contact:
Developer: Aharoni Tzila
Email: zilaalkobi@gmail.com
GitHub: https://github.com/venus1970

The project can be further expanded into a scenario with authorized vendors, a cashier, an admin, and so onץ
I hope this README file gives users and developers all the information needed to understand, install, and contribute to my Pet Shop Web Application. 




