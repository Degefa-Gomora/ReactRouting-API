// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Four04 from "../Four04/Four04"; // Assuming Four04 is a 404 component

// const ProductPage = () => {
//   const { pid } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch("https://applereactfend.degefagomora.com/iphones")
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.products.find((x) => {
//           const slug = x.product_url.split("/").filter(Boolean).pop();
//           return slug === pid;
//         });
//         setProduct(found);
//       })
//       .catch((err) => console.error("Fetch error:", err));
//   }, [pid]);

//   if (!product) {
//     return <Four04 />;
//   }

//   const {
//     product_name,
//     product_brief_description,
//     product_description,
//     product_img,
//     starting_price,
//     price_range,
//   } = product;

//   return (
//     <section className="internal-page-wrapper top-100">
//       <div className="container">
//         <div className="row justify-content-center text-center bottom-50">
//           <div className="col-12 pt-4">
//             <div className="title-wraper  bold">{product_name}</div>
//             <div className="brief-description">{product_brief_description}</div>
//           </div>
//         </div>

//         <div className="row justify-content-center text-center product-holder h-100">
//           <div className="col-sm-12 col-md-6 my-auto">
//             <div className="product-title">{product_name}</div>
//             <div className="product-description">{product_description}</div>
//             <div className="starting-price">{`Starting at ${starting_price}`}</div>
//             <div className="monthly-price">{price_range}</div>
//           </div>
//           <div className="col-sm-12 col-md-6">
//             <div className="product-image pt-5">
//               <img src={product_img} alt={product_name} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductPage;





import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four04/Four04"; // Assuming Four04 is a 404 component

const ProductPage = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://applereactbend.degefagomora.com/iphones")
    // https://applereactbend.degefagomora.com/iphones
      .then((res) => res.json())
      .then((data) => {
        const found = data.products.find((x) => {
          const slug = x.product_url.split("/").filter(Boolean).pop();
          return slug === pid;
        });
        setProduct(found);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [pid]);

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>
    );
  if (!product) return <Four04 />;

  const {
    product_name,
    product_brief_description,
    product_description,
    product_img,
    starting_price,
    price_range,
  } = product;

  return (
    <section className="internal-page-wrapper top-100">
      <div className="container">
        <div className="row justify-content-center text-center bottom-50">
          <div className="col-12 pt-4">
            <div className="title-wraper bold">{product_name}</div>
            <div className="brief-description">{product_brief_description}</div>
          </div>
        </div>

        <div className="row justify-content-center text-center product-holder h-100">
          <div className="col-sm-12 col-md-6 my-auto">
            <div className="product-title">{product_name}</div>
            <div className="product-description">{product_description}</div>
            <div className="starting-price">{`Starting at ${starting_price}`}</div>
            <div className="monthly-price">{price_range}</div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="product-image pt-5">
              <img src={product_img} alt={product_name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;












