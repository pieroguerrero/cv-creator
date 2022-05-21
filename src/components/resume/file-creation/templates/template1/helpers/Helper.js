import React from "react";
import { Text, Link } from "@react-pdf/renderer";
import uniqid from "uniqid";
import { TextItem } from "../TextItem";

const Helper = (() => {
  /**
   *
   * @param {string} strName
   * @param {string} strURL
   * @param {object} objStyle
   * @returns
   */
  const getURLName = (strName, strURL, objStyle) => {
    if (!strURL || (strURL && strURL.length === 0)) {
      return <Text style={objStyle}>{strName}</Text>;
    } else {
      return (
        <Link
          style={[objStyle, { textDecoration: "none" }]}
          src={
            "https://www." + strURL.replace("https://", "").replace("www.", "")
          }
        >
          {strName}
        </Link>
      );
    }
  };

  /**
   *
   * @param {string} strText
   * @param {object} style
   * @returns
   */
  const getTextList = (strText, style) => {
    const arrText = strText.trim().split("+");
    const jsxResult = (
      <>
        {arrText
          .filter((strBullet) => strBullet.length > 0)
          .map((strBullet) => (
            <TextItem
              key={uniqid()}
              strTextContent={strBullet}
              objStyle={style}
            />
          ))}
      </>
    );

    return jsxResult;
  };

  return { getURLName, getTextList };
})();

export { Helper };
