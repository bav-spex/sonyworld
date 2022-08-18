import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
function ReviewTestFreaks() {
    const [searchItem, setSearchItem] = useState("");
    const [count, setCount] = useState(0);
    const params = useParams();
    const searchtext = params.searchtext === undefined ? "" : params.searchtext;
    useEffect(() => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.id = "bcs_js_snippet";
      script.src = `https://js.testfreaks.com/onpage/mestores.com-en-sa/head.js`;
      script.async = true;
      if (count === 0) {
        document.getElementById("customSearch").appendChild(script);
        setCount(count + 1);
        return () => {
          if (document.getElementById("customSearch")) {
            document.getElementById("customSearch").removeChild(script);
          }
          setCount(0);
        };
      }
    }, []);
  return (
    <>
    <div id="customSearch"></div>
  </>
  )
}

export default ReviewTestFreaks
