<template>
    <div class="main-container">
        <div class="l_title">交易须知</div>
        <div class="show-content-free">
            <p><b>交易类型</b></p><p>1.场内交易</p><p>在交易平台上进行撮合，买卖价格公开，平台实时显示当前的报价，这个就叫做场内交易。</p><p>2.场外交易</p><p>除了在交易平台之外的交易，统称为场外交易市场，又叫做OTC交易市场，在交易平台之外还有一些其他的地方可以进行交易，这些市场没有集中的和统一的交易制度和撮合机制。</p><p>3.限价交易</p><p>限价交易即挂单交易，您可以自己设定买入价格，等市场价格波动到您设定的价格时即可成交。</p><p>4.市价交易</p><p>市价交易即不设定买入/卖出价格，可以保证及时成交，只需输入想买入的总数量即可。</p><p>5.指数交易</p><p>根据产品交易过程中的核心指标如订单数、买家数、支付件数、支付金额等，进行综合计算得出的数值。</p><p>6.量化交易</p><p>有时候也称自动化交易，是指以先进的数学模型替代人为的主观判断。极大地减少了投资者情绪波动的影响，避免在市场极度狂热或悲观的情况下做出非理性的投资决策。量化交易有很多种，包括跨平台搬砖、趋势交易、对冲等。</p><p><b>交易时间及涨跌限制</b></p><p>1.交易时间：7*24小时，全年无休市。</p><p>2.无涨跌停： 数字货币交易无涨跌停限制，股票有涨跌停限制，例如：5月28日比特币单日涨幅超20%。</p><p>3.交易单位：最小可买0.0001BTC（约0.6元），没有股票最少买一手（100股）的买入限制。</p><p>4.随时交易：即T+0，股票是T+1交易，即当天买入股票，下一个交易日才可卖出。而数字货币是T+0交易，当天买入当天即可卖出。</p><p>5.提币与变现无时间限制：随时提币变现，资金流动性高。</p><p><b>成交的基本原则</b></p><p>1.限价交易：投资者可以设低于市场价格的买入价格，或高于市场价格的卖出价格的委托，当市场价格波动到其设定的价格时，即成交。当设定的价格和市价偏离较大时，容易出现无法成交的结果。</p><p>2.市价交易：以当时的市场价成交，在一定程度上可以保证投资者买卖指令及时成交，但与此同时，市价委托下单前投资者无法预知其交易价格，存在一定的不确定性。一般来说，行情波动越剧烈，市价交易的成交价格不确定性风险越大。</p><p>3.成交的基本原则：“价格优先，时间优先”原则。较高的买入价格优于较低的买入价格成交，较低的卖出价格优于较高的卖出价格成交，当委托价格一样时，挂单时间较早的委托单优于挂单时间较晚的委托单成交。</p>
        </div>
    </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.l_title {
  font-size: 20px;
  height: 60px;
  line-height: 60px;
  margin: 20px 0;
  border-radius: 3px;
  padding: 0 30px;
  background: #f1f1f1;
}
.main-container {
  width: $content-width;
  margin: 0 auto;
  .show-content-free {
    background: #f1f1f1;
    padding: 30px;
    color: #2f2f2f;
    word-break: break-word;
    word-break: break-all;
    line-height: 2;
    b {
      display: block;
      margin: 15px 0;
    }
  }
}
</style>