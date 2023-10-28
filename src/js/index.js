// import はプロトコルが http となるため Web サーバが必要（ HTML ファイルを直接ブラウザで開いても import ができないので Apache が必要になる）
import FooterComp from './FooterComp.js';
import HeaderComp from './HeaderComp.js';

document.addEventListener('DOMContentLoaded', () => {
    Vue.createApp({
        data() {
            return {
                active_title: '',
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
                        cat: 'Business',
                        desc: '弊社は高い技術力と提案力でお客様に幅広いITサービスを提供しています。<br>お客様の抱える様々な課題をお客様と一緒に解決していきます。 ',
                        pos: 'left',
                        href1: 'business_contract.html',
                        title1: '受託事業',
                        href2: 'business_ses.html',
                        title2: 'SES事業',
                    },
                    {
                        cat: 'Recruit',
                        desc: 'すべての社員が日常に楽しさ、わくわく感を感じて過ごせることを目標に、仕事にもプライベートにも充実感が得られるよう、働く環境の整備を徹底しています。 ',
                        pos: 'right',
                        href1: 'career.html',
                        title1: '中途採用',
                        href2: 'new_graduate.html',
                        title2: '新卒採用',
                    },
                    {
                        cat: 'About us',
                        desc: '信頼関係を第一に、大手企業様とも長年取引させていただき、安定的な基盤を築いております。 ',
                        pos: 'left',
                        href1: 'greetings.html',
                        title1: '代表挨拶',
                        href2: 'company_info.html',
                        title2: '会社概要',
                    },
                ],
            };
        },
    }).mount('#main-contents');

    M.AutoInit();
});
