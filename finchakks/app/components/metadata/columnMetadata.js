var AppendPercent = require('../format/AppendPercent');
var MoneyFormat = require('../format/MoneyFormat');
var ConvertToPercent = require('../format/ConvertToPercent');
var AppendPercentRoundedOff = require('../format/AppendPercentRoundedOff');
var ConvertToPercentRoundedOff = require('../format/ConvertToPercentRoundedOff');
var Trim = require('../format/Trim');

var helpers = {
    stockNameWithOptions: function()
  {
    var nameWithOptions =
    {
      "columnName": "stockName",
      "displayName": "Stock Name",
      "customComponent": Trim
    };
    return nameWithOptions;
  },

  nameStock: function()
  {
    var nameStock =
    {
      "columnName": "stockName",
      "displayName": "Stock Name",
      "customComponent": Trim
    };
    return nameStock;
  },

  impact: function()
  {
    var impactPercent =
    {
      "columnName": "impactOnAverageReturn",
      "displayName": "Impact",
      "customComponent": ConvertToPercent
    };
    return impactPercent;
  },

  returnPercent: function()
  {
    var returnPercent =
    {
      "columnName": "returnTillDate",
      "displayName": "Return %",
      "customComponent": AppendPercent
    };
    return returnPercent;
  },

  investment: function()
  {
    var investment =
    {
      "columnName": "totalInvestment",
      "displayName": "Investment",
      "customComponent": MoneyFormat
    };
    return investment;
  },

  absReturn: function()
  {
    var absReturn =
    {
      "columnName": "totalReturn",
      "displayName": "Return",
      "customComponent": MoneyFormat
    };
    return absReturn;
  },

  bankReturn: function()
  {
    var bankReturn =
    {
      "columnName": "totalReturnIfBank",
      "displayName": "Return(Bank)",
      "customComponent": MoneyFormat
    };
    return bankReturn;
  },

  quantity: function()
  {
    var quantity =
    {
      "columnName": "quantity",
      "displayName": "Qty",
      "customComponent": MoneyFormat
    };
    return quantity;
  },

  smvPercent: function()
  {
    var smvPercent =
    {
      "columnName": "simpleMovingAverageAndSellDeltaNormalized",
      "displayName": "SMV(%)",
      "customComponent": AppendPercentRoundedOff
    };
    return smvPercent;
  },

  netNDaysGain: function()
  {
    var netNDaysGain =
    {
      "columnName": "netNDaysGain",
      "displayName": "NDays(%)",
      "customComponent": ConvertToPercentRoundedOff
    };
    return netNDaysGain;
  },

  score: function()
  {
    var score =
    {
      "columnName": "stockRatingValue",
      "displayName": "Score"
    };
    return score;
  },

  investmentRatio: function()
  {
    var investmentRatio =
    {
      "columnName": "investmentRatio",
      "displayName": "Inv Ratio",
      "customComponent": ConvertToPercent
    };
    return investmentRatio;
  },

  industryInvestmentRatio: function()
  {
    var industryInvestmentRatio =
    {
      "columnName": "industryInvestmentRatio",
      "displayName": "Ind Inv Ratio",
      "customComponent": ConvertToPercent
    };
    return industryInvestmentRatio;
  },

  industryInvestmentRatio: function()
  {
    var industryInvestmentRatio =
    {
      "columnName": "industryInvestmentRatio",
      "displayName": "Ind Inv Ratio",
      "customComponent": ConvertToPercent
    };
    return industryInvestmentRatio;
  },

  sellPrice: function()
  {
    var sellPrice =
    {
      "columnName": "sellPrice",
      "displayName": "Close Price",
      "customComponent": MoneyFormat
    };
    return sellPrice;
  },

  simpleMovingAverage: function()
  {
    var simpleMovingAverage =
    {
      "columnName": "simpleMovingAverage",
      "displayName": "SMV",
      "customComponent": MoneyFormat
    };
    return simpleMovingAverage;
  },

  nDay1Gain: function()
  {
    var nDay1Gain =
    {
      "columnName": "nDay1Gain",
      "displayName": "Day1",
      "customComponent": AppendPercent
    };
    return nDay1Gain;
  },

  nDay2Gain: function()
  {
    var nDay2Gain =
    {
      "columnName": "nDay2Gain",
      "displayName": "Day2",
      "customComponent": AppendPercent
    };
    return nDay2Gain;
  },

  nDay3Gain: function()
  {
    var nDay3Gain =
    {
      "columnName": "nDay3Gain",
      "displayName": "Day3",
      "customComponent": AppendPercent
    };
    return nDay3Gain;
  },

  nDay4Gain: function()
  {
    var nDay4Gain =
    {
      "columnName": "nDay4Gain",
      "displayName": "Day4",
      "customComponent": AppendPercent
    };
    return nDay4Gain;
  },

  nDay5Gain: function()
  {
    var nDay5Gain =
    {
      "columnName": "nDay5Gain",
      "displayName": "Day5",
      "customComponent": AppendPercent
    };
    return nDay5Gain;
  },

  nDay6Gain: function()
  {
    var nDay6Gain =
    {
      "columnName": "nDay6Gain",
      "displayName": "Day6",
      "customComponent": AppendPercent
    };
    return nDay6Gain;
  },

  industry: function()
  {
    var industry =
    {
      "columnName": "industry",
      "displayName": "Ind"
    };
    return industry;
  },

  buyDate: function()
  {
    var buyDate =
    {
      "columnName": "buyDate",
      "displayName": "Buy Date"
    };
    return buyDate;
  },

  buyPrice: function()
  {
    var buyPrice =
    {
      "columnName": "buyPrice",
      "displayName": "Buy Price",
      "customComponent": MoneyFormat
    };
    return buyPrice;
  },

  duration: function()
  {
    var duration =
    {
      "columnName": "duration",
      "displayName": "Duration"
    };
    return duration;
  },

  bankSellPrice: function()
  {
    var bankSellPrice=
    {
      "columnName": "bankSellPrice",
      "displayName": "Sell Price(Bank)",
      "customComponent": MoneyFormat
    };
    return bankSellPrice;
  },

  diff: function()
  {
    var diff=
    {
      "columnName": "diff",
      "displayName": "Diff",
      "customComponent": MoneyFormat
    };
    return diff;
  },

  lowerReturnPercentTarget: function()
  {
    var lowerReturnPercentTarget=
    {
      "columnName": "lowerReturnPercentTarget",
      "displayName": "L. Target Return %",
      "customComponent": AppendPercent
    };
    return lowerReturnPercentTarget;
  },

  upperReturnPercentTarget: function()
  {
    var upperReturnPercentTarget=
    {
      "columnName": "upperReturnPercentTarget",
      "displayName": "U. Target Return %",
      "customComponent": AppendPercent
    };
    return upperReturnPercentTarget;
  },

  lowerSellPriceTarget: function()
  {
    var lowerSellPriceTarget=
    {
      "columnName": "lowerSellPriceTarget",
      "displayName": "L. Target Price",
      "customComponent": MoneyFormat
    };
    return lowerSellPriceTarget;
  },

  upperSellPriceTarget: function()
  {
    var upperSellPriceTarget=
    {
      "columnName": "upperSellPriceTarget",
      "displayName": "U. Target Price",
      "customComponent": MoneyFormat
    };
    return upperSellPriceTarget;
  },

  achieveAfterDate: function()
  {
    var achieveAfterDate=
    {
      "columnName": "achieveAfterDate",
      "displayName": "Achieve After"
    };
    return achieveAfterDate;
  },

  achieveByDate: function()
  {
    var achieveByDate=
    {
      "columnName": "achieveByDate",
      "displayName": "Achieve By"
    };
    return achieveByDate;
  }

};


module.exports = helpers;
