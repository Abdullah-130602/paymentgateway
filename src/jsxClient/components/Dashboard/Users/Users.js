import React from "react";
import team1 from "../../../../images/team/team1.png";
import team2 from "../../../../images/team/team2.png";
import Form from "react-bootstrap/Form";

const users = [
  {
    userNo: "01",
    Name: "Mohammed Harish",
    img: team1,
    Mobile: "+965 7546 9821",
    Email: "cryptographicsolution@gmail.com",
  },
  {
    userNo: "02",
    Name: "Zaheer Khan",
    img: team2,
    Mobile: "+965 7546 9821",
    Email: "zaheerkh@gmail.com",
  },
];

const Users = () => {
  return (
    <div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> */}
      <div className="flex items-center gap-10 flex-wrap">
        {users.map((el, i) => {
          return (
            <div className="bg-white p-7 rounded-2xl" key={i}>
              <div className="flex gap-4 items-center">
                <div>
                  <img src={el.img} alt="" />
                </div>
                <div>
                  <h6 className="text-[#333] text-sm">User {el.userNo}</h6>
                  <h6 className="text-[#333] font-semibold tracking-wider">
                    {el.Name}
                  </h6>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M15.7285 9.43725C15.7282 7.76874 15.0652 6.16867 13.8854 4.98886C12.7056 3.80904 11.1055 3.14609 9.437 3.14575V4.40405C10.4324 4.40428 11.4053 4.69952 12.233 5.25248C13.0606 5.80544 13.7058 6.59131 14.087 7.51079C14.34 8.12155 14.4702 8.77616 14.4702 9.43725H15.7285ZM3.14551 8.17895V5.0332C3.14551 4.86634 3.21179 4.70631 3.32978 4.58832C3.44777 4.47034 3.6078 4.40405 3.77466 4.40405H6.9204C7.08726 4.40405 7.24729 4.47034 7.36528 4.58832C7.48327 4.70631 7.54955 4.86634 7.54955 5.0332V7.5498C7.54955 7.71666 7.48327 7.87668 7.36528 7.99467C7.24729 8.11266 7.08726 8.17895 6.9204 8.17895H5.66211C5.66211 9.51383 6.19239 10.794 7.13629 11.738C8.0802 12.6819 9.36041 13.2121 10.6953 13.2121V11.9538C10.6953 11.787 10.7616 11.627 10.8796 11.509C10.9976 11.391 11.1576 11.3247 11.3244 11.3247H13.841C14.0079 11.3247 14.1679 11.391 14.2859 11.509C14.4039 11.627 14.4702 11.787 14.4702 11.9538V15.0996C14.4702 15.2664 14.4039 15.4265 14.2859 15.5445C14.1679 15.6625 14.0079 15.7287 13.841 15.7287H10.6953C6.52593 15.7287 3.14551 12.3483 3.14551 8.17895Z"
                        fill="#0AA1DD"
                      />
                      <path
                        d="M12.9239 7.99272C13.1138 8.45063 13.2115 8.94152 13.2114 9.43725H12.079C12.079 9.09022 12.0107 8.74657 11.878 8.42594C11.7452 8.10531 11.5506 7.81398 11.3052 7.56859C11.0598 7.3232 10.7685 7.12856 10.4478 6.9958C10.1272 6.86303 9.78356 6.79474 9.43652 6.79482V5.66235C10.1831 5.66239 10.9129 5.88381 11.5337 6.29861C12.1544 6.71341 12.6382 7.30297 12.9239 7.99272Z"
                        fill="#0AA1DD"
                      />
                      <rect
                        x="0.393218"
                        y="0.393218"
                        width="18.088"
                        height="18.088"
                        rx="3.53896"
                        stroke="#0AA1DD"
                        stroke-width="0.786437"
                      />
                    </svg>
                    <h6 className="text-[#333] text-sm mt-1">{el.Mobile}</h6>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M15.7295 13.495V5.63061C15.7295 4.90534 15.2338 4.31989 14.6199 4.31989H4.2561C3.64211 4.31989 3.14648 4.90534 3.14648 5.63061V13.495C3.14648 14.2202 3.64211 14.8057 4.2561 14.8057H14.6199C15.2338 14.8057 15.7295 14.2202 15.7295 13.495ZM14.7604 5.53449C15.0045 5.82285 14.8714 6.11995 14.7382 6.2685L11.7349 9.5191L14.6199 13.0668C14.7086 13.1891 14.7678 13.3814 14.6642 13.5125C14.5681 13.6523 14.3462 13.6435 14.25 13.5561L11.0173 10.2968L9.43428 12.0007L7.85863 10.2968L4.62597 13.5561C4.5298 13.6435 4.30788 13.6523 4.21171 13.5125C4.10815 13.3814 4.16733 13.1891 4.2561 13.0668L7.14108 9.5191L4.13774 6.2685C4.00458 6.11995 3.87143 5.82285 4.11554 5.53449C4.35966 5.24613 4.61117 5.38594 4.8183 5.59566L9.43428 9.99971L14.0577 5.59566C14.2648 5.38594 14.5163 5.24613 14.7604 5.53449Z"
                        fill="#0AA1DD"
                      />
                      <rect
                        x="0.393218"
                        y="0.518707"
                        width="18.088"
                        height="18.088"
                        rx="3.53896"
                        stroke="#0AA1DD"
                        stroke-width="0.786437"
                      />
                    </svg>
                    <h6 className="text-[#333] text-sm mt-1">
                      {el.Email}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[22px] mt-[24px]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-[500] text-sm text-[#333]">
                      View all invoice
                    </p>
                    <figcaption className="text-[#333] text-[10px]">
                      Can able to view all invoices
                    </figcaption>
                  </div>
                  <div>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      onstyle="success"
                      offstyle="default"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-[500] text-sm text-[#333]">
                      View created invoice only
                    </p>
                    <figcaption className="text-[#333] text-[10px]">
                      Only able to view invoices that this user created.
                    </figcaption>
                  </div>
                  <div>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      // label="Check this switch"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-[500] text-sm text-[#333]">
                      Edit Invoices
                    </p>
                    <figcaption className="text-[#333] text-[10px]">
                      Only able to edit invoices that this user created.
                    </figcaption>
                  </div>
                  <div>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      // label="Check this switch"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between mt-[42px]">
                  <div>
                    <p className="font-[500] text-sm text-red-500">Disable</p>
                    <figcaption className="text-[#333] text-[10px]">
                      Disable this user until turn on.
                    </figcaption>
                  </div>
                  <div>
                    <Form.Check // prettier-ignore
                      type="switch"
                      id="custom-switch"
                      // label="Check this switch"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
