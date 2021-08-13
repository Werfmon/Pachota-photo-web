import React from "react";
import { useContext } from "react";
import { context } from "../App";
import Image from "./Image";

export default function Creation() {
  const images = useContext(context);
  console.log(images);
  return (
    <main>
        <ul className='image-container'>
          {images.map((image) => (
              <li key={image.id}>
                <Image description={image.description} link={image.link} />
            </li>
          ))}
        </ul>
    </main>
  );
}
