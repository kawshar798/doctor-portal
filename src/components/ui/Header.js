import React, { useState } from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold:0,
      target: window ? window() : undefined,
      
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }


  const useStyles = makeStyles(
      theme => ({
        toolbarMargin:{
    ...theme.mixins.toolbar
        },
        tabContainer:{
            marginLeft:'auto'
        },
        tab:{
      ...theme.typography.tab,
        minWidth:10,
        marginLeft:'25px',
        color:'#0A0A0A'
        
        },
        customNav:{
            background:'#fff'
        },
        
      })
  )


const Header = () => {
    const classes = useStyles();

    const [value,setValue] = useState(0);
    const handleChange = (e,value) =>{
        setValue(value)
    }
    return (
        <>
          <ElevationScroll>
        <AppBar position="fixed" className={classes.customNav}>
            <Toolbar disableGutters={true}>
                <Typography variant="h3" color="secondary">Doctor Portal</Typography>
                
                <Tabs value={value} onChange={handleChange} className={classes.tabContainer}
                indicatorColor="secondary"
                >
                    <Tab className={classes.tab}  label="Home"/>
                    <Tab className={classes.tab} label="About"/>
                    <Tab className={classes.tab} label="Dental Services"/>
                    <Tab className={classes.tab} label="Reviews"/>
                    <Tab className={classes.tab} label="Blog"/>
                    <Tab className={classes.tab} label="Contact Us"/>
                </Tabs>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin}/>
        </>
    );
};

export default Header;