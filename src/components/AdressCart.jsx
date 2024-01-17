import React from "react";

export default function AdressCart() {
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailerror, setEmailerror] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [phoneerror, setPhoneerror] = React.useState(false);
  const [address, setAddress] = React.useState("");
  const [addresserror, setAddresserror] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("enter name");
    }
    if (!email) {
      setEmailerror("enter email");
    }
    if (!phone) {
      setPhoneerror("enter phone");
    }
    if (!address) {
      setAddresserror("enter address");
    }
    if (name && email && email.includes("@") && phone && address) {
      setNameError(null);
      setEmailerror(null);
      setPhoneerror(null);
      setAddresserror(null);
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
    }
  };
  return (
    <div className="order__address__container">
      <div className="order__address__heading">Address</div>
      <div className="address__input__label">Enter Name</div>
      <div className="address__input__wraper">
        <input
          maxLength={60}
          className="address__input__wraper__input"
          type="text"
          error={nameError}
          value={name}
          placeholder="Enter Name"
          onChange={(e) => {
            if (!e.target.value) {
              setNameError("enter name");
            } else {
              setNameError("");
            }
            setName(e.target.value);
          }}
        />
        {nameError !== "" ? (
          <div className="input__error">{nameError}</div>
        ) : null}
      </div>
      <div className="address__input__label">Email</div>
      <div className="address__input__wraper">
        <input
          className="address__input__wraper__input"
          type="mail"
          error={emailerror}
          value={email}
          placeholder="Enter Email"
          onChange={(e) => {
            if (!e.target.value) {
              setEmailerror("enter email");
            } else {
              setEmailerror("");
            }
            setEmail(e.target.value);
          }}
        />
        {emailerror !== "" ? (
          <div className="input__error">{emailerror}</div>
        ) : null}
      </div>
      <div className="address__input__label">Enter Phone No.</div>
      <div className="address__input__wraper">
        <input
          maxLength={60}
          className="address__input__wraper__input"
          type="tel"
          error={phoneerror}
          value={phone}
          placeholder="+92-000-0000000"
          onChange={(e) => {
            if (!e.target.value) {
              setPhoneerror("enter phone no.");
            } else {
              setPhoneerror("");
            }
            setPhone(e.target.value);
          }}
        />
        {phoneerror !== "" ? (
          <div className="input__error">{phoneerror}</div>
        ) : null}
      </div>
      <div className="address__input__label">Enter Address</div>
      <div className="address__input__wraper">
        <textarea
          maxLength={200}
          value={address}
          error={addresserror}
          className="address__input__wraper__textarea"
          placeholder="Enter Address..."
          onChange={(e) => {
            if (!e.target.value) {
              setAddresserror("enter address");
            } else {
              setAddresserror("");
            }
            setAddress(e.target.value);
          }}
        />
        {addresserror !== "" ? (
          <div className="input__error">{addresserror}</div>
        ) : null}
      </div>
      <button
        onClick={handleSubmit}
        className="cart__wraper__price__checkout__btn"
      >
        order
      </button>
    </div>
  );
}
