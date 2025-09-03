<template>
   <header class="vq-header">
      <vq-logo is-small />

      <nav class="vq-header__nav">
         <div v-for="item in navItems" :key="item.id"
            :class="['vq-header__nav-item', { 'active': item.id === activeNavItem }]" @click="handleNavClick(item)"
            role="button" tabindex="0">
            {{ item.label }}
         </div>
      </nav>
      <vq-button>Download App</vq-button>
   </header>
</template>

<script lang="ts" setup>
const navItems = [
   {
      id: 1,
      label: "Home",
      href: "home"
   },
   {
      id: 2,
      label: "About Us",
      href: "about-us"
   },
   {
      id: 3,
      label: "Features",
      href: "features"
   }
];

const activeNavItem = ref(navItems[0]?.id ?? 1);

// Intersection Observer for scroll-based highlighting
let observer: IntersectionObserver | null = null;

const handleNavClick = (item: typeof navItems[number]) => {
   activeNavItem.value = item.id;

   window.scrollTo({
      top: item.href === "home"
         ? 0
         : (document.getElementById(item.href)?.offsetTop ?? 0) - 80,
      behavior: "smooth"
   });
};

// Setup intersection observer to track which section is visible
onMounted(() => {
   const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top and 70% from bottom
      threshold: 0
   };

   observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const navItem = navItems.find(item => item.href === sectionId);
            if (navItem) {
               activeNavItem.value = navItem.id;
            }
         }
      });
   }, options);

   // Observe all sections
   navItems.forEach(item => {
      const element = document.getElementById(item.href);
      if (element) {
         observer?.observe(element);
      }
   });
});

// Cleanup observer on unmount
onUnmounted(() => {
   if (observer) {
      observer.disconnect();
      observer = null;
   }
});
</script>

<style lang="scss">
.vq-header {
   position: sticky;
   top: 0;
   z-index: z-index("header");

   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: px-to-rem(12) px-to-rem(16);

   background-color: rgba($color: #021516, $alpha: 0.2);
   backdrop-filter: blur(px-to-rem(24));
   box-shadow: 0 4px 16px 0 rgba($color: #021516, $alpha: 0.6);

   @include tablet-up {
      padding: px-to-rem(16) px-to-rem(24);
   }


   @include mobile-only {
      gap: px-to-rem(16);
      padding: px-to-rem(16);
   }

   &__nav {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: px-to-rem(16);
      flex-direction: row;

      @include mobile-only {
         display: none;
      }

      @include tablet-up {
         gap: px-to-rem(24);
      }
   }

   &__nav-item {
      color: #8E8E8E;
      font-weight: 500;
      font-size: px-to-rem(14);

      @include tablet-up {
         font-size: px-to-rem(16);
      }

      &.active,
      &:hover {
         color: #F5F0BB;
         cursor: pointer;

         transition: all 0.3s ease;
      }
   }
}
</style>
