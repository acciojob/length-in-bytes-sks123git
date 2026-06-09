const byteSize = (str) => {
  let bytes = 0;

  for (let i = 0; i < str.length; i++) {
    const codePoint = str.codePointAt(i);

    // If it's a surrogate pair (emoji or rare symbols), skip the next index
    if (codePoint > 0xffff) {
      i++;
    }

    if (codePoint <= 0x7f) {
      bytes += 1; // ASCII
    } else if (codePoint <= 0x7ff) {
      bytes += 2;
    } else if (codePoint <= 0xffff) {
      bytes += 3;
    } else {
      bytes += 4;
    }
  }
	
  return bytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
