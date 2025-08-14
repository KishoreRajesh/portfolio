import { useState } from "react";

const CopyMailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "kishorerajesh007@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={copyToClipboard}
      className="relative flex items-center justify-center gap-2 px-4 py-3 text-sm rounded-full font-extralight bg-primary w-[12rem] cursor-pointer transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      <img src="assets/copy.svg" className="w-5" alt="copy icon" />
      {copied ? "Copied!" : "Copy Email Address"}
    </button>
  );
};

export default CopyMailButton;