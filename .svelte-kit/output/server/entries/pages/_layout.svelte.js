import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-bjyafy.svelte-bjyafy{font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;padding:0;margin:0;z-index:3}nav.svelte-bjyafy.svelte-bjyafy{display:flex;position:sticky;top:0;left:0;margin:0;height:5vw;align-items:flex-end;backdrop-filter:blur(10px)}.navbar.svelte-bjyafy.svelte-bjyafy{display:flex;justify-content:flex-end;list-style:none;align-items:flex-end}#name.svelte-bjyafy.svelte-bjyafy{width:100%;font-family:'Jost', sans-serif;font-size:3vw;text-align:center;color:rgb(35, 35, 32);white-space:nowrap;overflow:hidden}.w-nav-link.svelte-bjyafy.svelte-bjyafy{font-weight:bold;font-size:3vw;text-decoration:none;color:rgb(35, 35, 32);margin:0px 50px;display:inline-block;position:relative;opacity:0.75}#contact.svelte-bjyafy.svelte-bjyafy{display:flex}.icon.svelte-bjyafy.svelte-bjyafy{opacity:.75;width:3vw;color:rgb(35, 35, 32)}#home.svelte-bjyafy.svelte-bjyafy{text-decoration:none;color:rgb(35, 35, 32)}.nav-logo.svelte-bjyafy.svelte-bjyafy{text-decoration:none;color:rgb(35, 35, 32 );filter:grayscale(100%)}#contact.svelte-bjyafy:hover .icon.svelte-bjyafy{transform:rotate(-180deg);-webkit-transform:rotate(-180deg)}.w-nav-link.svelte-bjyafy.svelte-bjyafy:hover{opacity:1}.nav-logo.svelte-bjyafy.svelte-bjyafy:hover{filter:grayscale(0%)}#logo.svelte-bjyafy.svelte-bjyafy{width:3vw;height:4vw;margin:0;margin-left:0.5vw;margin-bottom:0.5vh;padding:0}.dropdown.svelte-bjyafy.svelte-bjyafy{position:relative;display:inline-block}.dropdown-content.svelte-bjyafy.svelte-bjyafy{display:none;position:absolute;background-color:#f9f9f9;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1}.dropdown-content.svelte-bjyafy a.svelte-bjyafy{color:black;padding:12px 16px;text-decoration:none;display:block}.dropdown-content.svelte-bjyafy a.svelte-bjyafy:hover{background-color:#f1f1f1 }.dropdown.svelte-bjyafy:hover .dropdown-content.svelte-bjyafy{display:block}.contact-link.svelte-bjyafy.svelte-bjyafy{font-size:20px}#button-img.svelte-bjyafy.svelte-bjyafy{width:10vw;height:10vw}#menu-button.svelte-bjyafy.svelte-bjyafy{width:10vw}.menu-element.svelte-bjyafy.svelte-bjyafy{display:block}.menu-wrapper.svelte-bjyafy.svelte-bjyafy{display:grid;position:fixed;top:10px;right:6vw;grid-template-rows:(2, 1fr);gap:0px;grid-auto-rows:(100px, auto);margin:0;padding:0}#mobile-menu.svelte-bjyafy.svelte-bjyafy{position:sticky;top:50px;z-index:2}#grid-menu-wrapper.svelte-bjyafy.svelte-bjyafy{width:100%}#grid-menu.svelte-bjyafy.svelte-bjyafy{display:grid;position:relative;left:0;padding:0;grid-template-rows:8vh 12vh;background-color:rgb(27, 110, 205);row-gap:3px;list-style:none;text-align:center}#item-1.svelte-bjyafy.svelte-bjyafy{grid-row:1;font-size:50px;width:100%;height:100%;margin:auto auto;border-top:3px solid black;border-bottom:3px solid black}#home-link.svelte-bjyafy.svelte-bjyafy{text-decoration:none;color:rgb(35, 35, 32)}#item-2.svelte-bjyafy.svelte-bjyafy{border-top:3px solid black;border-bottom:3px solid black;position:relative;left:0;grid-row:2}#contact-grid.svelte-bjyafy.svelte-bjyafy{display:grid;width:100%;height:100%;justify-content:center;align-items:center;grid-template-columns:15vw 15vw 15vw;grid-template-rows:15vw;column-gap:5vw}.contact-item.svelte-bjyafy.svelte-bjyafy{position:relative;top:25%;width:15vw;height:15vw}.contact-image.svelte-bjyafy.svelte-bjyafy{width:60px;height:60px}@media only screen and (max-width: 429px){nav.svelte-bjyafy.svelte-bjyafy{height:12vw;justify-content:space-evenly}#name.svelte-bjyafy.svelte-bjyafy{width:50vw;text-align:left;margin-left:1vw}#home.svelte-bjyafy.svelte-bjyafy,.w-nav-link.svelte-bjyafy.svelte-bjyafy{display:none}#contact.svelte-bjyafy.svelte-bjyafy,#name.svelte-bjyafy.svelte-bjyafy{font-size:7vw}#contact.svelte-bjyafy.svelte-bjyafy{margin:0px 10px}#logo.svelte-bjyafy.svelte-bjyafy{display:none}.icon.svelte-bjyafy.svelte-bjyafy{width:8vw}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `


    <nav class="${"svelte-bjyafy"}"><a id="${"logo"}" class="${"nav-logo svelte-bjyafy"}" href="${"/"}"><img id="${"logo"}" src="${"logo.png"}" alt="${"Ashton George"}" class="${"svelte-bjyafy"}"></a>
    
        <h1 id="${"name"}" class="${"svelte-bjyafy"}">ashton george</h1>
    
        <ul class="${"navbar svelte-bjyafy"}"><li class="${"w-nav-link svelte-bjyafy"}"><a id="${"home"}" href="${"/"}" class="${"svelte-bjyafy"}">home</a></li>
            ${``}
    
            ${``}</ul></nav>    



    ${``}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1ofxpk7{box-sizing:border-box;background-color:rgb(254, 250, 246)}@media only screen and (max-width: 429px){}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
