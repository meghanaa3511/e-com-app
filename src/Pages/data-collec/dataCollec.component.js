import {React, useEffect, useState , Redirect} from "react";
import '../data-collec/dataCollec.styles.css';
import{Button ,TextField} from '@mui/material';
import uploadimage from 'C:/Users/Meghana A/Desktop/react/day15/e-com-app/src/assets/cloud-computing.png';
import { async } from "@firebase/util";
import { ref, uploadBytes , getDownloadURL } from "firebase/storage";
import { firebaseDatabase, firebaseStorage } from "../../backend/firebase-handler";
import { useNavigate } from 'react-router-dom';
import {set} from 'firebase/database';

const DataCollec =()=>{

    const[productinfo , setProductInfo] = useState({
        productimage:"",
        prouctname:"",
        productprice:"",
        productMRP:""
    });


    useEffect(()=>{
        if(!productinfo.productprice){
        setProductInfo({
            ...productinfo,
            "productMRP":0,
        })
        }else{
            const MRP=(parseFloat(productinfo.productprice) * 0.18) + parseFloat(productinfo.productprice);
        setProductInfo({
            ...productinfo,
            "productMRP":MRP,
        })

        }
    } , [productinfo.productprice])

    const handleChange=event=>{
        const {name,value}=event.target;
        setProductInfo({
            ...productinfo,
            [name]:value
        })
    }
    const handleSave = async() => {
        const recordref=ref(firebaseDatabase,`TEMP_FOLDER/file`);
        await set(recordref,productinfo);
        alert("file saved")
    }


    const handleimage =()=>{

        const tempele =document.createElement('input');
        tempele.setAttribute('type',"file");
        tempele.onchange = async(event) =>{

            const file= event.target.files[0];
            const fileRef = ref(firebaseStorage , `TEMP_FOLDER/file`);
            await uploadBytes(fileRef,file);
            const downloadURL = await getDownloadURL(fileRef);
            setProductInfo({
                ...productinfo,
                "productimage": downloadURL,
            })

            alert("File uploaded")
          
        }

        tempele.click();
    }

    return(
        <div className="data-collec-conatiner">
            <div className="data-content">
                <img className="data-image" onClick={handleimage} src={productinfo.productimage?productinfo.productimage:uploadimage} alt="upload image"/>
                <TextField name={"productname"} value  = {productinfo.productname} onChange={handleChange} sx={{width:'600px', marginbottom:'10px'}} id="outlined-basic" label="Product Name" variant="outlined" />
                <TextField name={"productprice"} type={"number"} value  = {productinfo.productprice} onChange={handleChange} sx={{width:'600px', marginbottom:'10px'}} id="outlined-basic" label="Product Price" variant="outlined" />
                <TextField name ={"productMRP"} value = {productinfo.productMRP} sx={{width:'600px', marginbottom:'10px'}} id="outlined-basic" label="MRP" variant="outlined" />
                <Button onClick={handleSave} variant="contained" >Save </Button>
            </div>
        </div>
    )
}
export default DataCollec;







