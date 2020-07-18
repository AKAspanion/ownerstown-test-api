import React from "react";

import Icon from "@mdi/react";
import { mdiMinus, mdiPhoneCancel, mdiPhoneHangup } from "@mdi/js";

import { Button } from "../components";
import "./MainPage.css";

function MainPage() {
  const bindings = [
    { value: 1, binding: "@.?" },
    { value: 2, binding: "abc" },
    { value: 3, binding: "def" },
    { value: 4, binding: "ghi" },
    { value: 5, binding: "jkl" },
    { value: 6, binding: "mno" },
    { value: 7, binding: "pqrs" },
    { value: 8, binding: "tuv" },
    { value: 9, binding: "wxyz" },
    { value: "✱", binding: "", valueClass: "asterix" },
    { value: "0", binding: "" },
    { value: "#", binding: "" },
  ];
  return (
    <div className="feature-phone__wrapper">
      <div className="feature-phone__screen">
        <div className="feature-phone__background"></div>
        <div className="feature-phone__display"></div>
        <div className="feature-phone__name">NOKAI</div>
        <div className="feature-phone__grill"></div>
      </div>

      <div className="feature-phone__buttons-wrapper">
        <div className="feature-phone__buttons">
          <div className="feature-phone__dummy-buttons">
            <div>
              <Button icon={<Icon path={mdiMinus} size={1.2} />} />
              <Button
                style={{ marginTop: "4px" }}
                icon={
                  <Icon
                    style={{ marginBottom: "4px" }}
                    path={mdiPhoneHangup}
                    size={0.7}
                  />
                }
              />
            </div>
            <Button center />
            <div>
              <Button icon={<Icon path={mdiMinus} size={1.2} />} />
              <Button
                style={{ marginTop: "4px" }}
                icon={
                  <Icon
                    style={{ transform: "rotate(135deg)", marginBottom: "4px" }}
                    path={mdiPhoneCancel}
                    size={0.7}
                  />
                }
              />
            </div>
          </div>

          {bindings.map((binding, index) => (
            <Button key={index} {...binding} />
          ))}
        </div>
      </div>
      <div className="feature-phone__mic-wrapper">
        <div className="feature-phone__mic"></div>
      </div>
    </div>
  );
}

export default MainPage;
