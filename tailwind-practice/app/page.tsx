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
      <div className="-ml-2 bg-yellow-500">box with margin</div>
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
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
        <div className="bg-sky-500 rounded-lg p-6">First Columns</div>
        <div className="bg-sky-500 rounded-lg p-6">Second Columns</div>
        <div className="bg-sky-500 rounded-lg p-6">Third Columns</div>
        <div className="bg-sky-500 rounded-lg p-6">Fourth Columns</div>
        <div className="bg-sky-500 rounded-lg p-6">Fifth Columns</div>
        <div className="bg-sky-500 rounded-lg p-6">Sixth Columns</div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        <div className="bg-red-500 rounded-lg p-6">First Columns</div>
        <div className="bg-red-500 rounded-lg p-6">Second Columns</div>
        <div className="bg-red-500 rounded-lg p-6">Third Columns</div>
        <div className="bg-red-500 rounded-lg p-6 col-span-2">
          Fourth Columns
        </div>
        <div className="bg-red-500 rounded-lg p-6">Fifth Columns</div>
        <div className="bg-red-500 rounded-lg p-6 col-span-3">SixthColumns</div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        <div className="bg-yellow-500 rounded-lg p-6 col-start-2 col-end-6">
          First Columns
        </div>
        <div className="bg-yellow-500 rounded-lg p-6 col-start-1 col-end-3">
          Second Columns
        </div>
        <div className="bg-yellow-500 rounded-lg p-6 col-start-5 col-end-7">
          Third Columns
        </div>
        <div className="bg-yellow-500 rounded-lg p-6 col-start-1 col-end-7">
          Fourth Columns
        </div>
      </div>
      <div className="grid grid-flow-col grid-rows-4 gap-1">
        <div className="bg-sky-500 rounded-lg p-6 row-span-2">
          First Columns
        </div>
        <div className="bg-sky-500 rounded-lg p-6">Second Columns</div>
        <div className="bg-sky-500 rounded-lg p-6">Third Columns</div>
        <div className="bg-sky-500 rounded-lg p-6 row-span-3">
          Fourth Columns
        </div>
        <div className="bg-sky-500 rounded-lg p-6">Fifth Columns</div>
        <div className="bg-sky-500 rounded-lg p-6">Sixth Columns</div>
      </div>
      <div className="grid grid-flow-row-dense grid-cols-3 gap-1">
        <div className="bg-purple-500 rounded-lg p-6 col-span-2">
          First Columns
        </div>
        <div className="bg-purple-500 rounded-lg p-6 col-span-2">
          Second Columns
        </div>
        <div className="bg-purple-500 rounded-lg p-6">Third Columns</div>
        <div className="bg-purple-500 rounded-lg p-6">Fourth Columns</div>
        <div className="bg-purple-500 rounded-lg p-6">Fifth Columns</div>
        <div className="bg-purple-500 rounded-lg p-6">Sixth Columns</div>
      </div>
      {/* layout */}
      <div className="Parent bg-slate-900 h-screen text-white">
        <div className="bg-red-500 container mx-auto px-4">Hello</div>
      </div>
      <div className="Parent bg-slate-900 text-white">
        <div className="bg-sky-500 container columns-lg mx-auto px-2">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aspernatur mollitia ducimus laboriosam commodi
            consequuntur nemo odio asperiores neque. Ea voluptatum veniam cum
            delectus molestiae, velit distinctio reiciendis et in.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aspernatur mollitia ducimus laboriosam commodi
            consequuntur nemo odio asperiores neque. Ea voluptatum veniam cum
            delectus molestiae, velit distinctio reiciendis et in.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aspernatur mollitia ducimus laboriosam commodi
            consequuntur nemo odio asperiores neque. Ea voluptatum veniam cum
            delectus molestiae, velit distinctio reiciendis et in.
          </p>
        </div>
      </div>
      <div className="Parent bg-slate-900 text-white">
        <div className="bg-green-500 container columns-3 mx-auto px-2">
          <img
            className="w-64 float-right"
            src="https://artistsatrisk.org/wp-content/uploads/2022/04/Ethereum-Logo.png"
            alt=""
          />
          <img
            className="w-64 float-left"
            src="https://artistsatrisk.org/wp-content/uploads/2022/04/Ethereum-Logo.png"
            alt=""
          />
          <p className="clear-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aspernatur mollitia ducimus laboriosam commodi
            consequuntur nemo odio asperiores neque. Ea voluptatum veniam cum
            delectus molestiae, velit distinctio reiciendis et in.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aspernatur mollitia ducimus laboriosam commodi
            consequuntur nemo odio asperiores neque. Ea voluptatum veniam cum
            delectus molestiae, velit distinctio reiciendis et in.
          </p>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aspernatur mollitia ducimus laboriosam commodi
            consequuntur nemo odio asperiores neque. Ea voluptatum veniam cum
            delectus molestiae, velit distinctio reiciendis et in.
          </p>
        </div>
      </div>
      <div className="h-screen text-white bg-slate-600">
        <div className="container px-2">
          <div className="relative w-64 h-64 p-8 bg-red-500 rounded-lg">
            <div className="absolute top-0 -left-2 w-24 h-24 p-8 bg-green-500 rounded-lg"></div>
            <div className="absolute inset-5 w-24 h-24 p-8 bg-purple-500 rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="text-white bg-slate-600 m-20">
        <div className="max-h-52 overflow-y-scroll text-3xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          laboriosam veritatis, nesciunt ab dicta consequatur ipsam
          exercitationem magnam ullam ea soluta iure distinctio possimus
          sapiente adipisci corporis ad quam asperiores. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Necessitatibus ex sequi
          exercitationem, eveniet illum minima dolore similique blanditiis.
          Similique natus quod repudiandae veritatis vero corrupti perspiciatis,
          repellat a beatae possimus! perspiciatis, repellat a beatae possimus!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
          laboriosam veritatis, nesciunt ab dicta consequatur ipsam
          exercitationem magnam ullam ea soluta iure distinctio possimus
          sapiente adipisci corporis ad quam asperiores. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Necessitatibus ex sequi
          exercitationem, eveniet illum minima dolore similique blanditiis.
          Similique natus quod repudiandae veritatis vero corrupti perspiciatis,
          repellat a beatae possimus! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Totam laboriosam veritatis, nesciunt ab dicta
          consequatur ipsam exercitationem magnam ullam ea soluta iure
          distinctio possimus sapiente adipisci corporis ad quam asperiores.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus ex sequi exercitationem, eveniet illum minima dolore
          similique blanditiis. Similique natus quod repudiandae veritatis vero
          corrupti perspiciatis, repellat a beatae possimus! perspiciatis,
          repellat a beatae possimus! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Totam laboriosam veritatis, nesciunt ab dicta
          consequatur ipsam exercitationem magnam ullam ea soluta iure
          distinctio possimus sapiente adipisci corporis ad quam asperiores.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus ex sequi exercitationem, eveniet illum minima dolore
          similique blanditiis. Similique natus quod repudiandae veritatis vero
          corrupti perspiciatis, repellat a beatae possimus!
        </div>
      </div>
      <div className="container bg-slate-900 text-white flex p-3">
        <div className="z-40 -mr-3 bg-red-500 p-3 border-5 border-solid border-green-500 rounded-lg">
          01
        </div>
        <div className="bg-red-500 -mr-3 z-30 p-3 border-5 border-solid border-sky-500 rounded-full">
          02
        </div>
        <div className="bg-red-500 -mr-3 z-20 p-3 border-3 border-dotted border-white-500 rounded-full">
          03
        </div>
        <div className="bg-red-500 -mr-3 z-10 p-3 border-2 border-dashed border-white rounded-full">
          04
        </div>
        <div className="bg-red-500 -mr-3 z-0 p-3 border-1 border-solid border-white rounded-full">
          05
        </div>
      </div>
    </>
  );
}
