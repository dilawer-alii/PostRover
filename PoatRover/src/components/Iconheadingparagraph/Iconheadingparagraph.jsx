import React from "react";

export default function iconheadingparagraph(props) {
  const { icon, heading, paragraph } = props;
  return (
    <>
      <div className="circle6">
        <div className="circle5">
          <div className="circle4">
            <div className="circle3">
              <div className="circle2">
                <div className="circle1">{icon}</div>
              </div>
              <div className="heading-in-circles">{heading}</div>
            </div>
          </div>
          <div className="paragraph-in-circles">{paragraph}</div>
        </div>
      </div>
    </>
  );
}
