<template>
   <div class="vq-feature-card">
      <div class="vq-feature-card__inner">
         <p class="vq-feature-card__icon">{{ props.icon }}</p>
         <p class="vq-feature-card__title">{{ props.title }}</p>
         <p class="vq-feature-card__description">{{ props.description }}</p>
      </div>
   </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
   icon: string;
   title: string;
   description: string;
}>(), {});
</script>

<style lang="scss">
.vq-feature-card {
   padding: px-to-rem(2);
   background: linear-gradient(45deg, #F5F0BB 0%, #00A8AB 100%);
   text-align: center;

   &,
   &__inner {
      border-radius: px-to-rem(16);
   }

   &__inner {
      padding: px-to-rem(24) px-to-rem(12);
      background-color: #003133;
      height: 100%;

      @include tablet-up {
         padding: px-to-rem(32) px-to-rem(16);
      }
   }

   &__icon,
   &__title {
      margin-bottom: px-to-rem(24);
      line-height: 1;
   }

   &__icon {
      font-size: px-to-rem(48);
      margin-bottom: px-to-rem(24);
      line-height: 1;

      @include tablet-up {
         font-size: px-to-rem(56);
      }

      @include desktop-up {
         font-size: px-to-rem(64);
      }
   }

   &__title {
      font-size: px-to-rem(18);
      font-weight: 600;

      @include tablet-up {
         font-size: px-to-rem(20);
      }

      @include desktop-up {
         font-size: px-to-rem(24);
      }
   }

   &__description {
      font-size: px-to-rem(16);

      @include tablet-up {
         font-size: px-to-rem(18);
      }

      @include desktop-up {
         font-size: px-to-rem(20);
      }
   }
}
</style>
