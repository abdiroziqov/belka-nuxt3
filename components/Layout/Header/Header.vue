<template>
    <div class="bg-transparent py-5 text-white fixed w-full top-0 z-[99]">
      <div class="container">
        <nav class="flex items-center justify-between gap-x-5">
          <div>
            <CommonLogo/>
          </div>
          <div>
            <HeaderNavbar/>
          </div>
          <div>
            <a
                href="tel:74951447886"
                class="mr-8 text-2xl leading-130 transition-200 hover:text-orange"
            >+7 (495) 144-7886</a
            >
            <Button
                :label="'Оставить заявку'"
                :class="'transition-200 hover:bg-white hover:text-orange hover:border-white'"
            />
          </div>
        </nav>
      </div>
    </div>
</template>
