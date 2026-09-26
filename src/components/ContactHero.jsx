import ContactInfoCard from "./ContactInfoCard";
import Mail from "../assets/Mail.png";
import Location from "../assets/Location.png";
import Phone from "../assets/Phone.png";

function ContactHero() {
  return (
    <div>
      <span className='inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1 text-sm font-medium text-purple-600'>
        <span className='h-2 w-2 rounded-full bg-purple-600' />
        GET IN TOUCH
      </span>

      <h1 className='mt-4 text-4xl font-bold text-gray-900 md:text-5xl'>
        We're here to help
      </h1>

      <p className='mt-4 max-w-md text-gray-500 font-poppins text-sm'>
        Have a general inquiry, partnership proposal, or just want to say hello?
        Reach out to the Bloombash team directly.
      </p>

      <div className='mt-8 space-y-4'>
        <ContactInfoCard
          icon={<img src={Mail} alt='Email' className='h-5 w-5' />}
          title='Email Us'>
          Our friendly team is here to help
          <br />
          <a
            href='mailto:admin@bloombashglobal.com'
            className='text-purple-600 hover:underline'>
            admin@bloombashglobal.com
          </a>
        </ContactInfoCard>

        <ContactInfoCard
          icon={<img src={Location} alt='Location' className='h-6 w-5' />}
          title='Global HQ'>
          Come say hello at our office.
          <br />
          100 Innovation Drive, Tech District
          <br />
          San Francisco, CA 94105
        </ContactInfoCard>

        <ContactInfoCard
          icon={<img src={Phone} alt='Phone' className='h-5 w-5' />}
          title='Call Us'>
          Mon-Fri from 8am-5pm
          <br />
          +234 9074 6275 50
        </ContactInfoCard>
      </div>
    </div>
  );
}
export default ContactHero;
