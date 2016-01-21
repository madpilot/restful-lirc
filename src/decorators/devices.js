export default function deviceDecorator(input) {
  var result = [];

  input.remotes.forEach((remote) => {
    var decorated = {};
    decorated.name = remote.name;
    decorated.codes = [];

    for(let [ code, value ] of Object.entries(remote.codes)) {
      decorated.codes.push(code);
    }

    result.push(decorated);
  });

  return result;
}
