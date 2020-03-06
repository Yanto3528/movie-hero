const convertToUrlString = text => {
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z0-9^\s]/g, "")
    .replace(/\s/g, "-");
};

export default convertToUrlString;
