function stringChop(str, size) {
    // If the string is null or empty, return an empty array
    if (!str || size <= 0) {
        return [];
    }

    // Create an array to store the chunks
    let chunks = [];

    // Loop through the string, slicing it into chunks of the specified size
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size));
    }

    // Return the array of chunks
    return chunks;
}

// Do not change the code below
const str = prompt("Enter String:");
const size = prompt("Enter Chunk Size:");
alert(stringChop(str, size));
