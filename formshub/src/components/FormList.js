import { useEffect, useState } from 'react';

const FormList = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/get');
      const data = await res.json();
      setFormData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  if (!Array.isArray(formData)) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Form Data</h2>
      <ul>
        {formData.map((form, index) => (
          <li key={index}>
            <p>Email: {form.email}</p>
            <p>Name: {form.name}</p>
            <p>Phone Number: {form.phoneNumber}</p>
            <p>Drop Down Question: {form.dropDownQuestion}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;
