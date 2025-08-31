<template>
   <div class="vq-footer-decorator">
      <p>ViraQ</p>
      <div class="vq-footer-decorator__overlay" />
   </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.vq-footer-decorator {
   position: relative;
   bottom: 0;
   left: 0;
   width: 100%;
   height: px-to-rem(200);

   display: flex;
   align-items: flex-end;
   justify-content: center;

   p {
      font-size: px-to-rem(128);
      font-weight: 700;
      opacity: 0.2;
   }

   &__overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(2, 21, 22, 0) 0%, rgba(2, 21, 22, 0.9) 60%, rgba(2, 21, 22, 1) 100%);

   }
}
</style>
