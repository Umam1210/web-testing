// Description: This helper function will capitalize the first letter of all the words in a string.

export default (fullName) => {
  fullName = fullName.toLowerCase();
  fullName = fullName.split(' ');
  fullName = fullName.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
  fullName = fullName.join(' ');
  return fullName;
};
