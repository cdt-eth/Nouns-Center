import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <>
      <Navigation />

      <div className=" flex flex-col flex-1 flex-between h-auto text-black m-auto">
        <main className="w-full DocSearch-content">{children}</main>
      </div>
    </>
  );
}
