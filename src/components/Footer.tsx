export default function Footer() {
  return (
    <footer className="bg-sButton-l w-full">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500 font-sans">
        © {new Date().getFullYear()} MediGo. All rights reserved.
      </div>
    </footer>
  );
}

