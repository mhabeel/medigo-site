import { FiUsers, FiMapPin, FiShield, FiDollarSign } from "react-icons/fi";

export default function WhyUs() {
  return (
    <section id="why" className="px-6 py-16 text-center">
      <h2 className="text-2xl font-bold mb-10">Warum MediGo wählen</h2>

      {/* Center the whole block, but each item fills row width */}
      <ul className="mx-auto grid gap-6 max-w-md sm:max-w-2xl sm:grid-cols-2 sm:gap-8 text-slate-700">
        <li className="w-full text-left flex items-start gap-3">
          <FiUsers className="shrink-0 mt-1 text-brand" size={22} />
          <span>Geschulte Fahrer für medizinische Logistik</span>
        </li>
        <li className="w-full text-left flex items-start gap-3">
          <FiMapPin className="shrink-0 mt-1 text-brand" size={22} />
          <span>Temperatur- &amp; GPS-Tracking</span>
        </li>
        <li className="w-full text-left flex items-start gap-3">
          <FiShield className="shrink-0 mt-1 text-brand" size={22} />
          <span>Versicherte und konforme Abläufe</span>
        </li>
        <li className="w-full text-left flex items-start gap-3">
          <FiDollarSign className="shrink-0 mt-1 text-brand" size={22} />
          <span>Transparente Preisgestaltung</span>
        </li>
      </ul>
    </section>
  );
}
