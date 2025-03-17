interface InputFieldProps {
    label: string;
    type: string;
    placeholder: string;
  }
  
  export default function InputField({ label, type, placeholder }: InputFieldProps) {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
    );
  }
  