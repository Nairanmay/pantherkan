export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Black Pantherkan Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
