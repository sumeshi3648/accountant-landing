import HeroSection from './components/HeroSection.vue';
import WhySection from './components/WhySection.vue';
import VideoSection from './components/VideoSection.vue';
import Footer from './components/Footer.vue';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "app",
    ...{ class: "app-container" },
});
/** @type {[typeof HeroSection, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(HeroSection, new HeroSection({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof WhySection, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(WhySection, new WhySection({}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {[typeof VideoSection, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(VideoSection, new VideoSection({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(Footer, new Footer({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {__VLS_StyleScopedClasses['app-container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            HeroSection: HeroSection,
            WhySection: WhySection,
            VideoSection: VideoSection,
            Footer: Footer,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
