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
      {/* flex */}
      <div className="Parent">
        <div className="bg-red-200">Header</div>
        <div className="flex flex-row-reverse">
          <div className="bg-red-200">Side bar</div>
          <div className="bg-green-200 flex-grow">Main content</div>
        </div>
        <div className="flex flex-col bg-green-200">
          <div className="">Side bar</div>
          <div className="">Main content</div>
        </div>
        <div className="flex ">
          <div className="basis-2/12">Side bar</div>
          <div className="basis-8/12">Main content</div>
          <div className="basis-2/12">Side bar</div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-32 bg-yellow-300">sidebar</div>
          <div className="w-full bg-red-500">Main content</div>
        </div>
        <div className="flex justify-center">
          <div className="">sidebar</div>
          <div className="">Main content</div>
        </div>
        <div className="flex justify-between">
          <div className="">sidebar</div>
          <div className="">Main content</div>
          <div className="">sidebar</div>
        </div>
        <div className="flex justify-evenly items-center">
          <div className="bg-red-500">sidebar</div>
          <div className="bg-green-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            quaerat velit, possimus modi voluptatibus quas expedita repellendus
            sunt minus quis minima fugiat, sed adipisci soluta cumque temporibus
            beatae alias ipsa?
          </div>
          <div className="bg-red-500">sidebar</div>
        </div>
        <div className="flex justify-evenly items-baseline">
          <div className="pt-2 bg-red-500">sidebar</div>
          <div className="pt-4 bg-green-500">Lorem ipsum dolor sit amet</div>
          <div className="pt-8 bg-red-500">sidebar</div>
        </div>
      </div>
      {/* grid */}
      <div className="grid grid-cols-4">
        <div className="bg-sky-500 rounded-lg p-6">First Columns</div>
        <div className="bg-sky-500 rounded-lg p-6">Second Columns</div>
        <div className="bg-sky-500 rounded-lg p-6">Third Columns</div>
        <div className="bg-sky-500 rounded-lg p-6">Fourth Columns</div>
      </div>
    </>
  );
}
