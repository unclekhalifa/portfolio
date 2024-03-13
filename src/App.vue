<template>
  <div>
    <div class="mx-auto flex min-h-screen max-w-4xl flex-col gap-9 px-10 py-8 text-base-content md:gap-20 md:py-16">
      <header
        class="z-40 flex w-full flex-col gap-3 sm:gap-2 md:flex-row md:justify-between pb-5 md:pb-0 text-neutral-content">
        <span class="text-xl">Tahir Murata</span>
        <div className="text-sm custom-breadcrumbs">
          <ul>
            <li><router-link activeClass="text-base-content" to="/">Home</router-link></li>
            <li><router-link activeClass="text-base-content" to="/posts">Posts</router-link></li>
            <li><router-link activeClass="text-base-content" to="/projects">Projects</router-link></li>
          </ul>
        </div>
      </header>
      <div
        class="fixed z-0 h-[150px] w-[150px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] xl:w-[260px] xl:h-[260px] rounded-full bg-primary blur-[150px] opacity-30 left-10 top-10">
      </div>
      <div
        class="fixed z-0 h-[150px] w-[150px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] xl:w-[260px] xl:h-[260px] rounded-full bg-secondary blur-[150px] opacity-30 right-10 bottom-10">
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.custom-breadcrumbs {
  max-width: 100%;
  overflow-x: auto;
  padding-top: 0.5%;
}

.custom-breadcrumbs>ul {
  display: flex;
  align-items: center;
  white-space: nowrap;
  min-height: min-content;
}

.custom-breadcrumbs>ul>li {
  display: flex;
  align-items: center;
}

.custom-breadcrumbs>ul>li>a {
  display: flex;
  cursor: pointer;
  align-items: center;
}

@media (hover:hover) {

  .custom-breadcrumbs>ul>li>a:hover {
    text-decoration-line: underline;
  }
}

.custom-breadcrumbs>ul>li>a:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.custom-breadcrumbs>ul>li>a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 2px;
}

.custom-breadcrumbs>ul>li+*:before {
  content: "/";
  margin-left: 0.5rem
    /* 8px */
  ;
  margin-right: 0.75rem
    /* 12px */
  ;
  display: block;
  opacity: 0.4;
  background-color: transparent;
}

[dir="rtl"] .custom-breadcrumbs>ul>li+*:before {
  --tw-rotate: -180deg;
}
</style>