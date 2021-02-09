import React from "react";

const JournalEntries = ({ entries }) => {
  const COLORS = [
    "surface-blue",
    "surface-red",
    "surface-green",
    "surface-orange"
  ];

  const getEntryColor = (index) => COLORS[index % COLORS.length];

  return (
    <div className="surface">
      <ul className="entries-list">
        {entries.map((entry, index) => (
          <li key={entry} className={`entry ${getEntryColor(index)}`}>
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JournalEntries;
