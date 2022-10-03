import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const footer_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "#text-container.svelte-vuqsi6{background-color:rgb(254, 250, 246);color:rgb(35, 35, 32);font-family:'PT Serif', serif;font-weight:800;display:block;text-align:center;width:100%;margin-top:5vh}#top-text.svelte-vuqsi6{font-size:15px;white-space:nowrap;overflow:hidden}#bottom-text.svelte-vuqsi6{color:gray;font-family:'PT Serif', serif;font-weight:600;font-size:8px}#logo.svelte-vuqsi6{margin-top:5vh;width:15vw}@media only screen and (max-width: 820px){#top-text.svelte-vuqsi6{font-size:2vw}#bottom-text.svelte-vuqsi6{font-size:1vw}}@media only screen and (max-width: 429px){#text-container.svelte-vuqsi6{background-color:transparent}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `


<div id="${"text-container"}" class="${"svelte-vuqsi6"}">${``}

</div>`;
});
const homeTop_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".content-container.svelte-oimn3i{background-color:rgb(254, 250, 246);margin-top:-3vh}#content.svelte-oimn3i{display:flex;color:rgb(35, 35, 32);column-gap:100px}#text-container.svelte-oimn3i{display:inline-block;margin:auto auto;margin-left:2vw;color:rgb(35, 35, 32)}.text.svelte-oimn3i{color:rgb(35, 35, 32);font-family:'PT Serif', serif;font-weight:800;flex-direction:row}.greeting.svelte-oimn3i{text-align:left;font-size:75px;white-space:nowrap;overflow:hidden}.about.svelte-oimn3i{color:gray;font-family:'PT Serif', serif;font-weight:600;font-size:30px}#me.svelte-oimn3i{width:50vw;height:50vw;align-items:center;flex-shrink:2}#bottom-text.svelte-oimn3i{color:rgb(35, 35, 32)}@media only screen and (max-width: 1200px){.greeting.svelte-oimn3i{font-size:6vw}.about.svelte-oimn3i{font-size:2vw}}@media only screen and (max-width: 800px){.greeting.svelte-oimn3i{font-size:40px}.about.svelte-oimn3i{font-size:15px}#content.svelte-oimn3i{column-gap:0px}}@media only screen and (max-width: 429px){.content-container.svelte-oimn3i{background-color:transparent}#content.svelte-oimn3i{display:block}#me.svelte-oimn3i{width:100vw;height:100vw}.greeting.svelte-oimn3i{margin-top:2vh;margin-left:3vw;font-size:7vw}.about.svelte-oimn3i{margin-left:3vw;font-size:6vw}}",
  map: null
};
const Home_top = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"content-container svelte-oimn3i"}"><div id="${"content"}" class="${"svelte-oimn3i"}"><div id="${"text-container"}" class="${"svelte-oimn3i"}"><div id="${"top-text"}" class="${"text svelte-oimn3i"}"><h1 class="${"greeting svelte-oimn3i"}">hi, i&#39;m ashton</h1></div>
        
            <div id="${"bottom-text"}" class="${"text svelte-oimn3i"}"><h4 class="${"about svelte-oimn3i"}">i am a college student <br> who enjoys web development</h4></div></div>
    
        <img id="${"me"}" src="${"me.png"}" alt="${"Ashton George"}" class="${"svelte-oimn3i"}"></div>

</div>`;
});
const works_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".content-container.svelte-n96pta{background-color:rgb(254, 250, 246);height:100vw}#content.svelte-n96pta{width:100%;text-align:center}.works.svelte-n96pta{aspect-ratio:28/18;width:75vw;z-index:0;flex-shrink:2}.m-works.svelte-n96pta{display:none;width:75vw}#m-work-1.svelte-n96pta{aspect-ratio:5/2;height:55vw}#m-work-2.svelte-n96pta{aspect-ratio:10/1;height:120vw}@media only screen and (max-width: 429px){.content-container.svelte-n96pta{background-color:transparent}.m-works.svelte-n96pta{display:inline}.works.svelte-n96pta{display:none}}@media only screen and (max-width: 1099px){.content-container.svelte-n96pta{height:100vw}}@media only screen and (max-width: 900px){.content-container.svelte-n96pta{height:120vw\n        }}",
  map: null
};
const Works = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `


<div class="${"content-container svelte-n96pta"}"><div id="${"content"}" class="${"svelte-n96pta"}"><div id="${"img-container"}">${``}

            <img src="${"hall-pass-preview.png"}" alt="${"Hall Pass"}" id="${"m-work-1"}" class="${"m-works svelte-n96pta"}"></div>
            
        <div>${``} 

            <img src="${"natura-preview.png"}" alt="${"Natura"}" id="${"m-work-2"}" class="${"m-works svelte-n96pta"}"></div></div>

</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "#page-container.svelte-gw9a0b{background-color:rgb(254, 250, 246)}@media only screen and (max-width: 429px){#hometop-wrapper.svelte-gw9a0b{margin-top:20px}#footer-wrapper.svelte-gw9a0b{margin-top:100vw;margin-bottom:5vh}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"page-container"}" class="${"svelte-gw9a0b"}"><div id="${"hometop-wrapper"}" class="${"svelte-gw9a0b"}">${validate_component(Home_top, "HomeTop").$$render($$result, {}, {}, {})}</div>

    ${validate_component(Works, "Works").$$render($$result, {}, {}, {})}
    
    <div id="${"footer-wrapper"}" class="${"svelte-gw9a0b"}">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
