import { FiUsers, FiMapPin, FiShield, FiDollarSign } from "react-icons/fi";

export default function WhyUs() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-6 py-16 text-center">
      {/* Centered title */}
      <h2 className="text-2xl font-bold mb-10">Warum MediGo wählen</h2>

      {/* Centered list */}
      <ul className="mx-auto grid gap-10 text-slate-700 max-w-1xl sm:grid-cols-2">
        <li className="flex items-center gap-3 justify-center">
          <FiUsers size={22} className="text-brand" />
          <span>Geschulte Fahrer für medizinische Logistik</span>
        </li>
        <li className="flex items-center gap-3 justify-center">
          <FiMapPin size={22} className="text-brand" />
          <span>Temperatur- &amp; GPS-Tracking</span>
        </li>
        <li className="flex items-center gap-3 justify-center">
          <FiShield size={22} className="text-brand" />
          <span>Versicherte und konforme Abläufe</span>
        </li>
        <li className="flex items-center gap-3 justify-center">
          <FiDollarSign size={22} className="text-brand" />
          <span>Transparente Preisgestaltung</span>
        </li>
      </ul>
    </section>
  );
}
