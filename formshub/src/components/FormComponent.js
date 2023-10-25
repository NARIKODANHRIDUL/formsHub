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
    <form className='flex flex-col gap-4 text-6xl max-w-5xl mx-auto py-10' onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
        required
      />
      <select
        name="dropDownQuestion"
        value={formData.dropDownQuestion}
        onChange={handleChange}
      >
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <button className='text-left' type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
