import React from "react";
import { useSelector } from "react-redux";

 const FormData = () => {
  const formData = useSelector((state) => state.contact.formData);

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Submitted Form Data
      </h2>
      {formData.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {formData.map((submission, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-700">
                Submission {index + 1}
              </h3>
              <div className="space-y-4">
                {Object.entries(submission).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center bg-gray-50 px-4 py-3 rounded-md border"
                  >
                    <span
                      className="font-medium text-gray-700 capitalize"
                      style={{ minWidth: "150px" }}
                    >
                      {key}
                    </span>
                    <span className="text-gray-600 flex-1">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No data submitted yet.</p>
      )}
    </div>
  );
};

export default FormData;