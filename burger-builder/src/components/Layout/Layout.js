import React, {Fragment} from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const Layout = (props) => (
    <Fragment >
        <Toolbar/>
        <SideDrawer></SideDrawer>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default Layout;