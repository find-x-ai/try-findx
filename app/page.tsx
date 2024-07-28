export default function Home() {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-between md:p-24 sm:p-10 p-10">
      <div className="w-full max-w-5xl h-full border rounded-md md:p-10 p-5 flex flex-col gap-5">
        <h2 className="md:text-5xl text-4xl font-semibold">
          Trial for <span className="text-[#ff371a]">Find-x</span>
        </h2>
        <p>
          This is the trial project for Find-X, where all the latest features
          will be deployed and thoroughly tested. This environment ensures that
          new updates are evaluated for performance and functionality before
          being rolled out to the main platform. It allows us to refine and
          improve our AI search engine continuously, ensuring a reliable and
          robust user experience.
        </p>
        <p>
          Breaking changes could be detected here so if you spot anything mail
          at{" "}
          <a
            className="text-blue-500 hover:underline"
            href="mailto:findx.org@gmail.com"
          >
            find-x.
          </a>
        </p>
      </div>
      <div className="p-5 bg-[#ff371a] rounded-md">
        <h3 className="text-xl text-white tracking-wider">
          {" "}
          Here you can ask questions about{" "}
          <a
            href="https://nextjs.org/"
            className="underline font-semibold cursor-pointer"
          >
            NEXT JS
          </a>{" "}
          to the find-x ai.
        </h3>
      </div>
      <div>
        Hit{" "}
        <kbd className="border p-2 rounded-md bg-zinc-50 mx-2">Ctrl + k</kbd> to
        get started or click the bottom sparkle ✨ icon.
      </div>
    </main>
  );
}
