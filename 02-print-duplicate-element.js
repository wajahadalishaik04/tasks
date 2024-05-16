function findDuplicates(arr) {
    const duplicates = [];
    const frequencyMap = {};
  
    for (const element of arr) {
      if (frequencyMap[element]) {
        if (!duplicates.includes(element)) {
          duplicates.push(element);
        }
      } else {
        frequencyMap[element] = true;
      }
    }
  
    return duplicates;
  }
  
  const a = [1, 2, 1, 4, 2, 6, 7, 8, 3, 1, 3, 4];
  console.log(findDuplicates(a));