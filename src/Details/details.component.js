import { DataSnapshot, onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { firebaseStorage } from "../backend/firebase-handler";
//import { firebaseDatabase } from "C:/Users/Meghana A/Desktop/react/day5/auth/src/backend/firebasehandler.js";
//import 'C:/Users/Meghana A/Desktop/react/day5/auth/src/RecordList/RecordList.styles.css';
import 'C:/Users/Meghana A/Desktop/react/day15/e-com-app/src/Details/details.styles.css';
const Details = () => {

     const [productList,  setProductList] = useState([]);

     useEffect(() => {  
         const fetchData = async () => {
             const proRef = ref(firebaseStorage, `TEMP_FOLDER/file`);
             onValue(proRef, (DataSnapshot) => {
                 if (DataSnapshot.exists()) {
                     const tempVal = DataSnapshot.val();
                     console.log(Object.values(tempVal))

                     const temp = [];
                     for (const file in DataSnapshot.val()) {
                         const pro = DataSnapshot.child(file).val();
                         temp.push(pro);
                     }
                     setProductList(temp);
                 }else{
                     alert("No records found")
                 }
             })
         }
         fetchData()
     }, []);

     return (
         <div>
             <h1> List of products</h1>
             <div className="grid-container">
                 {
                     productList.map((item) => {
                         return (
                             <div className="grid-content">
                                 <h3>{item.productimage}</h3>
                                 <p>{item.productname}</p>
                                 <p>{item.productprice}</p>
                                 <p>{item.productMRP}</p>
                                 </div>
                         )
                     })
                 }
             </div>
         </div>
     )
}

export default Details;