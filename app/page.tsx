import ProductsPage from "./components/products";
import LoginButton from "../pages/login-btn.jsx";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center">
      <div className="text-center w-full">
        Welcome to our page
        <ProductsPage/>
      </div>
      <LoginButton />
    </div>
  )
}
