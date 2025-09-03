<template>
   <vq-header />

   <main class="main">
      <section id="home" class="section section--hero">
         <vq-logo height="48" />

         <p class="section__title">
            Pause<span>.</span>
            Breathe<span>.</span>
            Recharge<span>.</span>
         </p>

         <p class="section__description">
            Your Digital Well-being companion — take control of your time, reduce burnout, and build healthier habits in
            a hyper-connected world.
         </p>

         <div class="section__buttons">
            <vq-button>Download App</vq-button>
            <vq-button variant="outline">Learn More</vq-button>
         </div>

      </section>

      <section id="about-us" class="section section--about-us">
         <vq-glass-card v-for="about in aboutData" :key="about.id" :title="about.title"
            :title-suffix="about.titleSuffix" :description="about.description" />
      </section>

      <section id="features" class="section section--features">
         <p class="section__title">Features<span>.</span></p>

         <div class="features-list">
            <vq-feature-card v-for="feature in features" :key="feature.id" :icon="feature.icon" :title="feature.title"
               :description="feature.description" />
         </div>
      </section>
      <vq-footer />
   </main>

   <vq-footer-decorator />
</template>

<script lang="ts" setup>
const aboutData = [
   {
      id: 1,
      title: "Why ViraQ",
      titleSuffix: "?",
      description: "In today’s always-on digital world, focus and balance are harder than ever. ViraQ is designed to help you reclaim your time with mindful breaks, hydration reminders, screen-time insights, and guided relaxation. It’s not just a reminder app — it’s your personal cue for digital well-being."
   },
   {
      id: 2,
      title: "About ViraQ",
      titleSuffix: ".",
      description: "ViraQ is more than just a break reminder — it’s a companion for digital well-being. The name is inspired by the Sanskrit word “Virama” (विराम), meaning pause or rest, combined with “Q” for Cue or Reminder. Together, they embody the app’s purpose: to give you timely cues to pause, recuperate, and recharge amidst your busy digital life. With ViraQ, you take control of your time, build healthier habits, and create space for balance in a hyper-connected world."
   }
];

const features = [
   {
      id: 1,
      icon: "⏰",
      title: "Smart Reminders",
      description: "Set personalized intervals for breaks, hydration, and deep breathing."
   },
   {
      id: 2,
      icon: "🌿",
      title: "Mindful Breaks",
      description: "Follow guided breathing, stretch suggestions, and short meditations."
   },
   {
      id: 3,
      icon: "⏸️",
      title: "Digital Balance",
      description: "Track screen time habits, block distracting apps, and stay deeply focused."
   },
   {
      id: 4,
      icon: "🌱",
      title: "Progress Tracking",
      description: "View detailed reports, build lasting streaks, and unlock fun rewards."
   }
];
</script>

<style lang="scss">
.main {
   max-width: px-to-rem(800);
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
   gap: px-to-rem(24);
   text-align: center;
   padding: 0 px-to-rem(16);

   @include tablet-up {
      gap: px-to-rem(32);
      padding: 0;
   }
}

.section {
   flex-direction: column;
   margin-top: px-to-rem(24);
   padding: 0 px-to-rem(16);

   @include tablet-up {
      margin-top: px-to-rem(32);
      padding: 0;
   }

   &,
   &__buttons {
      display: flex;
      align-items: center;
      justify-content: center;
   }

   &__title {
      font-size: px-to-rem(32);
      font-weight: 600;
      line-height: 1;
      margin-bottom: px-to-rem(16);

      @include tablet-up {
         font-size: px-to-rem(36);
         margin-bottom: px-to-rem(24);
      }

      @include desktop-up {
         font-size: px-to-rem(40);
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
      font-weight: 300;
      margin-bottom: px-to-rem(32);

      @include tablet-up {
         font-size: px-to-rem(18);
      }

      @include desktop-up {
         font-size: px-to-rem(20);
      }
   }

   &__buttons {
      gap: px-to-rem(16);

      @include tablet-up {
         gap: px-to-rem(24);
      }
   }
}

.section--hero {
   .vq-logo {
      margin-bottom: px-to-rem(24);

      @include tablet-up {
         margin-bottom: px-to-rem(32);
      }
   }
}

.section--about-us {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: px-to-rem(32);

   @include tablet-up {
      gap: px-to-rem(48);
   }
}

.features-list {
   display: grid;
   grid-template-columns: 1fr;
   gap: px-to-rem(24);

   @include tablet-up {
      grid-template-columns: repeat(2, 1fr);
      column-gap: px-to-rem(24);
      row-gap: px-to-rem(32);
   }

   &>* {
      min-width: 0;
      width: 100%;
   }
}
</style>
