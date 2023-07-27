import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col justify-center">
      <div className="-top-24 -left-14 rounded-full bg-orange-300 w-60 h-60 absolute z-10" />
      <div className="-top-24 -left-20 rounded-full bg-orange-800 w-64 h-64 absolute" />

      <div className="-bottom-24 -right-6 rounded-full bg-orange-300 w-60 h-60 absolute z-10" />
      <div className="-bottom-24 -right-10 rounded-full bg-orange-800 w-64 h-64 absolute" />

      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-5xl font-bold py-2 bg-orange-50">Trabajox</h1>
        <p className="text-center w-4/5">
          ¡Bienvenido a{" "}
          <span className="text-orange-300">
            {" "}
            <strong>Trabajox!</strong>{" "}
          </span>{" "}
          <br />
          <span  className="">
            Conecta con los mejores trabajadores de servicios de tu localidad.
          </span>
        </p>
        <Link
          href="/login"
          className="text-orange-950 border-b-2 border-orange-950 text-md"
        >
          {"->"} Comenzar ya {"<-"}
        </Link>
      </div>
    </main>
  );
}
