import { useState, useEffect } from 'react'
import profilePhoto from './assets/profile.jpeg'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact']
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white font-['Inter',sans-serif]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-950/90 backdrop-blur-lg border-b border-gray-800/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button onClick={() => scrollTo('home')} className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Veeresh
            </button>
            
            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === link.id
                      ? 'text-white bg-purple-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('contact')}
                className="ml-4 px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96 border-b border-gray-800' : 'max-h-0'}`}>
          <div className="px-4 py-3 space-y-1 bg-gray-950/95 backdrop-blur-lg">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? 'text-white bg-purple-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="w-full mt-2 px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-sm font-semibold text-center"
            >
              Hire Me
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-gray-950 to-gray-950"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Open for Opportunities
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Veeresh
                </span>
                <br />
                <span className="text-gray-300">Lead Data Engineer</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400 max-w-xl mb-8 leading-relaxed">
                Detail-oriented Lead Data Engineer with 12+ years of experience in data architecture, 
                cloud migration, and building scalable data pipelines. Specializing in Google Cloud Platform, 
                BigQuery, Airflow, and Spark.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollTo('projects')}
                  className="px-8 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 hover:scale-105"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="px-8 py-3.5 border border-gray-700 rounded-full text-base font-semibold text-gray-300 hover:border-purple-500 hover:text-purple-300 transition-all duration-200"
                >
                  Get In Touch
                </button>
              </div>
              <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
                <div className="flex -space-x-3">
                  {['GCP', 'AWS', 'G', 'D'].map((initial, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-gray-950 flex items-center justify-center text-xs font-bold text-white">
                      {initial}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">12+</p>
                  <p className="text-gray-500 text-sm">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center relative">
              <div className="relative">
                <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-950 flex items-center justify-center overflow-hidden">
                    <img 
                      src={profilePhoto} 
                      alt="Veeresh" 
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/20 backdrop-blur-sm rounded-2xl border border-purple-500/30 flex items-center justify-center text-2xl">
                  ☁️
                </div>
                <div className="absolute -bottom-2 -left-4 w-20 h-20 bg-pink-500/20 backdrop-blur-sm rounded-2xl border border-pink-500/30 flex items-center justify-center text-2xl">
                  🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-gray-800 flex items-center justify-center max-w-md mx-auto overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Veeresh" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-900 rounded-2xl border border-gray-800 p-4 hidden sm:block">
                <div className="text-3xl mb-1">🎯</div>
                <div className="text-sm font-semibold text-white">12+ Years</div>
                <div className="text-xs text-gray-500">Experience</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Lead Data Engineer | GCP Specialist
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm a results-driven Lead Data Engineer with over 12 years of experience in data architecture, 
                cloud migration, and building scalable data pipelines. Currently leading GCP data engineering 
                initiatives at Qatar Airways through EPAM Systems, I specialize in migrating complex Oracle 
                workloads to Google BigQuery and designing metadata-driven ETL pipelines with Airflow.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                My journey spans leadership roles at Softcrylic Technology Solutions, Cognizant, and TCS, 
                where I've delivered impactful data solutions for Fortune 500 clients. I hold Google Cloud 
                Professional certifications and am an Apache Spark 3.0 Certified Associate Developer.
              </p>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">12+</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Years Exp</div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">4</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Companies</div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 text-center">
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">3</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 lg:py-32 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to build robust data solutions
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-6">Cloud & Big Data</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Google Cloud', level: 95, icon: '☁️', color: 'from-blue-400 to-cyan-500' },
              { name: 'BigQuery', level: 95, icon: '📊', color: 'from-blue-400 to-indigo-500' },
              { name: 'Apache Spark', level: 92, icon: '⚡', color: 'from-orange-400 to-red-500' },
              { name: 'Apache Airflow', level: 90, icon: '🌬️', color: 'from-green-400 to-emerald-500' },
              { name: 'Hadoop', level: 85, icon: '🐘', color: 'from-yellow-400 to-amber-500' },
              { name: 'Dataproc', level: 88, icon: '🖥️', color: 'from-blue-400 to-purple-500' },
              { name: 'Cloud Composer', level: 87, icon: '🎼', color: 'from-teal-400 to-cyan-500' },
              { name: 'Cloud Functions', level: 85, icon: '⚙️', color: 'from-yellow-400 to-orange-500' },
              { name: 'GCS', level: 93, icon: '🗄️', color: 'from-cyan-400 to-blue-500' },
              { name: 'AWS S3', level: 80, icon: '🗃️', color: 'from-orange-400 to-amber-500' },
            ].map((skill, index) => (
              <div
                key={index}
                className="group bg-gray-950 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 mt-1 block text-right">{skill.level}%</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-white mb-6">Programming & Databases</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Python', level: 95, icon: '🐍', color: 'from-blue-400 to-yellow-400' },
              { name: 'Scala', level: 85, icon: '🔷', color: 'from-red-400 to-orange-500' },
              { name: 'Shell Scripting', level: 90, icon: '🐚', color: 'from-green-400 to-lime-500' },
              { name: 'SQL', level: 95, icon: '🗃️', color: 'from-blue-400 to-indigo-500' },
              { name: 'Hive', level: 88, icon: '🐝', color: 'from-yellow-400 to-amber-500' },
              { name: 'MySQL', level: 85, icon: '🐬', color: 'from-blue-400 to-cyan-500' },
              { name: 'DB2', level: 78, icon: '🗄️', color: 'from-blue-400 to-indigo-500' },
              { name: 'Oracle', level: 80, icon: '🟢', color: 'from-red-400 to-rose-500' },
            ].map((skill, index) => (
              <div
                key={index}
                className="group bg-gray-950 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 mt-1 block text-right">{skill.level}%</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-white mb-6">Core Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'Data Architecture', 'Cloud Migration', 'ETL Pipeline Design',
              'Data Warehousing', 'Process Optimization', 'Data Governance',
              'Project Management', 'Team Leadership', 'Cross-functional Collaboration',
              'Data Quality Assurance', 'Workflow Orchestration', 'Performance Tuning',
              'Data Reconciliation', 'Metadata Management', 'Strategic Planning'
            ].map((skill, i) => (
              <span key={i} className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full text-sm text-gray-300 hover:border-purple-500/50 hover:text-purple-300 transition-all">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects / Key Achievements Section */}
      <section id="projects" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Key{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Impactful data solutions I've delivered across industries
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Oracle to BigQuery Migration',
                desc: 'Spearheaded migration from Oracle to Google BigQuery at Qatar Airways, optimizing data architecture and reducing query execution times by 60%. Re-engineered 200+ Oracle tables and procedures.',
                tags: ['BigQuery', 'Oracle', 'Airflow', 'GCP'],
                color: 'from-purple-500 to-blue-500',
                icon: '🚀',
              },
              {
                title: 'Metadata-Driven ETL Pipelines',
                desc: 'Developed robust, metadata-driven ETL pipelines with Airflow, increasing data processing efficiency by 30% and improving fault tolerance by 50% with self-correcting mechanisms.',
                tags: ['Airflow', 'Python', 'GCP', 'ETL'],
                color: 'from-pink-500 to-rose-500',
                icon: '⚙️',
              },
              {
                title: 'Alteryx to BigQuery Transition',
                desc: 'Efficiently transitioned intricate Alteryx workflows to BigQuery procedures, achieving an 80% reduction in processing time for complex data transformations.',
                tags: ['BigQuery', 'Alteryx', 'SQL', 'Optimization'],
                color: 'from-cyan-500 to-teal-500',
                icon: '⚡',
              },
              {
                title: 'Cloud Migration & Data Lakes',
                desc: 'Pioneered the transition of data operations from on-premise cluster to Google Cloud Platform, implementing data ingestion from MySQL, DB2, AWS S3, and flat files via Spark jobs.',
                tags: ['GCP', 'Spark', 'AWS S3', 'Migration'],
                color: 'from-orange-500 to-red-500',
                icon: '☁️',
              },
              {
                title: 'Data Reconciliation Pipeline',
                desc: 'Devised a resilient data reconciliation pipeline capable of auto-adjusting for 72-hour windows, securing data accuracy even amidst input delays for Publishers Clearing House.',
                tags: ['PySpark', 'HDFS', 'BigQuery', 'Reconciliation'],
                color: 'from-green-500 to-emerald-500',
                icon: '🔄',
              },
              {
                title: 'IAM & Data Security',
                desc: 'Designed and implemented IAM roles and policy tags securing access for 50+ stakeholders across Qatar Airways data platforms, ensuring compliance and data governance.',
                tags: ['IAM', 'Security', 'GCP', 'Compliance'],
                color: 'from-violet-500 to-purple-500',
                icon: '🔒',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10"
              >
                <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center text-5xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <span className="relative z-10">{project.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 lg:py-32 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Work{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey across leading organizations
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 transform sm:-translate-x-1/2"></div>
            
            {[
              {
                role: 'Lead GCP Data Engineer',
                company: 'EPAM Systems @ Qatar Airways',
                location: 'Doha, Qatar',
                period: 'Nov 2023 - Present',
                desc: 'Spearheading Oracle to Google BigQuery migration, re-engineering 200+ Oracle tables. Developing metadata-driven ETL pipelines with Airflow, improving efficiency by 30% and fault tolerance by 50%. Designing IAM roles and policy tags for 50+ stakeholders. Transitioning Alteryx workflows to BigQuery with 80% processing time reduction.',
                side: 'left',
              },
              {
                role: 'Lead Data Engineer',
                company: 'Softcrylic Technology Solutions',
                location: 'India',
                period: 'Jan 2019 - Oct 2023',
                desc: [
                  'Led data engineering for Southern Glazers Wine & Spirits, procuring data from Salesforce, Hybris, Redshift via Airflow DAGs.',
                  'Pioneered cloud migration for Publishers Clearing House, transitioning data operations from on-premise to GCP.',
                  'Developed PySpark jobs for data extraction from AWS to HDFS, and built unified solutions for HDFS to BigQuery transport.',
                  'Architected ETL Metadata framework in MySQL and crafted self-correcting data reconciliation pipelines with 72-hour auto-adjustment.',
                ],
                side: 'right',
              },
              {
                role: 'Associate Software Engineer',
                company: 'Cognizant Technology Solutions',
                location: 'India',
                period: 'Apr 2016 - Dec 2018',
                desc: 'Designed and optimized data processing workflows, contributing to enterprise-scale data solutions for global clients. Managed extraction, transformation, and loading processes ensuring data quality and performance.',
                side: 'left',
              },
              {
                role: 'System Engineer',
                company: 'Tata Consultancy Services',
                location: 'India',
                period: 'Sep 2012 - Mar 2016',
                desc: 'Built a strong foundation in software engineering and data systems. Developed and maintained enterprise applications while gaining expertise in database management and system integration.',
                side: 'right',
              },
            ].map((exp, index) => (
              <div key={index} className={`relative mb-8 sm:mb-12 pl-12 sm:pl-0 ${exp.side === 'right' ? 'sm:text-left sm:ml-auto sm:pr-12 sm:pl-0' : 'sm:text-right sm:mr-auto sm:pl-0 sm:pr-12'}`} style={{ width: '100%', maxWidth: 'calc(50% + 1.5rem)' }}>
                <div className={`absolute top-0 ${exp.side === 'right' ? 'left-4 sm:left-0 sm:-translate-x-1/2' : 'left-4 sm:right-0 sm:left-auto sm:translate-x-1/2'} w-8 h-8 rounded-full bg-gray-950 border-2 border-purple-500 flex items-center justify-center text-xs`}>
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
                <div className="bg-gray-950 rounded-xl p-5 sm:p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                  <span className="text-xs text-purple-400 font-semibold mb-2 block">{exp.period}</span>
                  <h3 className="text-lg font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-sm text-purple-300 mb-1">{exp.company}</p>
                  <p className="text-xs text-gray-500 mb-3">{exp.location}</p>
                  {Array.isArray(exp.desc) ? (
                    <ul className="text-sm text-gray-400 leading-relaxed space-y-2">
                      {exp.desc.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-400 leading-relaxed">{exp.desc}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Professional{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Google Cloud Data Architect Professional', issuer: 'Google Cloud', icon: '☁️', color: 'from-blue-400 to-cyan-500' },
              { title: 'Google Cloud Data Engineer Professional', issuer: 'Google Cloud', icon: '📊', color: 'from-blue-400 to-indigo-500' },
              { title: 'Apache Spark 3.0 Associate Developer', issuer: 'Databricks', icon: '⚡', color: 'from-orange-400 to-red-500' },
            ].map((cert, index) => (
              <div key={index} className="bg-gray-900/50 rounded-xl border border-gray-800 hover:border-purple-500/50 p-6 transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl mb-4`}>
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-400">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 lg:py-32 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="max-w-md mx-auto">
            <div className="bg-gray-950 rounded-xl border border-gray-800 hover:border-purple-500/50 p-6 sm:p-8 text-center transition-all duration-300">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-white mb-2">Bachelor of Engineering</h3>
              <p className="text-purple-300 mb-2">Computer Science</p>
              <p className="text-gray-400 text-sm">Visvesvaraya Technological University, India</p>
              <p className="text-gray-500 text-sm mt-2">2012</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Get In{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to discuss data engineering opportunities? Let's connect!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="space-y-6">
                {[
                  { icon: '📧', label: 'Email', value: 'veeresh.vk212@gmail.com', href: 'mailto:veeresh.vk212@gmail.com' },
                  { icon: '📱', label: 'Phone', value: '+974 71981963', href: 'tel:+97471981963' },
                  { icon: '📍', label: 'Location', value: 'Doha, Qatar' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-xl group-hover:border-purple-500/50 transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white hover:text-purple-400 transition-colors font-medium">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/kottargiveer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-lg text-gray-400 hover:border-purple-500/50 hover:text-purple-400 hover:bg-purple-500/10 transition-all"
                    aria-label="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-lg text-gray-400 hover:border-purple-500/50 hover:text-purple-400 hover:bg-purple-500/10 transition-all"
                    aria-label="GitHub"
                  >
                    ✱
                  </a>
                  <a
                    href="mailto:veeresh.vk212@gmail.com"
                    className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-lg text-gray-400 hover:border-purple-500/50 hover:text-purple-400 hover:bg-purple-500/10 transition-all"
                    aria-label="Email"
                  >
                    @
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3.5 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-3.5 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
              />
              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-5 py-3.5 bg-gray-900 border border-gray-800 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full px-8 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-base font-semibold hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <button onClick={() => scrollTo('home')} className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Veeresh
            </button>
            <p className="text-gray-500 text-sm text-center">
              &copy; {new Date().getFullYear()} Veeresh Mahantappa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App