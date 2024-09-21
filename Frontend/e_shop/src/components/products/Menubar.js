function MenuBar() {
    return (  
        

<>

    
<div class="main flex border-sm  bg-zinc-700   overflow-hidden m-4 select-none">
  <div class="title py-3 my-auto px-5 bg-orange-300 text-white text-sm font-semibold mr-3">Types</div>
  <label class="flex radio p-2 cursor-pointer">
    <input class="my-auto transform scale-125" type="radio" name="sfg" />
    <div class="title px-2">cake</div>
  </label>

  <label class="flex radio p-2 cursor-pointer">
    <input class="my-auto transform scale-125" type="radio" name="sfg" />
    <div class="title px-2">pastry</div>
  </label>

  <label class="flex radio p-2 cursor-pointer">
    <input class="my-auto transform scale-125" type="radio" name="sfg" />
    <div class="title px-2">drinks</div>
  </label>

  <label class="flex radio p-2 cursor-pointer">
    <input class="my-auto transform scale-125" type="radio" name="sfg" />
    <div class="title px-2">juice</div>
  </label>

  <label class="flex radio p-2 cursor-pointer font-extralight text-xs">
    <input class="my-auto transform scale-125" type="checkbox" name="sfg" checked />
    <div class="title px-2 my-auto">show all</div>
  </label>
</div>

</>

    );
}


export default MenuBar;