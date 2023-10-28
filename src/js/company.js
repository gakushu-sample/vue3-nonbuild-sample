// import はプロトコルが http となるため Web サーバが必要（ HTML ファイルを直接ブラウザで開いても import ができないので Apache が必要になる）
import FooterComp from './FooterComp.js';
import HeaderComp from './HeaderComp.js';

document.addEventListener('DOMContentLoaded', () => {
    Vue.createApp({
        data() {
            return {
                // HeaderComp.js の props で定義しているもの
                active_title: 'Company',
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
                    { href: 'company_info.html', title: '会社概要' },
                    { href: 'company_history.html', title: '沿革' },
                    { href: 'access.html', title: 'アクセス' },
                ],
            };
        },
    }).mount('#main-contents');

    M.AutoInit();
});
