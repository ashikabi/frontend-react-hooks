import { fade, makeStyles } from "@material-ui/core/styles";

const { innerWidth: width, innerHeight: height } = window;

const useStyles = makeStyles((theme) => ({
  appBar:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'center',
    alignContent: 'center',
    alignItems:'center', 
    alignSelf:'center', 
    width: (width - (width/3)),
    marginRight: (width/6),
    height: 90
  },
  catalogOptions:{
    alignContent:'center',
    alignItems:'center',
    alignSelf:'center',
    
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    //padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50ch"
    }
  },
  listbox: {
    width: "50ch",
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    zIndex: 1,
    position: 'absolute',
    listStyle: 'none',
    backgroundColor: fade(theme.palette.primary.dark, 0.55),
    overflow: 'auto',
    maxHeight: 200,
    border: '1px solid rgba(0,0,0,.25)',
    '& li[data-focus="true"]': {
      backgroundColor: '#4a8df6',
      color: 'white',
      cursor: 'pointer',
    },
    '& li:active': {
      backgroundColor: '#2977f5',
      color: 'white',
    },
  }
}));

export default useStyles;