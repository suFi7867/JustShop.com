import { Stack } from "@chakra-ui/react";
import React from "react";
import styles from "../styles/main.module.css";



const Loading = () => {
  return (
     
     <Stack className={styles.mainLoadCSS}  >
         <div className={styles.loadingCSS} >
           <img
             width="100%"
             src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif"
             alt="loading..."
             />
       
         </div>
      </Stack>

  );



};

export default Loading;
