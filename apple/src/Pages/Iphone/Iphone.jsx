//#########################
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./iphone.css";

const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch("https://applereactbend.degefagomora.com/iPhones")
    fetch("https://applereactbend.degefagomora.com/iphones")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProducts(data.products || []); // <-- prevents undefined
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  return (
    <section className="internal-page-wrapper top-100">
      <div className="container">
        {(products || []).map((product, index) => {
          const {
            product_name,
            product_brief_description,
            product_img,
            starting_price,
            price_range,
            product_url,
          } = product;

          const slug = product_url.split("/").filter(Boolean).pop(); //extracts the last part of a URL
          //1"https://www.apple.com/in/iphone-se/".split("/");
          // Result: ["https:", "", "www.apple.com", "in", "iphone-se", ""]
          //2["https:", "", "www.apple.com", "in", "iphone-se", ""].filter(Boolea);
          // Result: ["https:", "www.apple.com", "in", "iphone-se"]
          //3["https:", "www.apple.com", "in", "iphone-se"].pop()
          // Result: "iphone-se"
          const order1 = index % 2 === 0 ? 2 : 1;
          const order2 = index % 2 === 0 ? 1 : 2;

          return (
            <div
              className="row justify-content-center text-center bottom-50"
              key={slug}
            >
              <div className={`col-12 col-md-6 p5-5 order-${order1}`}>
                <div className="title-wraper  bold">{product_name}</div>
                <div className="brief-description">
                  {product_brief_description}
                </div>
                <div className="starting-price">{`Starting at ${starting_price}`}</div>
                <div className="monthly-price">{price_range}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={`/iphone/${slug}`}>Learn more</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`col-12 col-md-6 pt-5 order-${order2}`}>
                <div className="prodict-image pt-5">
                  <img src={product_img} alt={product_name} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Iphone;
