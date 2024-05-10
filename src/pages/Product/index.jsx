import React from "react";
import { useParams } from "react-router-dom";

function Product() {
    const params = useParams();
    console.log("params + ", params);
    return (
        <div>
            Product + {params.id}
        </div>
    )
}

export default Product;