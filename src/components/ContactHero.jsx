import ContactInfoCard from "./ContactInfoCard"
import Mail from "../assets/Mail.png"
import Phone from "../assets/Phone.png"
import useInView from "../hooks/useInView"

function ContactHero() {
  const [sectionRef, isInView] = useInView({
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  })
  const visible = isInView ? "anim-visible" : ""

  return (
    <div ref={sectionRef}>
      <span className={`anim-hidden anim-fade-down inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1 text-sm font-medium text-purple-600 ${visible}`}>
        <span className="h-2 w-2 rounded-full bg-purple-600" />
        GET IN TOUCH
      </span>

      <h1 className={`anim-hidden anim-fade-down mt-4 text-4xl font-bold text-gray-900 md:text-5xl ${visible} anim-delay-1`}>We're here to help</h1>

      <p className={`anim-hidden anim-fade-up mt-4 max-w-md text-gray-500 ${visible} anim-delay-2`}>Have a general inquiry, partnership proposal, or just want to say hello? Reach out to the Bloombash team directly.</p>

      <div className="mt-8 space-y-4">
        <div className={`anim-hidden anim-fade-up ${visible} anim-delay-3`}>
          <ContactInfoCard icon={<img src={Mail} alt="Email" className="h-5 w-5" />} title="Email Us">
            Our friendly team is here to help
            <br />
            <a href="mailto:hello@bloombashglobal.com" className="text-purple-600 hover:underline">
              hello@bloombashglobal.com
            </a>
          </ContactInfoCard>
        </div>

        <div className={`anim-hidden anim-fade-up ${visible} anim-delay-5`}>
          <ContactInfoCard icon={<img src={Phone} alt="Phone" className="h-5 w-5" />} title="Call Us">
            Mon-Fri from 8am-5pm
            <br />
            +234 907 462 7550
          </ContactInfoCard>
        </div>
      </div>
    </div>
  )
}
export default ContactHero
