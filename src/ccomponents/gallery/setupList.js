// setupList

export function setupAnimalList() {
  const animalList = [];
  for (let i = 0; i < 10; i++) {
    animalList.push({
      type: "cat",
      src: "https://loremflickr.com/320/240/cat?lock=" + i,
    });
  }

  for (let i = 0; i < 10; i++) {
    animalList.push({
      type: "dog",
      src: "https://loremflickr.com/320/240/dog?lock=" + i,
    });
  }

  return animalList;
}
