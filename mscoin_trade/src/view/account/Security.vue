<template>
  <div class="content">
    <div
      class="title font-16 font-bold"
      v-text="$t('accountSecurity')||'账户安全'"
    ></div>
    <!-- 认证 -->
    <div class="table-wrap bd-bottom">
      <div
        class="header"
        v-text="$t('security')||'安全认证'"
      ></div>
      <ul class="safe-auth">
        <!-- 修改密码 -->
        <li>
          <span>
            <i class="el-icon-success color-success"></i>
            <em>&nbsp;&nbsp;&nbsp;{{$t('loginPwd')||"登录密码"}}</em>
          </span>
          <span
            v-text="$t('loginPwdDesp')||'用于登录时的密码'"
            class="txt-center color-999"
          >
          </span>
          <span class="txt-rt">
            <a
              @click="bindHandle('loginPassword')"
              class="color-danger"
              href="javascript:"
              v-text="$t('change')||'修改'"
            >
            </a>
          </span>
        </li>
        <!-- 绑定资金密码 -->
        <li>
          <span>
            <i :class="bindState.tradstate !='0'?'el-icon-success color-success':'el-icon-warning color-danger'"></i>
            <em>&nbsp;&nbsp;&nbsp;{{$t('fundPwd')||"资金密码"}}</em>
          </span>
          <span
            v-text="$t('fundPwdDesp')||'交易时密码，请谨慎保管'"
            class="txt-center color-999"
          >
          </span>
          <span class="txt-rt">
            <a
              @click="bindHandle('financialPassword')"
              class="color-danger"
              href="javascript:"
              v-text="bindState.tradstate=='0'?$t('bind')||'绑定':$t('change')"
            >
            </a>
          </span>
        </li>
        <!-- 手机账户 -->
        <li>
          <span>
            <i class="el-icon-success color-success"></i>
            <em>&nbsp;&nbsp;&nbsp;{{$t('mobileAccount')||"手机账户"}}</em>
          </span>
          <span
            v-text="$t('mobileAccountDesp')||'登录时唯一账号'"
            class="txt-center color-999"
          >
          </span>
          <span class="txt-rt">
            <a
              :class="bindState.tel?'color-success':'color-danger'"
              href="javascript:"
              @click="bindHandle('tel')"
              v-text="bindState.tel?$t('label167'):$t('bind')"
            >
            </a>
          </span>
        </li>
        <!-- 邮箱 -->
        <li>
          <span>
            <i :class="bindState.emailstate >'0'?'el-icon-success color-success':'el-icon-warning color-danger'"></i>
            <em>&nbsp;&nbsp;&nbsp;{{$t('email')||"电子邮箱"}}</em>
          </span>
          <span
            v-text="$t('emailDesp')||'安全通知、登录、安全设置时输入'"
            class="txt-center color-999"
          >
          </span>
          <span class="txt-rt">
            <a
              :class="bindState.emailstate!='0'?'color-success':'color-danger'"
              href="javascript:"
              @click="bindHandle('email')"
              v-text="bindState.emailstate!='0'?$t('label168'):$t('bind')"
            >
            </a>
          </span>
        </li>
        <!-- 银行账户 -->
        <li>
          <span>
            <i :class="bindState.bankstate !='0'?'el-icon-success color-success':'el-icon-warning color-danger'"></i>
            <em>&nbsp;&nbsp;&nbsp;{{$t('bankAccount')||"银行账户"}}</em>
          </span>
          <span
            v-text="$t('bankAccountDesp')||'用户交易买入、卖出'"
            class="txt-center color-999"
          >
          </span>
          <span class="txt-rt">
            <a
              @click="bindHandle('bankAccount')"
              class="color-danger"
              href="javascript:"
              v-text="bindState.bankstate=='0'?$t('bind')||'绑定':$t('change')"
            >
            </a>
          </span>
        </li>
        <!-- google账户 -->
        <li>
          <span>
            <i :class="bindState.googlestate !='0'?'el-icon-success color-success':'el-icon-warning color-danger'"></i>
            <em>&nbsp;&nbsp;&nbsp;{{$t('googleAuth')||"谷歌验证"}}</em>
          </span>
          <span
            v-text="$t('googleAuthDesp')||'用户交易买入、卖出'"
            class="txt-center color-999"
          >
          </span>
          <span class="txt-rt">
            <a
              v-if="bindState.googlestate =='0'"
              @click="bindHandle('googleAccount')"
              class="color-danger"
              href="javascript:"
              v-text="$t('bind')||'绑定'"
            >
            </a>
            <em
              v-else
              class="color-999"
              v-text="bindState.val||'已绑定'"
            ></em>
          </span>
        </li>
        <!-- 实名认证 -->
        <li>
          <span>
            <i :class="bindState.idcardstate !='0'?'el-icon-success color-success':'el-icon-warning color-danger'"></i>
            <em>&nbsp;&nbsp;&nbsp;{{$t('identify')||"身份认证"}}</em>
          </span>
          <span
            v-text="$t('identifyDesp')||'用户交易买入、卖出银行卡绑定'"
            class="txt-center color-999"
          >
          </span>
          <span class="txt-rt">
            <a
              v-if="bindState.idcardstate =='0'"
              class="color-danger"
              href="javascript:"
              @click="navigateTo('/account/identify')"
              v-text="$t('label138')||'去认证'"
            >
            </a>
            <em
              v-else-if="bindState.idcardstate =='1'"
              class="color-success"
              v-text="$t('label146')||'审核中'"
            ></em>
            <em
              v-else
              class="color-999"
              v-text="bindState.val||'已绑定'"
            ></em>
          </span>
        </li>
      </ul>
    </div>
    <!-- 安全日志 -->
    <div class="table-wrap bd-bottom-none mt-20">
      <div
        class="header"
        v-text="$t('safeLogs')||'安全日志'"
      ></div>
      <el-table
        max-height='350'
        :data='authLogs'
      >
        <el-table-column
          :label='$t("orderNum")||"序号"'
          width='250'
          type='index'
        ></el-table-column>
        <el-table-column
          :label='$t("time")||"时间"'
          prop='wdate'
        ></el-table-column>
        <el-table-column
          :label='$t("operation")||"操作"'
          prop='updatelog'
        ></el-table-column>
        <!-- <el-table-column :label='$t("status")||"状态"' width='100'>
                <div slot-scope="scope" v-text="scope.row.state"></div>
              </el-table-column> -->
      </el-table>
    </div>
    <!-- 登录日志 -->
    <div class="table-wrap bd-bottom-none mt-20">
      <div
        class="header"
        v-text="$t('loginLogs')"
      ></div>
      <el-table
        max-height='350'
        :data='loginLogs'
      >
        <el-table-column
          :label='$t("orderNum")||"序号"'
          width='250'
          type='index'
        ></el-table-column>
        <el-table-column
          :label='$t("time")||"时间"'
          prop='wdate'
        ></el-table-column>
        <el-table-column
          label='IP'
          prop='ip'
        ></el-table-column>
        <!-- <el-table-column :label='$t("status")||"状态"'>
                <div slot-scope="scope" v-text="scope.row.state"></div>
              </el-table-column> -->
        <el-table-column
          width='100'
          :label='$t("type")||"类型"'
        >
          <div
            slot-scope="scope"
            v-html="scope.row.type=='1'?'web&nbsp;登录':'Mobile&nbsp;登录'"
          ></div>
        </el-table-column>
      </el-table>
    </div>
    <!-- 修改登录密码 -->
    <bind-password
      passwordType="loginpassword"
      :show='dialogId=="loginPassword"?true:false'
      :title='$t("changePwd")||"修改登录密码"'
      :bindEmail='bindState.emailstate=="0"?false:true'
      :bindCellphone='bindState.tel?true:false'
      apiKey='updateloginpwd'
      @closeModal='onClose'
    >
    </bind-password>
    <!-- 修改资金密码 -->
    <bind-password
      passwordType="tradepassword"
      :show='dialogId=="financialPassword"?true:false'
      :title='fundPassTitle'
      apiKey='updatepaypassword'
      :bindEmail='bindState.emailstate=="0"?false:true'
      :bindCellphone='bindState.tel?true:false'
      :passwordLabel='$t("newFundPwd")||"资金密码"'
      :oldPasswordLabel='$t("loginPwd")'
      @fundPasswordUpdated='fundPasswordUpdated'
      @closeModal='onClose'
    >
    </bind-password>
    <!-- 绑定邮箱 -->
    <bind-email
      :show='dialogId=="email"?true:false'
      @closeModal='onClose'
      @emailBind="emailBind"
    >
    </bind-email>
    <!-- 绑定手机 -->
    <bind-tel
      :show='dialogId=="tel"?true:false'
      @closeModal='onClose'
      @telBind="telBind"
    >
    </bind-tel>
    <!-- 绑定银行卡号 -->
    <bind-bank
      :show='dialogId=="bankAccount"?true:false'
      :ownerName='this.bindState.username'
      @bankCardBind='bankCardBind'
      @closeModal='onClose'
    >
    </bind-bank>
    <!-- 谷歌验证 -->
    <google-auth
      @onGoogleBind='onGoogleBind'
      :show='dialogId=="googleAccount"?true:false'
      @closeModal='onClose'
    >
    </google-auth>
  </div>
</template>
<script>
import bindPassword from "../../components/dialogContent/bindPassword";
import bindEmail from "../../components/dialogContent/bindEmail";
import bindTel from "../../components/dialogContent/bindTel";
import bindBank from "../../components/dialogContent/bindBankCard";
import googleAuth from "../../components/dialogContent/googleAuth";
export default {
  components: {
    bindPassword,
    bindEmail,
    bindBank,
    googleAuth,
    bindTel
  },
  data() {
    return {
      dialogId: "",
      bindState: {
        emailstate: "0"
      },
      authLogs: null,
      loginLogs: null
    };
  },
  mounted() {
    this.getState();
    this.getSafeLogs();
    this.getLoginLogs();
  },
  computed: {
    fundPassTitle() {
      return this.bindState.tradstate == "0"
        ? `${this.$t("bindFundPwd")}`
        : `${this.$t("change")}${this.$t("fundPwd")}`;
    }
  },
  methods: {
    bindHandle(k, index) {
      let idState = this.bindState.idcardstate;
      if (k == "bankAccount") {
        if (idState == "0") {
          this.$confirm(this.$t("label137"), this.$t("label140"), {
            confirmButtonText: this.$t("label138"),
            cancelButtonText: this.$t("label139"),
            type: "warning"
          }).then(() => {
            this.navigateTo("Identify");
          });
          return;
        } else if (idState == "1") {
          this.$alert(this.$t("label141"), this.$t("label140"), {
            confirmButtonText: this.$t("label138")
          });
          return;
        }
      }
      this.dialogId = k;
    },
    emailBind() {
      this.bindState.emailstate = "1";
    },
    onGoogleBind() {
      this.bindState.googlestate = "1";
    },
    bankCardBind() {
      this.bindState.bankstate = "1";
    },
    fundPasswordUpdated() {
      this.bindState.tradstate = "1";
    },
    telBind(tel) {
      this.bindState.tel = tel;
    },
    onClose() {
      this.dialogId = null;
    },
    getState() {
      this.request(this.api.saftyState, { showLoading: true }).then(res => {
        console.log(`账号状态：${JSON.stringify(res)}`);
        if (res && res.code != "0") {
          this.getDataFaild(res.msg || "获取数据失败");
          return false;
        }
        res.data && res.data.list && (this.bindState = res.data.list[0]);
      });
    },
    getSafeLogs() {
      this.request(this.api.logsafe).then(res => {
        console.log(`安全日志：${JSON.stringify(res)}`);
        if (res && res.code != "0") {
          this.getDataFaild(res.msg || "获取数据失败");
          return false;
        }
        res.data && res.data.list && (this.authLogs = res.data.list);
      });
    },
    getLoginLogs() {
      this.request(this.api.loglogin).then(res => {
        console.log(`登录日志：${JSON.stringify(res)}`);
        if (res && res.code != "0") return this.getDataFaild(res.msg);
        res.data && res.data.list && (this.loginLogs = res.data.list);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 25px;
}
.mt-20 {
  margin-top: 20px;
}

.table-wrap {
  border: $default-border;
  .header {
    @include textVcenter;
    background: #fcfcfc;
    padding: 0 15px;
    border-bottom: $default-border;
  }
  .safe-auth {
    padding: 0 15px;
    li {
      @include textVcenter;
      padding: 0 0.1%;
      border-top: $default-border;
      &:first-child {
        border-top: none;
      }
      span {
        height: inherit;
        float: left;
        display: block;
        width: 33.3%;
      }
    }
  }
}
.bd-bottom-none {
  border-bottom: none;
}
a,
i {
  &.danger {
    color: $color-danger;
  }
  &.success {
    color: $color-success;
  }
}
</style>

