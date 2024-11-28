import Image from "next/image";
import blogPhoto from "../images/blogPhoto.png"

export default function Home() {
  return (
    <main className="grid gap-5 grid-cols-1 md:grid-cols-2 ">
      <div className=" flex flex-col gap-3 text-center">
        <h1 className="font-bold text-[5rem] text-emerald-200">
          Creative
          <br />
          Thoughts
          <br />
          Agency.
        </h1>
        <p className="mx-20 text-[1.5rem] mb-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
      </div>
      <div className=" hidden lg:flex justify-center">
        <Image
          src={blogPhoto} 
          alt="blog image"  
          width={500}                  
          height={300}                   
          priority
        />
      </div>
    </main>
  );
}
