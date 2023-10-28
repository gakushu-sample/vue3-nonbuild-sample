// import はプロトコルが http となるため Web サーバが必要（ HTML ファイルを直接ブラウザで開いても import ができないので Apache が必要になる）
import FooterComp from './FooterComp.js';
import HeaderComp from './HeaderComp.js';

document.addEventListener('DOMContentLoaded', () => {
    Vue.createApp({
        data() {
            return {
                // HeaderComp.js の props で定義しているもの
                active_title: 'About us',
            };
        },
        components: {
            HeaderComp,
        },
    }).mount('#header');

    Vue.createApp({
        components: {
            FooterComp,
        },
    }).mount('#footer');

    Vue.createApp({
        data() {
            return {
                menu_list: [
                    { href: 'management_philosophy.html', title: '会社理念' },
                    { href: 'greetings.html', title: '代表挨拶' },
                    { href: 'attempt.html', title: '取り組み' },
                    { href: 'recreation.html', title: '社外活動' },
                ],
            };
        },
    }).mount('#main-contents');

    M.AutoInit();
});
