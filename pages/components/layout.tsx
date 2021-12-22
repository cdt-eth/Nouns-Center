import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div className="xs:px-6 md:pl-80 py-12 flex flex-col flex-1  h-screen bg-black text-white">
        <main>{children}</main>
      </div>
    </>
  );
}
