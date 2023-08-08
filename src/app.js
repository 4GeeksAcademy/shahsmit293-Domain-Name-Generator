let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

//main project start here.....
let n1 = 0;
for (
  pronounIndex = 0;
  pronounIndex < pronoun.length;
  pronounIndex = pronounIndex + 1
) {
  for (adjIndex = 0; adjIndex < adj.length; adjIndex = adjIndex + 1) {
    for (nounIndex = 0; nounIndex < noun.length; nounIndex = nounIndex + 1) {
      n1 = n1 + 1;
      var domain = `${pronoun[pronounIndex]}${adj[adjIndex]}${noun[nounIndex]}`;
      var extension = `${n1} ${domain}.com`;
      console.log(extension);
    }
  }
}
console.log("\n");

//Add several types of extensions: .com, .net, .us, .io, etc.
let n2 = 0;
for (
  pronounIndex = 0;
  pronounIndex < pronoun.length;
  pronounIndex = pronounIndex + 1
) {
  for (adjIndex = 0; adjIndex < adj.length; adjIndex = adjIndex + 1) {
    for (nounIndex = 0; nounIndex < noun.length; nounIndex = nounIndex + 1) {
      n2 = n2 + 1;
      var domain = `${pronoun[pronounIndex]}${adj[adjIndex]}${noun[nounIndex]}`;
      var extension = `${n2} ${domain}.net`;
      console.log(extension);
    }
  }
}
console.log("\n");

//Add domain hacks, for example: instead of thegreatjogger.com you can use the .er domain like this: thegreatjogg.er
let number = 0;
for (
  pronounIndex = 0;
  pronounIndex < pronoun.length;
  pronounIndex = pronounIndex + 1
) {
  for (adjIndex = 0; adjIndex < adj.length; adjIndex = adjIndex + 1) {
    for (nounIndex = 0; nounIndex < noun.length; nounIndex = nounIndex + 1) {
      number = number + 1;
      var domain = `${pronoun[pronounIndex]}${adj[adjIndex]}${noun[nounIndex]}`;
      var extension = `${number} ${domain}.com`;
      console.log(extension);
      if (extension.endsWith("er.com")) {
        let txt = extension.slice(0, -6);
        let sliceDomain = domain.slice(-2);
        let updatedExtension = `${txt}.${sliceDomain}`;
        console.log(updatedExtension);
      } 
    }
  }
}
