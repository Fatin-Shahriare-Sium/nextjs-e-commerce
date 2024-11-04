import React, { useEffect, useState } from "react";
import useUrl from "../../component/hooks/useUrl";
import { useData } from "../../store";
import Link from "next/link.js";
const Order = () => {
  let [orders, setOrders] = useState([]);
  let { auth } = useData();
  let { url } = useUrl();
  useEffect(() => {
    if (typeof window !== "undefined" && auth.user._id) {
      fetch(`${url}/order/all/${auth.user._id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setOrders(data.allOrderOfUser);
        });
    }
  }, [typeof window !== "undefined" && auth.user._id]);
  if (orders.length <= 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        }}
      >
        <p style={{ fontSize: "2rem", fontWeight: "700" }}>
          You have not created any order
        </p>
      </div>
    );
  }
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>OrderId</th>
            <th>Total Amount</th>
            <th>Payment Status</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((sig, index) => (
            <tr>
              <td>
                <Link href={`/orderdetails?id=${sig._id}`}>
                  {`Order-${sig._id}`}
                </Link>
              </td>

              <td>{`$ ${sig.totalAmount}`}</td>
              <td>
                <p
                  style={{
                    maxWidth: "max-content",
                    marginLeft: "1%",
                    borderRadius: "3px",
                  }}
                  className="bg-warning text-dark p-2"
                >
                  {sig.paymentStatus}
                </p>
              </td>
              <td>
                <p
                  style={{
                    maxWidth: "max-content",
                    marginLeft: "1%",
                    borderRadius: "3px",
                  }}
                  className="bg-primary text-white p-2"
                >
                  {sig.orderStatus}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
