"use client";

import React, { useEffect } from "react";
import classNames from "classnames";
import { mergeClasses } from "../../core/utils";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import "./Scrim.css";

const Scrim = ({ styles = {}, classes = [], active = false, handleClick = () => {}, children }) => {
  const _styles = Object.assign({}, styles);

  const handleKeyPress = (e) => {
    if (e.key === "Escape" || e.code === "Escape") {
      if (handleClick) handleClick();
    }
  };

  const onClick = (e) => {
    if (handleClick) handleClick();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });

  if (typeof document !== "undefined") active ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <div onClick={onClick} style={_styles} className={classNames(mergeClasses(["scrim", active ? "active" : ""], classes))}>
      {children}
    </div>
  );
};

export default Scrim;
