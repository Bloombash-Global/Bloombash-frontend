import { useParams, Link, Navigate } from "react-router-dom";
import { services, serviceOrder } from "../data/servicesData";

function ServiceDetail() {
  const { slug } = useParams();
  const service = services[slug];

  if (!service) return <Navigate to='/' replace />;

  return (
    <div className='bg-[#EAEAF8] min-h-screen py-10 px-6 md:px-16'>
      <Link
        to='/'
        className='flex items-center w-fit gap-2 text-slate-900 font-medium mb-8'>
        ← Back to Solutions
      </Link>

      <div className='grid md:grid-cols-[280px_1fr] gap-8 max-w-6xl mx-auto'>
        {/* Sidebar */}
        <aside className='bg-white rounded-2xl p-6 h-fit'>
          <p className='text-xs font-semibold tracking-wide text-slate-400 mb-4'>
            OUR SOLUTIONS
          </p>
          <nav className='flex flex-col gap-1'>
            {serviceOrder.map(key => (
              <Link
                key={key}
                to={`/services/${key}`}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  key === slug
                    ? "bg-purple-100 text-purple-700"
                    : "text-slate-800 hover:bg-slate-50"
                }`}>
                {services[key].label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <div className='bg-white rounded-2xl overflow-hidden'>
          {/* Hero */}
          <div
            className={`bg-gradient-to-br ${service.heroGradient} px-10 py-14`}>
            <h1 className='text-4xl font-bold text-white mb-4'>
              {service.title}
            </h1>
            <p className='text-slate-200 max-w-xl mb-8'>{service.subtext}</p>
            <Link
              to='/start-a-project'
              state={{ buildType: service.buildType }}
              className='inline-block cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors'>
              {service.ctaText}
            </Link>
          </div>

          {/* Intro */}
          <div className='px-10 py-10'>
            <h2 className='text-2xl font-bold text-slate-900 mb-4'>
              {service.introHeading}
            </h2>
            <p className='text-slate-500 leading-relaxed mb-10'>
              {service.introParagraph}
            </p>

            <CardGrid
              heading={service.capabilitiesHeading}
              items={service.capabilities}
            />

            {service.secondSection && (
              <div className='mt-12'>
                <CardGrid
                  heading={service.secondSection.heading}
                  items={service.secondSection.items}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CardGrid({ heading, items }) {
  return (
    <div>
      <h3 className='text-2xl font-bold text-slate-900 mb-6'>{heading}</h3>
      <div className='grid md:grid-cols-2 gap-5'>
        {items.map(item => (
          <div
            key={item.title}
            className='bg-slate-50 rounded-xl p-6 border border-slate-100'>
            <p className='font-bold text-slate-900 mb-2'>{item.title}</p>
            <p className='text-slate-500 text-sm leading-relaxed'>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceDetail;
