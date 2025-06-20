export default function Navbar() {
  return (
    <div>
      <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">
        <div className="flex items-center ">
          <div className="text-primary mr-2">
            <img src="./assets/logo.svg" />
          </div>
          <h1 className="text-2xl font-bold">
            <span className="text-primary">Dine</span>Out
          </h1>
        </div>
        <div className="flex items-center">
          <p className="text-primary">React Adding Interactivity</p>
        </div>
      </nav>
    </div>
  );
}
