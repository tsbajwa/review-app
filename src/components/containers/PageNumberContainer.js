import React from "react";

export default function PageNumberContainer({ pageNumbers, onClick }) {
  return (
    <div className="page-number-container">
      {pageNumbers.map(number => {
        return (
          <li className="page-number-container__li" key={number} onClick={() => onClick(number)}>
            {number}
          </li>
        );
      })}
    </div>
  );
}
