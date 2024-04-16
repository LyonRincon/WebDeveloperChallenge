/// <summary>
///   Get a new ID by adding 1 to the maximum value on the list
/// </summary>
///
/// <param name="list">List to get the maximum number</param>
/// <param name="field">Optional fieldname from the list if not id</param>
///

const getNewId = (list, field = 'id') => {
  var res = Math.max.apply(
    Math,
    list.map(function (o) {
      return o[field];
    })
  );
  return res + 1;
};

export { getNewId };
