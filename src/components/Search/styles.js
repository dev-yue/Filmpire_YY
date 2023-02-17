import { makeStyles } from "@mui/styles";

const drawerWidth = 240

export default makeStyles((theme) => ({
    searchContainer: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justfyContent: 'center',
            width: '100%'
        }
    },
    input : {
        color: theme.palette.mode === 'light' && 'black',
        filter: theme.palette.mode === 'light' && 'invert(1)',
        [theme.breakpoints.down('sm')]: {
            marginTop: '-10px',
            marginBottom: '-10px',
        },        
    }
}));
