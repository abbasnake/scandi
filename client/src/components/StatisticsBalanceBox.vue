<template>
  <div class="box">
    <div class="box__border" :class="{'border-decrease': borderDecrease}">
      <div class="box__border__dollars">
        {{ getDollars }}
      </div>
      <div class="box__border__cents">
        {{ getCents }}
      </div>
      <div class="box__border__icon">
        <icon-increase v-if="type === 'increase'"></icon-increase>
        <icon-decrease v-else-if="type === 'decrease'"></icon-decrease>
      </div>
    </div>
  </div>
</template>

<script>
import IconIncrease from '@/components/IconIncrease'
import IconDecrease from '@/components/IconDecrease'

export default {
  name: 'StatisticsBalanceBox',
  data () {
    return {
      borderDecrease: this.isDecrease()
    }
  },
  props: {
    type: String,
    required: true
  },
  components: {
    'icon-increase': IconIncrease,
    'icon-decrease': IconDecrease
  },
  methods: {
    isDecrease () {
      return this.type === 'decrease'
    }
  },
  computed: {
    getCurrentAmount () {
      let type = this.isDecrease() ? 'Decrease' : 'Increase'
      return this.$store.getters[`current${type}`]
    },
    getDollars () {
      let currentAmount = this.getCurrentAmount
      let prefix = this.isDecrease() ? '-$' : '+$'
      return `${prefix}${Math.floor(currentAmount)}`
    },
    getCents () {
      let currentAmount = this.getCurrentAmount
      let cents = currentAmount.toString().slice(-2)
      return cents
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/variables';

.box {
  height: 100%;
  padding: 10px;
  &__border {
    border: 1px solid $accent-blue;
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
    ". dollars cents ."
    ". dollars icon .";
    height: 100%;
    &__dollars {
      align-self: center;
      font-size: 28px;
      grid-area: dollars;
      justify-self: end;
    }
    &__cents {
      align-self: end;
      grid-area: cents;
    }
    &__icon {
      align-self: start;
      grid-area: icon;
      padding-bottom: 5px;
      padding-left: 2px;
    }
  }
}

// add this border if decrease box otherwise (default) increase box border
.border-decrease {
  border: 1px solid $accent-red;
}
</style>
