<template>
    <div class="flex p-3 justify-between">
        <p>Material Kit 2</p>
        <div class="flex">
            <div class="flex gap-1">
                <img :src="pages" class="w-[15px] h-[15px]" alt="images"/>
                <p>pages</p>
                <img :src="downArrow" class="w-[10px] h-[10px]" alt="downarrow"/>
            </div>
            <div class="flex gap-1">
                <img :src="sections" class="w-[15px] h-[15px]" alt="sections"/>
                <p>sections</p>
                <img :src="downArrow" class="w-[10px] h-[10px]" alt="downarrow"/>

            </div>
            <div class="flex gap-1">
                <img :src="docs" class="w-[15px] h-[15px]" alt="docs"/>
                <p>docs</p>
                <img :src="downArrow" class="w-[10px] h-[10px]" alt="downarrow"/>

            </div>
            <div>


            </div>
            <div>


            </div>
        </div>
    </div>
</template>
<script>
import pages from './../assets/icons/layout-fluide.png';
import sections from './../assets/icons/agrandir-la-fenetre.png';
import docs from './../assets/icons/document-signe.png';
import downArrow from './../assets/icons/down-arrow.png';
import github from './../assets/icons/github.png';

export default {
  data() {
    return {
      pages: pages,
      sections: sections,
      docs: docs,
      downArrow: downArrow,
      github: github
    };
  },
};
</script>