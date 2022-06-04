import * as React from "react";

function Header(props) {
  return (
    <div>
      <div className="fixed bg-white top-0 left-0 p-8 w-full z-50 border-b">
        <div className="font-bold">{props.children}</div>
      </div>
      <div className="pb-[150px]"></div>
    </div>
  );
}

export default Header;
