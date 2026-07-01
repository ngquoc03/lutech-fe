const TestimonialCard = ({ name, role, quote, avatar }) => (
  <div className="p-8 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-4 mb-6">
      <img src={avatar} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-primary" />
      <div>
        <h4 className="font-bold text-lg text-text">{name}</h4>
        <p className="text-textLight text-sm">{role}</p>
      </div>
    </div>
    <p className="text-textLight italic leading-relaxed">"{quote}"</p>
  </div>
);
export default TestimonialCard;