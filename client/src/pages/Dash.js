import React from "react";
import DashboardHome from "../components/DashboardHome";
import CategoryMenu from "../components/CategoryMenu";
import ProductList from "../components/ProductList";

const Dash = () => {
    return (
        <div className="dashContainer">
            <DashboardHome/>
            <CategoryMenu />
            <ProductList />
        </div>
    )
}

export default Dash;