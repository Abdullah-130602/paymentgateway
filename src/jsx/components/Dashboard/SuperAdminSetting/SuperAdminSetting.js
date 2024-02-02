import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import red from "../../../../images/theme/red.png";
import green from "../../../../images/theme/green.png";
import orange from "../../../../images/theme/orange.png";
import purple from "../../../../images/theme/purple.png";
import { ToastContainer, toast } from "react-toastify";

const SuperAdminSetting = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setInputError(false);
  };
  const handleShow = () => setShow(true);

  let accessToken = JSON.parse(localStorage.getItem("userDetails"));

  // Documents
  const [doc, setDoc] = useState([]);
  const getReqDocuments = async () => {
    var myHeaders = new Headers();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL + "required-documents/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setDoc(result.documents);
      })
      .catch((error) => console.log("error", error));
  };

  const [DocumentName, setDocumentName] = useState("");
  const [InputError, setInputError] = useState(false);

  const createDocument = async () => {
    setInputError(true);
    if (DocumentName === "") {
      setInputError(true);
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${accessToken.accessToken}`);

      var raw = JSON.stringify({
        name: DocumentName,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL +
          "required-documents/new",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          // console.log(result);
          if (result.message === "successfully created document") {
            getReqDocuments();
            setShow(false);
            toast.success(`${result.message}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  // Subscription

  const [Subscription, setSubscription] = useState([]);
  const [showSubsModal, setshowSubsModal] = useState(false);

  const getSubscription = async () => {
    var myHeaders = new Headers();

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL + "subscriptions/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setSubscription(result.subscriptions);
      })
      .catch((error) => console.log("error", error));
  };

  const [SubDuration, setSubDuration] = useState("");
  const [SubValue, setSubValue] = useState();

  const createSubscription = async () => {
    if (SubDuration === "") {
      setInputError(true);
    } else if (SubValue === "") {
      setInputError(true);
    } else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Bearer ${accessToken.accessToken}`);

      var raw = JSON.stringify({
        duration: SubDuration,
        amount: SubValue,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch(
        process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL + "subscriptions/new",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          // console.log(result);
          if (result.message === "Successfully Created") {
            setshowSubsModal(false);
            getSubscription();
            toast.success(`${result.message}`, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        })
        .catch((error) => console.log("error", error));
    }
  };

  const [SubsUpdateModal, setSubsUpdateModal] = useState(false);
  const [subscriptionIdForUpdate, setSubscriptionIdForUpdate] = useState();

  const updateSubs = (el) => {
    setSubDuration(el.duration);
    setSubValue(el.amount);
    setSubscriptionIdForUpdate(el.id);
    setSubsUpdateModal(true);
  };

  const updateSubscription = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${accessToken.accessToken}`);

    var raw = JSON.stringify({
      amount: SubValue,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL +
        `subscriptions/edit/${subscriptionIdForUpdate}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.message === "Successfully Updated") {
          setSubsUpdateModal(false);
          getSubscription();
          toast.success(`${result.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((error) => console.log("error", error));
  };

  // Themes

  const [theme, setTheme] = useState([]);

  const getThemes = async () => {
    // var myHeaders = new Headers();
    // myHeaders.append();

    var requestOptions = {
      method: "GET",
      // headers: myHeaders,
      redirect: "follow",
    };

    await fetch(
      process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL + "themes/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        // console.log(result);
        setTheme(result.themes);
      })
      .catch((error) => console.log("error", error));
  };
  const [ThemeModal, setThemeModal] = useState(false);
  const [ThemeName, setThemeName] = useState("");
  const [ThemeColor, setThemeColor] = useState("");
  const createTheme = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${accessToken.accessToken}`);

    var raw = JSON.stringify({
      name: ThemeName,
      color: ThemeColor,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      process.env.REACT_APP_PAYMENT_GATEWAY_BASE_URL + "themes/new",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.message === "Successfully Created Theme") {
          getThemes();
          setThemeModal(false);
          toast.success(`${result.message}`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getReqDocuments();
    getSubscription();
    getThemes();
  }, []);

  return (
    <div className="flex flex-col gap-[17px]">
      {/* Verification Documents */}
      <div className="flex flex-col gap-[17px]">
        <h6 className="font-semibold text-sm text-black">
          Verification Documents
        </h6>
        <div className="flex flex-wrap gap-4 items-center">
          {doc.map((el, i) => {
            return (
              <div className="form-check custom-checkbox mb-2" key={i}>
                <input
                  type="checkbox"
                  className="form-check-input border-1 border-[#0aa1dd]"
                  id={el.name}
                  name="subscriptionGroup"
                />
                <label
                  className="form-check-label text-[14px] text-[#545454] font-semibold"
                  htmlFor={el.name}
                >
                  {el.name}
                </label>
              </div>
            );
          })}
          <button className="mb-2" onClick={handleShow}>
            <i className="bi bi-plus-square-fill text-[#0aa1dd] text-lg font-semibold"></i>
          </button>
        </div>
      </div>
      {/* Subscription */}
      <div className="flex flex-col gap-[17px]">
        <h4 className="font-semibold text-sm text-black text-[14px]">
          Subscription
        </h4>
        <div className="flex flex-col gap-2.5 bg-white rounded-xl p-3 w-[80%] md:w-1/2 lg:w-1/4 relative">
          {Subscription &&
            Subscription.map((el, i) => {
              return (
                <div key={i}>
                  <div className="flex gap-11 items-center">
                    <h6 className="text-[14px] font-semibold">
                      {el.duration} Months
                    </h6>
                    <h6 className="text-[#888] text-[14px] font-semibold">
                      {el.amount} KWD
                      <button className="ml-2" onClick={() => updateSubs(el)}>
                        <i className="bi bi-pencil-square text-[#0aa1dd] text-base"></i>
                      </button>
                    </h6>
                  </div>
                </div>
              );
            })}
          <div className="absolute top-2 right-3">
            <button onClick={() => setshowSubsModal(true)}>
              <i className="bi bi-plus-square-fill text-[#0aa1dd] text-lg font-semibold"></i>
            </button>
          </div>
        </div>
      </div>
      {/* Invoice Theme */}
      <div>
        <h4 className="font-semibold text-sm text-black text-[14px]">
          Invoice Theme
        </h4>
        <div className="flex flex-wrap gap-5 items-center">
          {theme &&
            theme.map((el, i) => {
              return (
                <div key={i}>
                  <img
                    src={
                      el.color === "orange"
                        ? orange
                        : el.color === "red"
                        ? red
                        : el.color === "green"
                        ? green
                        : purple
                    }
                    alt=""
                  />
                  <div className="form-check custom-checkbox ml-3">
                    <input
                      type="checkbox"
                      className="form-check-input border-1 border-[#0aa1dd]"
                      id={el.name}
                      name="subscriptionGroup"
                    />
                    <label
                      className="form-check-label text-[14px] text-[#545454] font-semibold"
                      htmlFor={el.name}
                    >
                      {el.name}
                    </label>
                  </div>
                </div>
              );
            })}
          <button onClick={() => setThemeModal(true)}>
            <i className="bi bi-plus-square-fill text-[#0aa1dd] text-lg font-semibold"></i>
          </button>
        </div>
      </div>
      {/* Modals */}
      {/* Document Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Verification Document.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="document">Enter document name:</label>
          <div className="relative">
            <input
              type="text"
              className={`${
                InputError === true
                  ? "border border-red-500 placeholder:text-red-500"
                  : "border border-gray-200"
              } rounded-lg p-2 w-full`}
              placeholder="eg. driving License"
              onChange={(e) => setDocumentName(e.target.value)}
            />
            {InputError === true && (
              <div className="absolute top-2 right-2">
                <i className="bi bi-info-circle text-red-500"></i>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className={`bg-gray-400 py-2.5 px-5 rounded-lg text-white`}
            onClick={handleClose}
            onChange={(e) => setDocumentName(e.target.value)}
          >
            Close
          </button>
          <button
            className="bg-[#0aa1dd] text-white py-2.5 px-5 rounded-lg"
            onClick={createDocument}
          >
            Add Document
          </button>
        </Modal.Footer>
      </Modal>
      {/* Subscription Modal */}
      <Modal show={showSubsModal} onHide={() => setshowSubsModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Subscription.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="document">Enter subscription duration:</label>
          <div className="relative">
            <input
              type="number"
              className={`${
                InputError === true
                  ? "border border-red-500 placeholder:text-red-500"
                  : "border border-gray-200"
              } rounded-lg p-2 w-full`}
              placeholder="eg. 03"
              onChange={(e) => setSubDuration(e.target.value)}
            />
            {InputError === true && (
              <div className="absolute top-2 right-2">
                <i className="bi bi-info-circle text-red-500"></i>
              </div>
            )}
          </div>
          <label htmlFor="document" className="mt-2">
            Enter subscription value:
          </label>
          <div className="relative">
            <input
              type="text"
              className={`${
                InputError === true
                  ? "border border-red-500 placeholder:text-red-500"
                  : "border border-gray-200"
              } rounded-lg p-2 w-full`}
              placeholder="eg. 499"
              onChange={(e) => setSubValue(e.target.value)}
            />
            {InputError === true && (
              <div className="absolute top-2 right-2">
                <i className="bi bi-info-circle text-red-500"></i>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className={`bg-gray-400 py-2.5 px-5 rounded-lg text-white`}
            onClick={() => setshowSubsModal(false)}
          >
            Close
          </button>
          <button
            className="bg-[#0aa1dd] text-white py-2.5 px-5 rounded-lg"
            onClick={createSubscription}
          >
            Add Subscription
          </button>
        </Modal.Footer>
      </Modal>
      {/* Subscription Update Modal */}
      <Modal show={SubsUpdateModal} onHide={() => setSubsUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Subscription.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="document" className="mt-2">
            Enter subscription value:
          </label>
          <div className="relative">
            <input
              type="text"
              className={`${
                InputError === true
                  ? "border border-red-500 placeholder:text-red-500"
                  : "border border-gray-200"
              } rounded-lg p-2 w-full`}
              placeholder="eg. 499"
              value={SubValue}
              onChange={(e) => setSubValue(e.target.value)}
            />
            {InputError === true && (
              <div className="absolute top-2 right-2">
                <i className="bi bi-info-circle text-red-500"></i>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className={`bg-gray-400 py-2.5 px-5 rounded-lg text-white`}
            onClick={() => setSubsUpdateModal(false)}
          >
            Close
          </button>
          <button
            className="bg-[#0aa1dd] text-white py-2.5 px-5 rounded-lg"
            onClick={updateSubscription}
          >
            Update Subscription
          </button>
        </Modal.Footer>
      </Modal>
      {/* Theme Modal */}
      <Modal show={ThemeModal} onHide={() => setThemeModal(true)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Theme.</Modal.Title>
        </Modal.Header>
        <Modal.Body className="flex flex-col gap-3">
          <div>
            <label htmlFor="document">Enter theme name:</label>
            <div className="relative">
              <input
                type="text"
                className={`${
                  InputError === true
                    ? "border border-red-500 placeholder:text-red-500"
                    : "border border-gray-200"
                } rounded-lg p-2 w-full`}
                placeholder="eg. driving License"
                onChange={(e) => setThemeName(e.target.value)}
              />
              {InputError === true && (
                <div className="absolute top-2 right-2">
                  <i className="bi bi-info-circle text-red-500"></i>
                </div>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="document">Enter theme color:</label>
            <div className="relative">
              <input
                type="text"
                className={`${
                  InputError === true
                    ? "border border-red-500 placeholder:text-red-500"
                    : "border border-gray-200"
                } rounded-lg p-2 w-full`}
                placeholder="eg. driving License"
                onChange={(e) => setThemeColor(e.target.value)}
              />
              {InputError === true && (
                <div className="absolute top-2 right-2">
                  <i className="bi bi-info-circle text-red-500"></i>
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className={`bg-gray-400 py-2.5 px-5 rounded-lg text-white`}
            onClick={() => setThemeModal(false)}
          >
            Close
          </button>
          <button
            className="bg-[#0aa1dd] text-white py-2.5 px-5 rounded-lg"
            onClick={createTheme}
          >
            Add theme
          </button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default SuperAdminSetting;
