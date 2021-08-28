import React from "react";
import DashboardHome from "../components/DashboardHome";
import CategoryMenu from "../components/CategoryMenu";

const Dash = () => {
    return (
        <div className="dashContainer">
            <DashboardHome/>
            <CategoryMenu />
        </div>
    )
}

export default Dash;