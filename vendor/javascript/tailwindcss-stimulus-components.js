import{Controller as e}from"@hotwired/stimulus";var t=Object.defineProperty;var V=(e,s,a)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a;var i=(e,t,s)=>V(e,typeof t!="symbol"?t+"":t,s);async function n(e,t,s={}){t?await T(e,s):await b(e,s)}async function T(e,t={}){let{transitionClasses:s,fromClasses:a,toClasses:o,toggleClass:r}=C("Enter",e,t);return v(e,{firstFrame(){e.classList.add(...s.split(" ")),e.classList.add(...a.split(" ")),e.classList.remove(...o.split(" ")),e.classList.remove(...r.split(" "))},secondFrame(){e.classList.remove(...a.split(" ")),e.classList.add(...o.split(" "))},ending(){e.classList.remove(...s.split(" "))}})}async function b(e,t={}){let{transitionClasses:s,fromClasses:a,toClasses:o,toggleClass:r}=C("Leave",e,t);return v(e,{firstFrame(){e.classList.add(...a.split(" ")),e.classList.remove(...o.split(" ")),e.classList.add(...s.split(" "))},secondFrame(){e.classList.remove(...a.split(" ")),e.classList.add(...o.split(" "))},ending(){e.classList.remove(...s.split(" ")),e.classList.add(...r.split(" "))}})}function C(e,t,s){return{transitionClasses:t.dataset[`transition${e}`]||s[e.toLowerCase()]||e.toLowerCase(),fromClasses:t.dataset[`transition${e}From`]||s[`${e.toLowerCase()}From`]||`${e.toLowerCase()}-from`,toClasses:t.dataset[`transition${e}To`]||s[`${e.toLowerCase()}To`]||`${e.toLowerCase()}-to`,toggleClass:t.dataset.toggleClass||s.toggleClass||s.toggle||"hidden"}}function L(e){e._stimulus_transition={timeout:null,interrupted:!1}}function I(e){e._stimulus_transition&&e._stimulus_transition.interrupt&&e._stimulus_transition.interrupt()}function v(e,t){e._stimulus_transition&&I(e);let s,a,o;return L(e),e._stimulus_transition.cleanup=()=>{a||t.firstFrame(),o||t.secondFrame(),t.ending(),e._stimulus_transition=null},e._stimulus_transition.interrupt=()=>{s=!0,e._stimulus_transition.timeout&&clearTimeout(e._stimulus_transition.timeout),e._stimulus_transition.cleanup()},new Promise((r=>{s||requestAnimationFrame((()=>{s||(t.firstFrame(),a=!0,requestAnimationFrame((()=>{s||(t.secondFrame(),o=!0,e._stimulus_transition&&(e._stimulus_transition.timeout=setTimeout((()=>{s||e._stimulus_transition.cleanup(),r()}),w(e))))})))}))}))}function w(e){let t=Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,s=Number(getComputedStyle(e).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;return t===0&&(t=Number(getComputedStyle(e).animationDuration.replace("s",""))*1e3),t+s}var s=class extends e{connect(){setTimeout((()=>{T(this.element)}),this.showDelayValue),this.hasDismissAfterValue&&setTimeout((()=>{this.close()}),this.dismissAfterValue)}close(){b(this.element).then((()=>{this.element.remove()}))}};i(s,"values",{dismissAfter:Number,showDelay:{type:Number,default:0}});var a=class extends e{connect(){this.timeout=null}save(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.statusTarget.textContent=this.submittingTextValue,this.formTarget.requestSubmit()}),this.submitDurationValue)}success(){this.setStatus(this.successTextValue)}error(){this.setStatus(this.errorTextValue)}setStatus(e){this.statusTarget.textContent=e,this.timeout=setTimeout((()=>{this.statusTarget.textContent=""}),this.statusDurationValue)}};i(a,"targets",["form","status"]),i(a,"values",{submitDuration:{type:Number,default:1e3},statusDuration:{type:Number,default:2e3},submittingText:{type:String,default:"Saving..."},successText:{type:String,default:"Saved!"},errorText:{type:String,default:"Unable to save."}});var o=class extends e{update(){this.preview=this.colorTarget.value}set preview(e){this.previewTarget.style[this.styleValue]=e;let t=this._getContrastYIQ(e);this.styleValue==="color"?this.previewTarget.style.backgroundColor=t:this.previewTarget.style.color=t}_getContrastYIQ(e){e=e.replace("#","");let t=128,s=parseInt(e.substr(0,2),16),a=parseInt(e.substr(2,2),16),o=parseInt(e.substr(4,2),16);return(s*299+a*587+o*114)/1e3>=t?"#000":"#fff"}};i(o,"targets",["preview","color"]),i(o,"values",{style:{type:String,default:"backgroundColor"}});var r=class extends e{connect(){this.boundBeforeCache=this.beforeCache.bind(this),document.addEventListener("turbo:before-cache",this.boundBeforeCache)}disconnect(){document.removeEventListener("turbo:before-cache",this.boundBeforeCache)}openValueChanged(){n(this.menuTarget,this.openValue,this.transitionOptions),this.openValue===!0&&this.hasMenuItemTarget&&this.menuItemTargets[0].focus()}show(){this.openValue=!0}close(){this.openValue=!1}hide(e){this.closeOnClickOutsideValue&&e.target.nodeType&&this.element.contains(e.target)===!1&&this.openValue&&(this.openValue=!1),this.closeOnEscapeValue&&e.key==="Escape"&&this.openValue&&(this.openValue=!1)}toggle(){this.openValue=!this.openValue}nextItem(e){e.preventDefault(),this.menuItemTargets[this.nextIndex].focus()}previousItem(e){e.preventDefault(),this.menuItemTargets[this.previousIndex].focus()}get currentItemIndex(){return this.menuItemTargets.indexOf(document.activeElement)}get nextIndex(){return Math.min(this.currentItemIndex+1,this.menuItemTargets.length-1)}get previousIndex(){return Math.max(this.currentItemIndex-1,0)}get transitionOptions(){return{enter:this.hasEnterClass?this.enterClass:"transition ease-out duration-100",enterFrom:this.hasEnterFromClass?this.enterFromClass:"transform opacity-0 scale-95",enterTo:this.hasEnterToClass?this.enterToClass:"transform opacity-100 scale-100",leave:this.hasLeaveClass?this.leaveClass:"transition ease-in duration-75",leaveFrom:this.hasLeaveFromClass?this.leaveFromClass:"transform opacity-100 scale-100",leaveTo:this.hasLeaveToClass?this.leaveToClass:"transform opacity-0 scale-95",toggleClass:this.hasToggleClass?this.toggleClass:"hidden"}}beforeCache(){this.openValue=!1,this.menuTarget.classList.add("hidden")}};i(r,"targets",["menu","button","menuItem"]),i(r,"values",{open:{type:Boolean,default:!1},closeOnEscape:{type:Boolean,default:!0},closeOnClickOutside:{type:Boolean,default:!0}}),i(r,"classes",["enter","enterFrom","enterTo","leave","leaveFrom","leaveTo","toggle"]);var l=class extends e{connect(){this.openValue&&this.open(),this.boundBeforeCache=this.beforeCache.bind(this),document.addEventListener("turbo:before-cache",this.boundBeforeCache)}disconnect(){document.removeEventListener("turbo:before-cache",this.boundBeforeCache)}open(){this.dialogTarget.showModal()}close(){this.dialogTarget.setAttribute("closing",""),Promise.all(this.dialogTarget.getAnimations().map((e=>e.finished))).then((()=>{this.dialogTarget.removeAttribute("closing"),this.dialogTarget.close()}))}backdropClose(e){e.target.nodeName=="DIALOG"&&this.close()}show(){this.dialogTarget.show()}hide(){this.close()}beforeCache(){this.close()}};i(l,"targets",["dialog"]),i(l,"values",{open:Boolean});var u=class extends e{openValueChanged(){n(this.contentTarget,this.openValue),this.shouldAutoDismiss&&this.scheduleDismissal()}show(e){this.shouldAutoDismiss&&this.scheduleDismissal(),this.openValue=!0}hide(){this.openValue=!1}toggle(){this.openValue=!this.openValue}get shouldAutoDismiss(){return this.openValue&&this.hasDismissAfterValue}scheduleDismissal(){this.hasDismissAfterValue&&(this.cancelDismissal(),this.timeoutId=setTimeout((()=>{this.hide(),this.timeoutId=void 0}),this.dismissAfterValue))}cancelDismissal(){typeof this.timeoutId=="number"&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)}};i(u,"targets",["content"]),i(u,"values",{dismissAfter:Number,open:{type:Boolean,default:!1}});var h=class extends e{connect(){this.openValue&&this.open(),this.boundBeforeCache=this.beforeCache,document.addEventListener("turbo:before-cache",this.boundBeforeCache)}disconnect(){document.removeEventListener("turbo:before-cache",this.boundBeforeCache)}open(){this.dialogTarget.showModal()}close(){this.dialogTarget.setAttribute("closing",""),Promise.all(this.dialogTarget.getAnimations().map((e=>e.finished))).then((()=>{this.dialogTarget.removeAttribute("closing"),this.dialogTarget.close()}))}backdropClose(e){e.target.nodeName=="DIALOG"&&this.close()}show(){this.open()}hide(){this.close()}beforeCache(){this.close()}};i(h,"targets",["dialog"]),i(h,"values",{open:Boolean});var c=class extends e{initialize(){this.updateAnchorValue&&this.anchor&&(this.indexValue=this.tabTargets.findIndex((e=>e.id===this.anchor)))}connect(){this.showTab()}change(e){e.currentTarget.tagName==="SELECT"?this.indexValue=e.currentTarget.selectedIndex:e.currentTarget.dataset.index?this.indexValue=e.currentTarget.dataset.index:e.currentTarget.dataset.id?this.indexValue=this.tabTargets.findIndex((t=>t.id==e.currentTarget.dataset.id)):this.indexValue=this.tabTargets.indexOf(e.currentTarget)}nextTab(){this.indexValue=Math.min(this.indexValue+1,this.tabsCount-1)}previousTab(){this.indexValue=Math.max(this.indexValue-1,0)}firstTab(){this.indexValue=0}lastTab(){this.indexValue=this.tabsCount-1}indexValueChanged(){if(this.showTab(),this.dispatch("tab-change",{target:this.tabTargets[this.indexValue],detail:{activeIndex:this.indexValue}}),this.updateAnchorValue){let e=this.tabTargets[this.indexValue].id;if(this.scrollToAnchorValue)location.hash=e;else{let t=window.location.href.split("#")[0]+"#"+e;typeof Turbo<"u"?Turbo.navigator.history.replace(new URL(t)):history.replaceState({},document.title,t)}}}showTab(){this.panelTargets.forEach(((e,t)=>{let s=this.tabTargets[t];t===this.indexValue?(e.classList.remove("hidden"),s.ariaSelected="true",s.dataset.active=!0,this.hasInactiveTabClass&&s?.classList?.remove(...this.inactiveTabClasses),this.hasActiveTabClass&&s?.classList?.add(...this.activeTabClasses)):(e.classList.add("hidden"),s.ariaSelected=null,delete s.dataset.active,this.hasActiveTabClass&&s?.classList?.remove(...this.activeTabClasses),this.hasInactiveTabClass&&s?.classList?.add(...this.inactiveTabClasses))})),this.hasSelectTarget&&(this.selectTarget.selectedIndex=this.indexValue),this.scrollActiveTabIntoViewValue&&this.scrollToActiveTab()}scrollToActiveTab(){let e=this.element.querySelector("[aria-selected]");e&&e.scrollIntoView({inline:"center"})}get tabsCount(){return this.tabTargets.length}get anchor(){return document.URL.split("#").length>1?document.URL.split("#")[1]:null}};i(c,"classes",["activeTab","inactiveTab"]),i(c,"targets",["tab","panel","select"]),i(c,"values",{index:0,updateAnchor:Boolean,scrollToAnchor:Boolean,scrollActiveTabIntoView:Boolean});var d=class extends e{toggle(e){this.openValue=!this.openValue,this.animate()}toggleInput(e){this.openValue=e.target.checked,this.animate()}hide(){this.openValue=!1,this.animate()}show(){this.openValue=!0,this.animate()}animate(){this.toggleableTargets.forEach((e=>{n(e,this.openValue)}))}};i(d,"targets",["toggleable"]),i(d,"values",{open:{type:Boolean,default:!1}});export{s as Alert,a as Autosave,o as ColorPreview,r as Dropdown,l as Modal,u as Popover,h as Slideover,c as Tabs,d as Toggle,n as transition};

