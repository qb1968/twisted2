export default function Header() {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gradient-to-r from-black/60 to-customBlue flex items-center justify-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-customBlue z-0" />

      {/* Centered Image */}
      <img
        src="/images/Ts.png"
        alt="Twisted Sisters Salon"
        className="relative z-10 max-h-56 md:max-h-72 object-contain"
      />
    </div>
  );
}
