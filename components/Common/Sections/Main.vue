<template>
  <div class="w-full h-screen relative text-white">
    <img src="/images/main-bg.jpg" class="absolute w-full h-full object-cover" alt="main" />
    <div class="container relative z-[100] top-[185px]">
      <div class="max-w-[873px]">
        <p class="font-bold text-[64px] leading-[100%] mb-6">Создай своему бренду безупречную репутацию в интернете</p>
        <p class="font-medium text-2xl leading-130 mb-20">
          Мы повышаем конверсию и увеличиваем продажи, легально очищая вас от
          клеветы и формируя правильное общественное мнение о компании в
          интернете
        </p>
        <Button :label="'Бесплатный аудит'" :class="'transition-200 hover:bg-white hover:text-orange hover:border-white'"/>
      </div>
    </div>
  </div>
</template>
