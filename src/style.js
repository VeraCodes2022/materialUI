import {makeStyles} from "@mui/styles";

const useStyles=makeStyles(()=>({
    Container: {
        marginTop:"60px",
        padding:"20px",
    },
   icon:{marginRight:"20px"},
   buttons:{marginTop:"40px"},
   cardGrid:{
    marginTop:"60px",
    marginBottom:"60px",
    display:"flex",
    flexDirection:"column",
   },
   card:{},
   cardMedia:{
    paddingTop:"56.25%",
},
cardContent:{
 flexGrow:1,
},
footer:{
    backgroundColor:"#f1f1f1",
    paddingTop:"40px",
    textAlign:"center",
    paddingBottom:"40px",
},
combobox:{
  marginBottom:"40px",
},
disableOpts:{
    marginBottom:"40px",
}

}))



export default useStyles;