import ArckFontSize from './ArckFontSize';
import ArckFontSizeMenu from './ArckFontSizeMenu.vue';

Statamic.$bard.extend(({mark}) => mark(new ArckFontSize()));
Statamic.$bard.buttons(() => {
    return {
        name: 'arckfontsize',
        text: 'Font Size',
        command: 'classType',
        args: {
            key: ""
        },
        icon: 'arck-font-size',
        component: ArckFontSizeMenu
    };
});