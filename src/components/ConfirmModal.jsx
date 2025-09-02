import { useEffect } from "react";

const ConfirmModal = ({ open, onClose, onConfirm, title, message }) => {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-10 z-50">
      <div className="bg-white w-96 rounded-lg shadow-lg p-6 relative">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-6 text-gray-600">{message}</p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
