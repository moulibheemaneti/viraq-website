<template>
   <footer class="vq-footer">
      <p>&copy; 2025 ViraQ — Pause. Breathe. Recharge. All rights reserved.</p>
   </footer>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.vq-footer {
   text-align: center;
   padding: px-to-rem(24);
   font-size: px-to-rem(12);

   @include tablet-up {
      font-size: px-to-rem(14);
      line-height: 1;
   }
}
</style>
