import { useState } from "react";
import Dropdown from "../components/Dropdown";

function ProjectForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    buildType: "Custom Software/Web App",
    projectDetails: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: confirm submission target with Babajide (email service, backend endpoint, etc.)
    console.log("Project request submitted:", formData);
  };

  return (
    <div className='bg-gray-50 rounded-2xl p-10 border border-gray-100'>
      <h2 className='text-3xl font-bold text-gray-900 mb-2'>
        Let's build together
      </h2>
      <p className='text-gray-600 mb-8'>
        Fill out the form below and our technical leads will reach out.
      </p>

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-semibold text-gray-900 mb-2'>
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              placeholder='Jane'
              className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-900 mb-2'>
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              placeholder='Doe'
              className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-900 mb-2'>
            Work Email
          </label>
          <input
            type='email'
            name='workEmail'
            value={formData.workEmail}
            onChange={handleChange}
            placeholder='jane@company.com'
            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-900 mb-2'>
            What are you looking to build ?
          </label>
          <Dropdown
            value={formData.buildType}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-900 mb-2'>
            Project Details
          </label>
          <textarea
            name='projectDetails'
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder='Tell us a bit about your timelines, goals, and any specific requirements...'
            rows={5}
            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 rounded-xl transition-colors'>
          Submit Project Request
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;
