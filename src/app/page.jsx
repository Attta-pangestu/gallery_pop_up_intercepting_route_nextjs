import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  const req = await fetch("http://localhost:3000/api/gallery", {
    cache: "force-cache",
  });
  const { data: imgUrls } = await req.json();
  return (
    <section className="gallery gap-4 p-4 ">
      {imgUrls.map((imgUrl, index) => (
        <Link
          href={`/gallery/${index}`}
          key={index}
          className="cursor-pointer"
          scroll={false}
        >
          <Image
            src={imgUrl}
            alt="img"
            width={200}
            height={200}
            priority
            className="w-full h-full object-contain my-4 shadow-lg shadow-gray-600 rounded-md"
          />
        </Link>
      ))}
    </section>
  );
}
