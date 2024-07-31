import React from 'react';

const CommitteesContent = () => {
  return (
    <div className="w-64 bg-white p-6 shadow-xl">
      <div className="mb-3 space-y-3">
        <h3 className="font-semibold text-lg">Organizing Committee</h3>
        <p>Details about the Organizing Committee will be added here.</p>
      </div>
      <div className="mb-6 space-y-3">
        <h3 className="font-semibold text-lg">Technical Committee</h3>
        <p>Details about the Technical Committee will be added here.</p>
      </div>
    </div>
  );
};

export { CommitteesContent };
