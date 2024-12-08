import { mountSuspended } from '@nuxt/test-utils/runtime'
import type { Component } from 'vue'
declare module '#components' {
    export const SomeComponent: Component
}

import SomeComponent from '../../components/TheHeader.vue';
import { describe, it, expect } from 'vitest';

describe('Header.vue', () => {
    
    it('должен отображать кнопки и категории', async () => {
        const wrapper = await mountSuspended(SomeComponent);
        
        // Проверяем кнопку "Разместить объявление"
        const createAdButton = wrapper.find('.header-right__create');
        expect(createAdButton.exists()).toBe(true);
        expect(createAdButton.text()).toBe('Разместить объявление');
        
        // Проверяем категорию
        const categoriesButton = wrapper.find('.header-left__categories');
        expect(categoriesButton.exists()).toBe(true);
        expect(categoriesButton.text()).toContain('Все категории');
    });
});


