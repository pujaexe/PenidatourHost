// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2 12c0 .385.312.698.698.698H4.59a7.444 7.444 0 006.712 6.712v1.892a.698.698 0 001.396 0V19.41a7.444 7.444 0 006.712-6.712h1.892a.698.698 0 000-1.396H19.41a7.444 7.444 0 00-6.712-6.712V2.698a.698.698 0 00-1.396 0V4.59a7.444 7.444 0 00-6.712 6.712H2.698A.698.698 0 002 12zm6.512 0a3.488 3.488 0 116.976 0 3.488 3.488 0 01-6.976 0z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M9.907 12a2.093 2.093 0 114.186 0 2.093 2.093 0 01-4.186 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
