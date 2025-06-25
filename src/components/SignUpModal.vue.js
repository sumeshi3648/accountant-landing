/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
import { ref } from 'vue';
const emit = defineEmits(['close']);
const form = ref({ name: '', phone: '', description: '' });
const success = ref(false);
const close = () => emit('close');
const submitForm = async () => {
    try {
        await fetch('https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec', {
            method: 'POST',
            body: new URLSearchParams(form.value),
        });
        success.value = true;
        setTimeout(close, 2000);
    }
    catch (e) {
        alert('Ошибка при отправке. Попробуйте снова.');
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['modal']} */ ;
/** @type {__VLS_StyleScopedClasses['modal']} */ ;
/** @type {__VLS_StyleScopedClasses['modal']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (__VLS_ctx.close) },
    ...{ class: "modal-backdrop" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "modal" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.submitForm) },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    placeholder: "Имя",
    required: true,
});
(__VLS_ctx.form.name);
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    placeholder: "Телефон",
    required: true,
});
(__VLS_ctx.form.phone);
__VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
    value: (__VLS_ctx.form.description),
    placeholder: "Краткое описание проблемы",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "submit",
});
if (__VLS_ctx.success) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "success-message" },
    });
}
/** @type {__VLS_StyleScopedClasses['modal-backdrop']} */ ;
/** @type {__VLS_StyleScopedClasses['modal']} */ ;
/** @type {__VLS_StyleScopedClasses['success-message']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $emit: emit,
            form: form,
            success: success,
            close: close,
            submitForm: submitForm,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $emit: emit,
        };
    },
});
; /* PartiallyEnd: #4569/main.vue */
