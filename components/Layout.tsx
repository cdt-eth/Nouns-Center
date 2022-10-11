import Navigation from './Navigation/Web';

export default function Layout({ children }) {
  return (
    <>
      <Navigation />

      <div className=" flex flex-col flex-1 flex-between h-auto text-black m-auto">
        <main className="w-full  max-w-5xl	m-auto DocSearch-content">
          {/* <main className="w-full border-2 max-w-5xl	m-auto DocSearch-content"> */}
          {children}
        </main>
      </div>
    </>
  );
}
