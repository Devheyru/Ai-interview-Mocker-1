import React from "react";

function Footer() {
  return (
    <footer className="sticky bottom-0 z-50 flex flex-col bg-teal-100 text-gray-900 shadow-md">
      <div className=" flex p-4 items-center justify-between  top-0">
        <div>Made with ❤️ by Dave Heyru</div>
        <div>
          <img src="/Abushe-Photoroom.jpg" alt="my logo" width={30} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
