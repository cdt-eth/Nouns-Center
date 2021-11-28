import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header title="Nouns Center" />

      <img className="xs:w-10/12 sm:w-1/2" src="./logo.png" alt="earth" />
    </div>
  );
}
