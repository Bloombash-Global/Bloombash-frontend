import useInView from "../hooks/useInView"
import logo from "../assets/Bloombash Logo.png"
import twitter from "../assets/Twitter.png"
import linkedin from "../assets/LinkedIn.png"
import instagram from "../assets/Instagram.png"
import email from "../assets/Email.png"

const footerSections = [
  {
    title: "Services",
    links: ["Software Development", "AI Solutions", "Product Design", "IT Consulting", "Cloud Infrastructure"],
  },
  {
    title: "Industries",
    links: ["HealthTech", "FinTech", "AgriTech", "All Industries", "EduTech"],
  },
  {
    title: "Company",
    links: ["Careers", "Blog", "Press"],
  },
  {
    title: "Get In Touch",
    links: ["hello@bloombashglobal.com", "+234 907 482 7550", "Lagos, Nigeria", "Partner with us", "Book a call"],
  },
]

const socialIcons = [
  { icon: twitter, alt: "X", url: "https://x.com/bloombashglobal" },
  {
    icon: linkedin,
    alt: "LinkedIn",
    url: "https://www.linkedin.com/company/bloombash",
  },
  {
    icon: instagram,
    alt: "Instagram",
    url: "https://www.instagram.com/bloombash_global",
  },
  { icon: email, alt: "Email", url: "mailto:hello@bloombashglobal.com" },
]

function Footer() {
  const [brandRef, brandInView] = useInView({ threshold: 0.15 })
  const [linksRef, linksInView] = useInView({ threshold: 0.1 })
  const [bottomRef, bottomInView] = useInView({ threshold: 0.2 })

  return (
    <footer className="overflow-x-hidden bg-[#0E152C] pt-12 pb-6 text-white sm:pt-16 sm:pb-8 md:pt-20">
      <div className="mx-auto max-w-311.25 px-4 sm:px-6">
        {/* Top Footer */}
        <div className="flex flex-col justify-between gap-10 sm:gap-12 lg:flex-row lg:gap-16">
          {/* Brand */}
          <div ref={brandRef} className="max-w-76.75">
            <img
              src={logo}
              alt="Bloombash Logo"
              width={183}
              height={40}
              className={`h-8 w-auto cursor-pointer sm:h-10 ${brandInView ? "anim-visible" : "anim-hidden"}`}
              style={{
                animation: brandInView ? "fadeInLeft 0.7s cubic-bezier(0.22,1,0.36,1) both" : "none",
              }}
            />

            <p
              className={`mt-4 text-[14px] leading-6.5 font-medium text-white/70 sm:mt-5 sm:text-[15px] sm:leading-7.5 ${brandInView ? "anim-visible" : "anim-hidden"}`}
              style={{
                animation: brandInView ? "fadeInUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both" : "none",
              }}
            >
              Bringing ideas to life, nations, and the world. Your technology partner for innovation.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex gap-3 sm:mt-6 sm:gap-4">
              {socialIcons.map((social, index) => (
                <a
                  key={social.alt}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.alt}
                  className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-[10px] border border-[#87848B] bg-white/10 transition-colors duration-300 hover:bg-purple-600 sm:h-10 sm:w-10 ${brandInView ? "anim-visible" : "anim-hidden"}`}
                  style={{
                    animation: brandInView ? `scaleIn 0.5s cubic-bezier(0.22,1,0.36,1) ${0.3 + index * 0.08}s both` : "none",
                  }}
                >
                  <img src={social.icon} alt={social.alt} className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div ref={linksRef} className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-10 lg:gap-21.5">
            {footerSections.map((section, sectionIndex) => (
              <div
                key={section.title}
                className={`${linksInView ? "anim-visible" : "anim-hidden"}`}
                style={{
                  animation: linksInView ? `fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) ${sectionIndex * 0.1}s both` : "none",
                }}
              >
                <h3 className="mb-2 text-[15px] leading-6.5 font-semibold sm:mb-3 sm:text-[16px] sm:leading-7.5">{section.title}</h3>

                <ul className="space-y-1 sm:space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li
                      key={link}
                      className={`cursor-pointer text-[12px] leading-6.5 text-white/80 transition-colors hover:text-white sm:text-[14px] sm:leading-7.5 ${linksInView ? "anim-visible" : "anim-hidden"}`}
                      style={{
                        animation: linksInView ? `fadeIn 0.5s ease ${sectionIndex * 0.1 + linkIndex * 0.05 + 0.15}s both` : "none",
                      }}
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className={`my-6 h-px w-full bg-white/10 sm:my-8 md:my-10 ${bottomInView ? "anim-visible" : "anim-hidden"}`}
          style={{
            animation: bottomInView ? "growWidth 0.8s cubic-bezier(0.22,1,0.36,1) both" : "none",
            transformOrigin: "left center",
          }}
        />

        {/* Bottom */}
        <div
          ref={bottomRef}
          className={`flex flex-col items-center justify-between gap-3 text-center text-[12px] text-white/70 sm:flex-row sm:gap-5 sm:text-left sm:text-[13px] ${bottomInView ? "anim-visible" : "anim-hidden"}`}
          style={{
            animation: bottomInView ? "fadeInUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both" : "none",
          }}
        >
          <p>© 2025 Bloombash. All rights reserved. Built with purpose.</p>

          <div className="flex gap-6 sm:gap-8">
            <span className="cursor-pointer transition-colors hover:text-white">Privacy</span>
            <span className="cursor-pointer transition-colors hover:text-white">Terms</span>
            <span className="cursor-pointer transition-colors hover:text-white">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
