var helpers = {

  isValidArray: function(inputArray)
  {
      return typeof inputArray!='undefined' && inputArray!=0;
  },

  isInvalidString: function(inputString)
  {
      return inputString == null || inputString==='null' || inputString === 'undefined';
  },

  nullSafeDouble: function(inputDouble)
  {
    return typeof inputDouble==='undefined' ? 0.0 : inputDouble;
  },

  nullSafeString: function(inputString)
  {
    return inputString==='undefined' ? '' : inputString;
  },

  nullSafeObject: function(inputObject)
  {
    return inputObject==='undefined' ? {} : inputObject;
  },

  nullSafeArray: function(inputArray)
  {
    return inputArray==='undefined' ? [] : inputArray;
  },

  appendLoadingStatus: function(inputString, loadingStatus)
  {
    return loadingStatus ? inputString+" Loading..." : inputString;
  },

};

module.exports = helpers;
