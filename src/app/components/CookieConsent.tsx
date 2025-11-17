"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { X } from "lucide-react";

const XPay = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleConsent = (value: "accepted" | "declined") => {
    Cookies.set("cookie_consent", value, { expires: 365 });
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 max-w-md w-[90%] bg-white border border-gray-200 shadow-xl rounded-2xl p-5 z-50 flex flex-col gap-3">
      {/* Close button */}
      <button
        onClick={() => setShow(false)}
        className="absolute text-gray-400 top-3 right-3 hover:text-gray-600"
        aria-label="Close cookie banner"
      >
        <X size={18} />
      </button>

      {/* Message */}
      <p className="text-sm leading-relaxed text-center text-gray-700">
        🍪 We use cookies to make your experience better. You can accept or
        decline — it's your choice.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-3 mt-2">
        <button
          onClick={() => handleConsent("declined")}
          className="px-4 py-2 text-sm text-black transition border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
        >
          Decline
        </button>
        <button
          onClick={() => handleConsent("accepted")}
          className="px-4 py-2 text-sm text-white transition bg-[#FFC300] rounded-lg hover:bg-[#CC9900] cursor-pointer"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default XPay;
