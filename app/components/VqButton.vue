<template>
   <button :class="computedClasses">
      <slot />
   </button>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
   variant?: "primary" | "outline";
}>(), {
   variant: "primary",
});

const computedClasses = computed(() => {
   return {
      "vq-button": true,
      "vq-button--outline": props.variant === "outline",
   };
});

</script>

<style lang="scss">
.vq-button {
   padding: px-to-rem(12) px-to-rem(16);
   border-radius: px-to-rem(50);
   background-color: #006769;
   color: #fff;
   min-width: fit-content;

   font-size: px-to-rem(14);
   font-weight: 600;
   line-height: 1;

   @include tablet-up {
      font-size: px-to-rem(16);
   }

   @include desktop-up {
      font-size: px-to-rem(18);
   }

   &:hover {
      opacity: 0.8;
      cursor: pointer;
      transition: all 0.3s ease;
   }

   &--outline {
      background-color: transparent;
      border: 1px solid #006769;

      &:hover {
         background-color: #006769;
         color: #fff;
      }
   }

   &:active {
      box-shadow: 0 0 0 5px #021516, 0 0 0 8px rgba(0, 103, 105, 0.8);
   }

}
</style>
