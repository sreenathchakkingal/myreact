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

  name: function()
  {
    var name =
    {
      "columnName": "stockName",
      "displayName": "Stock Name",
      "customComponent": Trim
    };
    return name;
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

  listColumnMetadata: function() {
    var metadata=[
      {
      "columnName": "stockName",
      "displayName": "Stock Name",
      "customComponent": Trim
      },
      {
      "columnName": "returnTillDate",
      "displayName": "Return %",
      "customComponent": AppendPercent
      },
      {
      "columnName": "totalInvestment",
      "displayName": "Investment",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "quantity",
      "displayName": "Qty",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "sellableQuantity",
      "displayName": "Sellable Qty",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "totalReturn",
      "displayName": "Return",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "totalReturnIfBank",
      "displayName": "Return(Bank)",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "impactOnAverageReturn",
      "displayName": "Impact",
      "customComponent": ConvertToPercent
      },
      {
      "columnName": "stockRatingValue",
      "displayName": "Score"
      },
      {
      "columnName": "investmentRatio",
      "displayName": "Inv Ratio",
      "customComponent": ConvertToPercent
      },
      {
      "columnName": "industryInvestmentRatio",
      "displayName": "Ind Inv Ratio",
      "customComponent": ConvertToPercent
      },
      {
      "columnName": "sellPrice",
      "displayName": "Close Price",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "simpleMovingAverage",
      "displayName": "SMV",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "simpleMovingAverageAndSellDeltaNormalized",
      "displayName": "SMV(%)",
      "customComponent": AppendPercentRoundedOff
      },
      {
      "columnName": "netNDaysGain",
      "displayName": "NDays(%)",
      "customComponent": ConvertToPercentRoundedOff
      },
      {
      "columnName": "industry",
      "displayName": "Ind"
      },
      {
      "columnName": "nDay1Gain",
      "displayName": "Day1",
      "customComponent": AppendPercent
      },
      {
      "columnName": "nDay2Gain",
      "displayName": "Day2",
      "customComponent": AppendPercent
      },
      {
      "columnName": "nDay3Gain",
      "displayName": "Day3",
      "customComponent": AppendPercent
      },
      {
      "columnName": "nDay4Gain",
      "displayName": "Day4",
      "customComponent": AppendPercent
      },
      {
      "columnName": "nDay5Gain",
      "displayName": "Day5",
      "customComponent": AppendPercent
      },
      {
      "columnName": "nDay6Gain",
      "displayName": "Day6",
      "customComponent": AppendPercent
      },
      {
      "columnName": "buyDate",
      "displayName": "Buy Date"
      },
      {
      "columnName": "buyPrice",
      "displayName": "Buy Price",
      "customComponent": MoneyFormat
    },
      {
      "columnName": "duration",
      "displayName": "Duration"
      },
      {
      "columnName": "sellPrice",
      "displayName": "Return",
      "customComponent": MoneyFormat
      },
      {
      "columnName": "bankSellPrice",
      "displayName": "Return(Bank)",
      "customComponent": MoneyFormat
      }
    ];
    return metadata;
  }
};

module.exports = helpers;
