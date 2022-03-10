import React, {Fragment} from "react";
import Header from "./Header";
import UserAccount from "./UserAccount";
import Footer from "./Footer";


const Layout = () => {
    return (
        <Fragment>
            <Header/>
            <UserAccount />

            <Footer />
        </Fragment>
    );
};

export default Layout;
