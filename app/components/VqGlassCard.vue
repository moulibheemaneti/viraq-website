<template>
   <div class="vq-glass-card">
      <p class="vq-glass-card__title">
         {{ props.title }}<span>{{ props.titleSuffix }}</span>
      </p>
      <p class="vq-glass-card__description">{{ props.description }}</p>
   </div>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
   title: string;
   description: string;
   titleSuffix: string;
}>(), {});
</script>

<style lang="scss">
.vq-glass-card {
   padding: px-to-rem(16);
   background-color: rgba($color: #D4D4D4, $alpha: 0.1);
   backdrop-filter: blur(px-to-rem(36));
   box-shadow: inset px-to-rem(2) px-to-rem(4) px-to-rem(4) 0 rgba(#F5F0BB, 0.2);
   text-align: center;
   border-radius: px-to-rem(16);

   @include tablet-up {
      padding: px-to-rem(24);
   }

   &__title {
      font-size: px-to-rem(26);
      font-weight: 600;
      line-height: 1;
      margin-bottom: px-to-rem(16);

      @include tablet-up {
         font-size: px-to-rem(28);
      }

      @include desktop-up {
         font-size: px-to-rem(32);
      }

      &>span {
         font-size: inherit;
         line-height: inherit;
         font-weight: inherit;
         color: #F5F0BB;
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
