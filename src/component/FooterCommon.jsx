import React from 'react'


export const FooterCommonLink1 = () => {
  const links = [
    "How it works",
    "Featured",
    "Partnership",
    "Business Relation",
  ];

  return (
    <div>
      <h4 className="md:text-xl text-base text-[#1A202C] font-semibold mb-3">
        Company
      </h4>

      <ul className="space-y-2">
        {links.map((item, index) => (
          <li
            key={index}
            className="text-sm text-gray-600 hover:text-black cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};


export const FooterCommonLink2 = () => {
  const links = [
    "Events",
    "Blog",
    "Podcast",
    "Invite a friend",
  ];

  return (
    <div>
      <h4 className="md:text-xl text-base text-[#1A202C] font-semibold mb-3">
       Community
      </h4>

      <ul className="space-y-2">
        {links.map((item, index) => (
          <li
            key={index}
            className="text-sm text-gray-600 hover:text-black cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};


export const FooterCommonLink3 = () => {
  const links = [
    "Discord",
    "Instagram",
    "Twitter",
    "Facebook",
  ];

  return (
    <div>
      <h4 className="md:text-xl text-base text-[#1A202C] font-semibold mb-3">
      Socials
      </h4>

      <ul className="space-y-2">
        {links.map((item, index) => (
          <li
            key={index}
            className="text-sm text-gray-600 hover:text-black cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

