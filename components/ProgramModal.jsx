import Image from 'next/image';

export default function ProgramModal({ program, onClose }) {
  return (
    <div
      onClick={onClose}
     className="fixed inset-0 z-50 backdrop-blur-sm bg-black/40 flex items-center justify-center px-2 sm:px-4"

    >
      <div
        className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Exit Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm sm:text-base shadow hover:bg-red-700 transition"
        >
          ✕ <span className="hidden sm:inline">Close</span>
        </button>

        {/* Program Image */}
        <Image
          src={program.image}
          alt={program.title}
          width={800}
          height={400}
          className="w-full h-52 sm:h-64 object-cover rounded-lg mb-4"
        />

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 text-center">{program.title}</h2>

        {/* Description */}
        <p className="text-gray-700 text-sm sm:text-base text-justify mb-4">{program.desc}</p>

        {/* Logo + Brand */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <Image
            src={program.logo || "/logos/default.png"}
            alt="Program Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="text-base sm:text-lg font-semibold text-gray-800 text-center">
            {program.className}
          </span>
        </div>

        {/* Bottom Close Button for Mobile */}
        <div className="mt-6 text-center sm:hidden">
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-6 py-2 rounded-lg text-sm shadow hover:bg-red-700 transition"
          >
            Close Program Info
          </button>
        </div>
      </div>
    </div>
  );
}
