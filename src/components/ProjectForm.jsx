import { useState } from "react";
import Dropdown from "../components/Dropdown";
import { supabase } from "../lib/supabase";

function ProjectForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    buildType: "Custom Software/Web App",
    projectDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setSubmitting(true);
    setSubmitted(false);
    setSubmitError(false);

    try {
      const { error } = await supabase
        .from("project_requests")
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            work_email: formData.workEmail,
            build_type: formData.buildType,
            project_details: formData.projectDetails,
          },
        ]);

      if (error) {
        console.error("Submission failed:", error);
        console.error("Error message:", error.message);
        console.error("Error status:", error.status);
        console.error("Error details:", error.details);
        console.error("Error hint:", error.hint);

        setSubmitError(true);

        setTimeout(() => {
          setSubmitError(false);
        }, 5000);

        return;
      }

      console.log("Project request submitted successfully");

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      setFormData({
        firstName: "",
        lastName: "",
        workEmail: "",
        buildType: "Custom Software/Web App",
        projectDetails: "",
      });
    } catch (error) {
      console.error("Unexpected submission error:", error);

      setSubmitError(true);

      setTimeout(() => {
        setSubmitError(false);
      }, 5000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className='bg-gray-50 rounded-2xl p-10 border border-gray-100'>
      <h2 className='text-3xl font-bold text-gray-900 mb-2'>
        Let's build together
      </h2>

      <p className='text-gray-600 mb-8'>
        Fill out the form below and our technical leads will reach out.
      </p>

      {submitted && (
        <div className='mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800'>
          Request submitted successfully.
        </div>
      )}

      {submitError && (
        <div className='mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800'>
          Unable to submit. Please try again.
        </div>
      )}

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

          <Dropdown value={formData.buildType} onChange={handleChange} />
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
          disabled={submitting}
          className='cursor-pointer w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors'>
          {submitting ? "Submitting..." : "Submit Project Request"}
        </button>
      </form>
    </div>
  );
}

export default ProjectForm;
