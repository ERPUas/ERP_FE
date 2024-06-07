import React from "react";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-sm p-4 border border-gray-200 flex items-center justify-center">a</div>
      <div className="bg-white rounded-sm p-4 border border-gray-200 flex items-center justify-center">b</div>
      <div className="bg-white rounded-sm p-4 border border-gray-200 flex items-center justify-center">c</div>
      <div className="bg-white rounded-sm p-4 border border-gray-200 flex items-center justify-center">d</div>
    </div>
  );
};

export default Dashboard;
