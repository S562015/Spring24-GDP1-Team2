export const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const createFromObj = (array) => {
  let obj = {};
  array.forEach((val) => {
    console.log(val[1]);
    obj[val[0]] = val[1];
  });
  return obj;
};
