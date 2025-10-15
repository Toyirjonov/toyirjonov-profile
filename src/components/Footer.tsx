export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-200 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Toyirjonov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
