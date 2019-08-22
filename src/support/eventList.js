import React from "react";

export function EventList({ events }) {
  return (
    <div className={"EventsList"}>
      {events.map((e, idx) => (
        <div key={idx}>
          {idx}: {e.id} {e.type}
        </div>
      ))}
    </div>
  );
}
