import React from "react";

const JournalEntries = ({ entries }) => {
  const COLORS = [
    "surface-blue",
    "surface-red",
    "surface-green",
    "surface-orange"
  ];

  const getEntryColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

  return (
    <div className="surface">
      <ul className="entries-list">
        {entries.map((entry) => (
          <li key={entry} className={`entry ${getEntryColor()}`}>
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JournalEntries;
