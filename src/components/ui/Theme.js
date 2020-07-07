import { createMuiTheme } from '@material-ui/core/styles';
const  blueBlack = "#203047";
const  black = "#0A0A0A";
const  lightBlue = "#1CC7C1";
export default createMuiTheme({
palette:{
    common:{
        blueBlack:`${blueBlack}`,
        black:`${black}`,
        lightBlue:`${lightBlue}`,
    },
    primary:{
        main:`${lightBlue}`,
       
    },
    secondary:{
        main:`${black}`
    }
},

typography:{
h2:{
    fontSize:'68px',
},
tab:{
    color:'#fff',
    fontSize:'18px',
    fontFamily:'Poppins',
    textTransform:'capitalize',
}
}
});
