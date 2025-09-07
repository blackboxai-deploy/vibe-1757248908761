interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="border-b border-slate-200 pb-6 last:border-b-0">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center font-playfair">
        <span className="w-8 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3"></span>
        {title}
      </h2>
      <div className="ml-11">
        {children}
      </div>
    </section>
  );
}