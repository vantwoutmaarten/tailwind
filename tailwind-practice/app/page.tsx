import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* colors */}
      <h1 className="bg-green-500 text-yellow-500">Hello world!</h1>
      <h1 className=" bg-yellow-500 text-green-600">Hello world!</h1>
      <h1 className=" bg-casinored-100 text-green-600">Hello world!</h1>
      {/* typography */}
      <h1 className="text-3xl italic">Hello world!</h1>
      <h1 className="text-lg underline decoration-red-500 decoration-wavy">
        Hello world!
      </h1>
      <h1 className="text-base">Hello world!</h1>
      <h1 className="underline underline-offset-10">Hello world!</h1>
      <h1 className="capitalize">Hello world!</h1>
      <h1 className="uppercase">Hello world!</h1>
      <p className="text-5xl whitespace-nowrap">
        This is a long sentence with a lot of words to show that truncate will
        truncate
      </p>
      <p className="text-5xl truncate">
        This is a long sentence with a lot of words to show that truncate will
        truncate
      </p>
      <p className="text-5xl truncate">
        Thisis a long sentence with a lot of words to show that truncate will
        truncate
      </p>
      <p className="text-5xl break-words">
        Thisisalongsentencewithlotofwordstoshowthattruncatewill
      </p>
      {/* spacing */}
      <p className="font-bold bg-red-500 pt-5">hello</p>
      <p className="font-bold bg-green-500 pb-5">hello</p>
      <p className="font-bold bg-yellow-500 py-5">hello</p>
      <p className="font-bold bg-purple-500 p-5">hello</p>
      <div className="p-4 bg-red-500">box with padding</div>
      <div className="mb-4 bg-red-500">box with margin</div>
      <div className="m-4 bg-red-500">box with margin</div>
      <div className="-mt-2 bg-red-500">box with margin</div>
      <div className="w-16 h-16 bg-green-500">box with margin</div>
      <div className="w-1/2 h-16 bg-green-500">box with margin</div>
      <div className="w-full h-16 bg-green-500">box with margin</div>
      <div className="min-w-max h-16 bg-purple-500">box</div>
      <div className="min-w-max h-16 bg-purple-500">box</div>
      <div className="min-h-screen h-16 bg-yellow-500">box</div>
    </>
  );
}
