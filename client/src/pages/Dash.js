import React from "react";
import DashboardHome from "../components/DashboardHome";
import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const Dash = () => {
    return (
        <div className="dashContainer">
            <DashboardHome/>
            <CategoryMenu />
            <ProductList />
            <Cart />
        </div>
    )
}

export default Dash;