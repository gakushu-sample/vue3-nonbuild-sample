// import はプロトコルが http となるため Web サーバが必要（ HTML ファイルを直接ブラウザで開いても import ができないので Apache が必要になる）
import FooterComp from './FooterComp.js';
import HeaderComp from './HeaderComp.js';

document.addEventListener('DOMContentLoaded', () => {
    Vue.createApp({
        data() {
            return {
                // HeaderComp.js の props で定義しているもの
                active_title: 'Business',
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
                    {
                        cat: '受託事業',
                        desc: 'システムの企画設計から運用・保守に至るまで、一貫したサービスを提供します。<br>お客様との密接なコミュニケーションにより、焦点を合わせることで、お客様の抱える幅広く様々な課題をお客様と一緒に解決していきます。',
                        pos: 'left',
                        href: 'business_contract.html',
                        title: '受託事業',
                    },
                    {
                        cat: 'SES事業',
                        desc: '大規模プロジェクトの基幹業務や業務システムの開発などを得意とし、各分野の経験豊富なエンジニアの高い技術力と営業力で、お客様のニーズに合わせたご提案が可能です。<br>また、教育を受けた従業員が、システムの企画設計から運用・保守に至るまで、一貫したサービスを提供します。',
                        pos: 'right',
                        href: 'business_ses.html',
                        title: 'SES事業',
                    },
                ],
            };
        },
    }).mount('#main-contents');

    M.AutoInit();
});
