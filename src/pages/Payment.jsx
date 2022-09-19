import { Box, Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/FinalPayment.module.css";
import OtpPage from "./OtpPage";
const getAddress = () => {
  const formData = JSON.parse(localStorage.getItem("form"))
  return formData;
};
const Payment = () => {
  const [address, setAddress] = useState(getAddress());
  const [openOtp, setOpenOtp] = useState(false);
  const navigate = useNavigate();

  const handleRedirct = () => {
    navigate("/cart/checkout/payment/otp")
  }
  
  return (
    <Box>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div className={styles.parentLeft}>
            <div className={styles.leftTop}>
              <div className={styles.innerLeftTop}>
                <div className={styles.Header} style={{ marginBottom: 15 }}>
                  <i className="fa-solid fa-circle-check"></i>
                  <h2>Delivery Address</h2>
                </div>
                <div className={styles.address}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className={styles.addressPara}>
                      <p>
                        {address.first_name} {address.last_name}
                      </p>
                      <p>{address.address1}</p>
                      <p>{address.address2}</p>
                      <p>{address.mobile}</p>
                      <p>{address.country}</p>
                    </div>
                    <p
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "gray",
                        fontSize: 14,
                      }}
                      onClick={() => navigate(-1)}
                    >
                      EDIT
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.leftBottom}>
              <div className={styles.leftBottomWrapper}>
                <h2
                  style={{
                    marginBottom: "20px",
                  }}
                >
                  Payment
                </h2>

                <div className={styles.addressBar}>
                  <input type="checkbox" />
                  <p>Billing address same as delivery address</p>
                </div>
                <br />
                <div className={styles.cardDiv}>
                  <i className="fa-solid fa-credit-card"></i>
                  <p>Card</p>
                </div>
                <br />
                <div className={styles.displayCardDiv}>
                  <div>
                    <div className={styles.cardInput1}>
                      <Input
                        className={styles.cardNumber}
                        
                        type="number"
                        placeholder="Card Number *"
                      />
                      <i className="fa-solid fa-lock"></i>
                    </div>
                    <br />
                    <div className={styles.cardLastDate}>
                      <Input type="text" placeholder="MM/YY *" />
                      <Input type="text" placeholder="CVV *" />
                      <i className="fa-solid fa-circle-question"></i>
                    </div>
                    <br />
                    <div className={styles.nameOnTheCard}>
                      <Input type="text" placeholder="Name on card *" />
                    </div>
                    <br />
                    <div className={styles.cardPhotos}>
                      <img
                        src="https://tse3.mm.bing.net/th?id=OIP.3oJG6k7jSxQHmkjN9aRvNQHaDA&pid=Api&P=0&w=421&h=171"
                        alt=""
                      />
                      <img
                        src="https://tse4.mm.bing.net/th?id=OIP.YbjoXNR5vHk40HALX9MmXAAAAA&pid=Api&P=0&w=56&h=35"
                        alt=""
                      />
                      <img
                        src="https://tse3.mm.bing.net/th?id=OIP.fgkwCuz-ovfAcVMJP5srtwHaEK&pid=Api&P=0&w=276&h=155"
                        alt=""
                      />
                      <img
                        src="https://tse3.mm.bing.net/th?id=OIP.FGAMR-XYlKe0iQTjmMtXNgHaHa&pid=Api&P=0&w=167&h=167"
                        alt=""
                      />
                      <img
                        src="https://tse1.mm.bing.net/th?id=OIP.iGzlVx9T1wLqIdERUJHvnAHaHa&pid=Api&P=0&w=161&h=161"
                        alt=""
                      />
                      <img
                        src="https://tse3.mm.bing.net/th?id=OIP.kQEaukiihSbaYOj_8jCVDgHaEK&pid=Api&P=0&w=295&h=166"
                        alt=""
                      />
                      <img
                        src="https://tse3.mm.bing.net/th?id=OIP.RMwjZ66K8SvqAfffRH6pGgAAAA&pid=Api&P=0&w=169&h=169"
                        alt=""
                      />
                    </div>

                    <br />
                    <div>
                      <div>
                        <p className={styles.payNowLast}>
                          By clicking Pay Now, you agree to eShopWorld's{" "}
                          <a href="">Terms and Conditions</a>{" "}
                        </p>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Button
                          bg="blue"
                          color={"white"}
                          className={styles.paymentButton}
                          onClick={handleRedirct}
                        >
                          PAY NOW
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Payment;
