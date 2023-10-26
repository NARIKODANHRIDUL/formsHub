import { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phoneNumber: '',
    dropDownQuestion: 'Option 1', // Default option
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        // Handle success
        console.log('Form data submitted successfully');
        // Reset the form fields
        setFormData({
          email: '',
          name: '',
          phoneNumber: '',
          dropDownQuestion: 'Option 1',
        });
      } else {
        // Handle error
        const data = await res.json();
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="max-w-xl mx-auto p-6 bg-white shadow-md rounded">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Submit the form</h2>
        <p className="text-sm text-gray-500">Form description goes here</p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
          Email
        </label>
        <input
          className="w-full border rounded-md p-2 text-sm text-gray-700"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
          Name
        </label>
        <input
          className="w-full border rounded-md p-2 text-sm text-gray-700"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          className="w-full border rounded-md p-2 text-sm text-gray-700"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Your phone number"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="dropDownQuestion">
          Dropdown Question
        </label>
        <select
          className="w-full border rounded-md p-2 text-sm text-gray-700"
          name="dropDownQuestion"
          value={formData.dropDownQuestion}
          onChange={handleChange}
        >
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>

      <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
