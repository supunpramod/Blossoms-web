import React from "react";

/* ---------------------- Reusable Icon Wrapper ---------------------- */
const BaseIcon = ({ children, className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    {children}
  </svg>
);

/* ---------------------- Icons ---------------------- */
const DocumentIcon = ({ className }) => (
  <BaseIcon className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.25l-7.5-7.5-7.5 7.5v2.25m7.5-10.5v15M14.25 4.5 16 2.25M14.25 4.5l-2.25 2.25M12 9v7.5"
    />
  </BaseIcon>
);

const PaymentIcon = ({ className }) => (
  <BaseIcon className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 8.25h19.5M2.25 15.75h19.5M7.5 8.25V5.25a2.25 2.25 0 012.25-2.25h4.5A2.25 2.25 0 0116.5 5.25v3M12 18h.75M12 21h.75M12 3h.75"
    />
  </BaseIcon>
);

const WishListIcon = ({ className }) => (
  <BaseIcon className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5C14.453 3.75 12 6.177 12 8.25s-2.453 4.5-4.312 4.5C5.099 12.75 3 10.742 3 8.25c0-2.485 2.099-4.5 4.688-4.5C9.547 3.75 12 6.177 12 8.25s2.453 4.5 4.312 4.5C18.901 12.75 21 10.742 21 8.25Z"
    />
  </BaseIcon>
);

const CouponIcon = ({ className }) => (
  <BaseIcon className={className}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 6V4.5a1.5 1.5 0 00-3 0V6a1.5 1.5 0 01-3 0V4.5a1.5 1.5 0 00-3 0V6m9 0h-9"
    />
  </BaseIcon>
);

const ArrowRight = () => (
  <svg
    className="ml-auto w-4 h-4 text-gray-400 group-hover:text-purple-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
  </svg>
);

/* ---------------------- Static Data ---------------------- */
const menuItems = [
  { icon: DocumentIcon, label: "My Orders", href: "#" },
  { icon: PaymentIcon, label: "Payment", href: "#" },
  { icon: WishListIcon, label: "Wish List", href: "#" },
  { icon: CouponIcon, label: "My Coupons", href: "#" },
];

const settingItems = [
  { label: "Settings", href: "#" },
  { label: "Return & Refund Policy", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "Disputes & Reports", href: "#" },
];

/* ---------------------- Main Component ---------------------- */
const Account = ({ isAuthenticated, onSignIn, onRegister }) => {
  return (
    <div className=" bg-white overflow-hidden rounded-2xl font-sans ">
      
      {/* Header */}
      <div className="p-6 bg-white">
        {!isAuthenticated && (
          <div className="space-y-3 pt-2">
            <button
              onClick={onSignIn}
              className="w-full h-10 bg-primary hover:bg-purple-700 text-white font-semibold rounded-lg text-sm shadow-md"
            >
              Sign In
            </button>
            <button
              onClick={onRegister}
              className="w-full h-10 bg-white border border-tex hover:bg-purple-100 text-tex font-semibold rounded-lg text-sm"
            >
              Register
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-6 bg-white">
        
        {/* Menu */}
        <div>
          

          <div className="space-y-1">
            {menuItems.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} className="flex items-center p-3 rounded-lg hover:bg-purple-50 text-gray-700 group">
                <Icon className="w-5 h-5 mr-4 text-purple-500 group-hover:text-purple-700" />
                <span className="text-sm font-medium">{label}</span>
                <ArrowRight />
              </a>
            ))}
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Settings */}
        <div>
          

          <div className="space-y-2">
            {settingItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="block text-tex hover:text-purple-700 text-sm py-1.5"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Account;
