import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />
      <div className="xs:px-6 md:pl-72 flex flex-col flex-1 bg-black h-screen text-white">
        <main>{children}</main>
      </div>
    </>
  );
}
