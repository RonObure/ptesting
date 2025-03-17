export default function FileUpload({ label }: { label: string }) {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">{label}</label>
        <input
          type="file"
          className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    );
  }
  