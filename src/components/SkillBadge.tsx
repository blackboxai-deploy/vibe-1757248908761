interface SkillBadgeProps {
  skill: string;
  type: "technical" | "professional";
}

export default function SkillBadge({ skill, type }: SkillBadgeProps) {
  const baseClasses = "px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:shadow-md";
  
  const typeClasses = {
    technical: "bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100",
    professional: "bg-green-50 text-green-700 border border-green-200 hover:bg-green-100"
  };

  return (
    <span className={`${baseClasses} ${typeClasses[type]}`}>
      {skill}
    </span>
  );
}