import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div className="md:pl-72 flex flex-col flex-1 bg-black h-screen text-white">
        <main>{children}</main>
      </div>
    </>
  );
}
