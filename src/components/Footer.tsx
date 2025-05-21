const Footer = () => {
  return (
    <footer className="p-4 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} WBWR. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;