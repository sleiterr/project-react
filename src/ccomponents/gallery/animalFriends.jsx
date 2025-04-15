import { useRef, useState } from "react";
import { setupAnimalList } from "./setupList";

export default function AnimalFriends() {
  const itemsRef = useRef([]);
  const [animalList] = useState(setupAnimalList);
  const [animal, setAnimal] = useState("cat");

  function scrollToAnimall(index) {
    const list = itemsRef.current;
    const { node } = list[index];
    node.scrollIntoView({
      behavior: "smooth",
      block: "nerest",
      inline: "center",
    });
  }

  const animals = animalList.filter((a) => a.type === animal);

  return (
    <>
      <div>
        <button onClick={() => setAnimal("cat")}>Cat</button>
        <button onClick={() => setAnimal("dog")}>Dog</button>
      </div>
      <nr />
      <div>
        <span>Scroll to:</span>
        {animals.map((animal, index) => (
          <button key={animal.src} onClick={() => scrollToAnimall(index)}>
            {index}
          </button>
        ))}
      </div>
      <div>
        <ul>
          {animals.map((animal) => (
            <li
              key={animal.src}
              ref={(node) => {
                const list = itemsRef.current;
                const item = { animal: animal, node };
                list.push(item);
                console.log(
                  `✅ Adding animal to the map. Total animals: ${list.length}`
                );
                if (list.length > 10) {
                  console.log("❌ Too many animals in the list!");
                }
                return () => {
                  // 🚩 No cleanup, this is a bug!
                };
              }}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
}
