import React, { useEffect, useState } from "react";
import useUrl from "../../component/hooks/useUrl";
import SingleWishItem from "../../component/single-wishitem";
import { useData } from "../../store";
const Wishlist = () => {
  let { auth } = useData();
  let { url } = useUrl();
  let [wishlist, setWishlist] = useState();
  useEffect(() => {
    fetch(`${url}/user/wishlist/detail?userId=${auth.user._id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setWishlist(data.wishlistItems);
      });
  }, []);

  let handleRemover = (id) => {
    let exactWishlist = wishlist.filter((sig) => sig._id !== id);
    setWishlist(exactWishlist);
    fetch(`${url}/user/wishlist?userId=${auth.user._id}&productId=${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {});
  };
  return (
    <div>
      {wishlist.length > 0 ? (
        wishlist.map((sig, index) => <SingleWishItem title={sig.title} img={sig.img[0].src} id={sig._id} handleRemover={handleRemover} />)
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
          }}
        >
          <p style={{ fontSize: "2rem", fontWeight: "700" }}>You have no wishlist 😔</p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
