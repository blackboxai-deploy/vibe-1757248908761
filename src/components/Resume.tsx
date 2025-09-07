"use client";

import ResumeSection from "./ResumeSection";
import SkillBadge from "./SkillBadge";

export default function Resume() {
  const skills = {
    technical: [
      "Microsoft Word",
      "Microsoft Excel", 
      "Microsoft PowerPoint",
      "SAP",
      "Canva",
      "Zoom",
      "Blueyes"
    ],
    professional: [
      "Organizational Skills",
      "Time Management",
      "Attention to Details",
      "Flexibility",
      "Active Listening Skills",
      "Versatile",
      "Scheduling"
    ]
  };

  const workExperience = [
    {
      company: "Philippine Spring Water Resources Inc.",
      position: "Credit and Collection Officer",
      period: "September 2024 - January 2025",
      responsibilities: [
        "Monitoring accounts, identifying overdue accounts and follow up to collect due",
        "Preparing aging reports and in-charge for collection",
        "Communicate and calling the clients about overdue accounts and negotiating payment plans",
        "Preparing Monthly reports such as monthly collection reports",
        "Reviewing and reconciling receivables"
      ]
    },
    {
      company: "Whitewoods Leisure and Conventional Hotel / Serbiz Multi-Purpose Cooperative",
      position: "Sales Account Executive",
      period: "September 2022 - September 2023",
      responsibilities: [
        "Identify prospect new business opportunities including corporate accounts, group bookings and event inquires through cold calling and email blast",
        "Build and maintain strong relationships with the existing clients, corporate accounts, government accounts and religious groups",
        "Preparing of quotations, proposal and contracts"
      ]
    },
    {
      company: "Alfamart Trading Philippines Inc.",
      position: "Accounting Assistant",
      period: "Employment Period Not Specified",
      responsibilities: [
        "Data entry for journal entries and account reconciliations",
        "Process store utilities and employee reimbursement",
        "Preparing weekly and monthly sales report of the Stores",
        "Check and verify daily sales reports and tally sales with system records",
        "Audit and reconciliation"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden print:shadow-none print:rounded-none">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 print:p-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold font-playfair mb-2">
              Angelica M. Hernandez
            </h1>
            <p className="text-blue-100 text-xl font-medium">
              General Admin Virtual Assistant
            </p>
          </div>
          <div className="text-right space-y-1 text-blue-100">
            <p className="flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-200 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              </span>
              angelicamhernandez127@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <span className="w-4 h-4 bg-blue-200 rounded-full flex items-center justify-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              </span>
              0966-693-7872
            </p>
            <p className="flex items-center gap-2 max-w-xs">
              <span className="w-4 h-4 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              </span>
              031 Purok 1 Brgy. Laguerta Calamba City, Laguna
            </p>
          </div>
        </div>
      </div>

      <div className="p-8 print:p-6 space-y-8">
        {/* Profile Summary */}
        <ResumeSection title="Profile Summary">
          <p className="text-slate-700 leading-relaxed text-justify">
            Dedicated and results-oriented professional with extensive experience in administrative support, 
            account management, and financial operations. Proven expertise in Microsoft Office applications, 
            organizational management, and client relationship building. Strong background in credit and collection, 
            sales account management, and accounting processes. Exceptional communication skills with demonstrated 
            ability to manage multiple tasks efficiently while maintaining attention to detail. Seeking to leverage 
            comprehensive administrative and technical skills in a General Admin Virtual Assistant role to support 
            business operations and drive organizational success.
          </p>
        </ResumeSection>

        {/* Skills */}
        <ResumeSection title="Skills & Competencies">
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} type="technical" />
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Professional Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.professional.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} type="professional" />
                ))}
              </div>
            </div>
          </div>
        </ResumeSection>

        {/* Work Experience */}
        <ResumeSection title="Work Experience">
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-6 pb-4">
                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {job.position}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {job.company}
                    </p>
                  </div>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-2 text-slate-700">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Education */}
        <ResumeSection title="Education">
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
              <div>
                <h3 className="text-xl font-semibold text-slate-800">
                  Bachelor of Science in Business Administration
                </h3>
                <p className="text-green-600 font-medium">
                  Major in Marketing Management
                </p>
                <p className="text-slate-600">
                  University of Perpetual Help System - DALTA Calamba Campus
                </p>
              </div>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                2022
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-slate-700 font-medium">Student Assistant for 3½ years</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-slate-700 font-medium">CHED Scholar</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                <span className="text-slate-700 font-medium">Scholar of Laguna for 4 years</span>
              </div>
            </div>
          </div>
        </ResumeSection>

        {/* Tools & Platforms */}
        <ResumeSection title="Tools & Platforms">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Canva", "Zoom", "Blueyes", "SAP"].map((tool, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold text-lg">{tool.charAt(0)}</span>
                </div>
                <p className="font-medium text-slate-800">{tool}</p>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* References */}
        <ResumeSection title="References">
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-xl">JMD</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-slate-800">Jonah Mai De Chavez</h4>
                <p className="text-blue-600 font-medium">Admin Collection</p>
                <p className="text-slate-600 mb-2">Ayala Nuvali, Philippines</p>
                <p className="text-slate-700 flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </span>
                  0949-686-4923
                </p>
              </div>
            </div>
          </div>
        </ResumeSection>
      </div>

      {/* Print-friendly footer */}
      <div className="no-print bg-slate-50 border-t border-slate-200 p-4 text-center text-slate-600">
        <p className="text-sm">
          This resume is optimized for both screen viewing and printing. 
          Use your browser's print function for a professional hard copy.
        </p>
      </div>
    </div>
  );
}