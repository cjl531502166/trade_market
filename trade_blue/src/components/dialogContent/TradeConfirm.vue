<template>
    <dialog-box 
        :showDialog='showModal'
        :dialogTitle='title'
        @onDialogClose='closeModal'>
        <div class="content">
            <div class="form-group">
                <span class="label" v-text="numLabel"></span>
                <el-input name='num' :value='number'></el-input>
            </div>
            <div class="form-group">
                <span class="label" v-text="valuationLabel"></span>
                <el-input name="valuation"
                    :value='price'>
                    <span class="slot-text font-16 color-666" slot="suffix" v-text="coin"></span>
                </el-input>
            </div>
            <div class="form-group">
                <span class="label" v-text="amountLabel"></span>
                <el-input name='amount' :value='total'>
                    <span class="slot-text font-16 color-666" slot="suffix">CNY</span>
                </el-input>
            </div>
            <div class="form-group">
                <span class="label" v-text="tradeModeLabel ||'交易方式'"></span>
                <el-select v-model="tradeMode" placeholder="请选择">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </div>
            <div class="btn-group">
                <button
                  @click='formSubmit' class="btn-block btn-large btn-danger btn-active"
                  v-text="$t('submit')||'提交'">
                </button>
                <!-- <button
                  class="btn-block btn-large btn-bordered btn-active"
                  v-text="$t('cancel')||'取消'">
                </button> -->
            </div>
        </div>
    </dialog-box>
</template>
<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: String,
    numLabel: String,
    amountLabel: String,
    valuationLabel: String,
    tradeModeLabel: String,
    number: String,
    coin: String,
    price: String
  },
  data() {
    return {
      tradeMode: "银行卡",
      showModal: this.show,
      options: [
        {
          value: "银行卡",
          label: "银行卡"
        }
      ]
    };
  },
  computed: {
    total() {
      return this.price * 1 * this.number * 1;
    }
  },
  watch: {
    show: function() {
      this.showModal = this.show;
    }
  },
  methods: {
    formSubmit() {
      this.$emit("onSubmit");
    },
    closeModal() {
      this.showModal = false;
      this.$emit("closeModal");
    }
  }
};
</script>
<style lang="scss" scoped>
.form-group {
  margin-top: 15px;
  .label {
    display: inline-block;
    margin-bottom: 10px;
  }
  .slot-text {
    @include textVcenter;
  }
  .el-select {
    display: block;
  }
}
.btn-group {
  margin-top: 30px;
  .btn-bordered {
    margin-top: 15px;
  }
}
</style>

