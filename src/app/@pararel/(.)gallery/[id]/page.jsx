import React from "react";
import Image from "next/image";
import Modal from "@/components/Modal";

const DetailPhoto = async ({ params }) => {
  const { id } = params;
  const { data: imgUrl } = await fetch(
    `http://localhost:3000/api/gallery/${id}`,
    { cache: "force-cache" }
  ).then((res) => res.json());
  return (
    <Modal>
      <div className="w-[80%] h-[60%]  mx-auto top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed z-100">
        <Image
          src={imgUrl}
          alt="img"
          width={200}
          height={200}
          priority
          sizes="40vw"
          className="w-full h-full object-contain"
        />
      </div>
    </Modal>
  );
};

export default DetailPhoto;
