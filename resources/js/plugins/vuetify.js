import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const opts = {
    theme: {
        dark: false,
        themes: {
            dark: {
                primary     : '#8bc34a',
                secondary   : '#ffe18d',
                accent      : '#FF4081',
                success     : '#4CAF50',
                info        : '#2196F3',
                warning     : '#FFC107',
                error       : '#F44336'
            },
            light: {
                primary    : '#4CAF50',
                secondary  : '#8BC34A',
                accent     : '#009688',
                success    : '#4caf50',
                info       : '#2196F3',
                warning    : '#ff9800',
                error      : '#F44336'
            }
        }
    },
    treeShake: true,
    options: {
        customProperties: true
    }
};

export default new Vuetify(opts)
