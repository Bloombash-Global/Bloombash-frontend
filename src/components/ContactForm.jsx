import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
      // TODO (Ticket 2): replace with
      // const { error } = await supabase.from("contact_messages").insert([{
      //   name: formData.name,
      //   email: formData.email,
      //   subject: formData.subject,
      //   message: formData.message,
      // }]);

      await new Promise(res => setTimeout(res, 800)); // placeholder delay

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);

      setFormData({ name: "", email: "", subject: "", message: "" });
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
    <div className='bg-gray-100 rounded-2xl px-6 py-5 md:p-10 border-gray-100'>
      <h2 className='text-3xl font-bold text-gray-900 mb-2'>
        Send us a message
      </h2>

      <p className='text-gray-600 mb-8'>
        Fill out the form below and our team will get back to you.
      </p>

      {submitted && (
        <div className='mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800'>
          Thanks, we'll be in touch!
        </div>
      )}

      {submitError && (
        <div className='mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800'>
          Unable to submit. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div>
          <label className='block text-sm font-semibold text-gray-900 mb-2'>
            Name
          </label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Your full name'
            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-900 mb-2'>
            Email
          </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='you@example.com'
            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-900 mb-2'>
            Subject
          </label>
          <input
            type='text'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='How can we help?'
            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
          />
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-900 mb-2'>
            Message
          </label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Leave us a message...'
            rows={5}
            className='w-full px-4 py-3 rounded-xl border border-gray-200 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none'
          />
        </div>

        <button
          type='submit'
          disabled={submitting}
          className='cursor-pointer w-full bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition-colors'>
          {submitting ? "Sending..." : "Get Started"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
