'use client';

import Layout from '../components/Layout';

export default function Careers() {
  const jobListings = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Tehran, Iran',
      type: 'Full-time',
      description: 'We are looking for an experienced Frontend Developer to join our team and help build the next generation of our e-commerce platform.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Tehran, Iran',
      type: 'Full-time',
      description: 'Join our product team to help shape the future of our products and services, working closely with engineering and design teams.'
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Tehran, Iran',
      type: 'Full-time',
      description: 'We are seeking a talented UX/UI Designer to create beautiful and intuitive user interfaces for our products.'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          
          <div className="space-y-16">
            {/* Company Culture */}
            <section className="space-y-8">
              <h2 className="text-3xl font-semibold text-white">Our Culture</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">Innovation</h3>
                    <p className="text-zinc-700">
                      We encourage creative thinking and continuous innovation in everything we do.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">Collaboration</h3>
                    <p className="text-zinc-700">
                      We believe in the power of teamwork and open communication.
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">Growth</h3>
                    <p className="text-zinc-700">
                      We support personal and professional development through learning and mentorship.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Job Listings */}
            <section className="space-y-8">
              <h2 className="text-3xl font-semibold text-white">Open Positions</h2>
              <div className="space-y-6">
                {jobListings.map((job, index) => (
                  <div key={index} className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-zinc-900">{job.title}</h3>
                          <p className="text-zinc-600">{job.department}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-zinc-600">{job.location}</p>
                          <p className="text-zinc-600">{job.type}</p>
                        </div>
                      </div>
                      <p className="text-zinc-700 mb-4">{job.description}</p>
                      <button className="bg-zinc-900 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="space-y-8">
              <h2 className="text-3xl font-semibold text-white">Benefits & Perks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">Health & Wellness</h3>
                    <ul className="space-y-2 text-zinc-700">
                      <li>Comprehensive health insurance</li>
                      <li>Mental health support</li>
                      <li>Fitness program</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">Learning & Development</h3>
                    <ul className="space-y-2 text-zinc-700">
                      <li>Professional development budget</li>
                      <li>Conference attendance</li>
                      <li>Internal training programs</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">Work-Life Balance</h3>
                    <ul className="space-y-2 text-zinc-700">
                      <li>Flexible working hours</li>
                      <li>Remote work options</li>
                      <li>Generous time off</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 rounded-3xl border-2 border-zinc-200 hover:border-zinc-300 transition-all duration-300 bg-zinc-100/80 backdrop-blur-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/40 to-zinc-100/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-300/30 via-zinc-200/20 to-transparent"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-zinc-300/20 via-transparent to-transparent"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-zinc-900 mb-4">Office Perks</h3>
                    <ul className="space-y-2 text-zinc-700">
                      <li>Modern office space</li>
                      <li>Free snacks and drinks</li>
                      <li>Team events and activities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
} 