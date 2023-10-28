// import はプロトコルが http となるため Web サーバが必要（ HTML ファイルを直接ブラウザで開いても import ができないので Apache が必要になる）
import FooterComp from './FooterComp.js';
import HeaderComp from './HeaderComp.js';

document.addEventListener('DOMContentLoaded', () => {
    Vue.createApp({
        data() {
            return {
                // HeaderComp.js の props で定義しているもの
                active_title: 'Contact',
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
                input_items: [
                    { id: 'company_name', name: '貴社名', type: 'text', value: '', require: true },
                    { id: 'company_name_kana', name: '貴社名（カナ）', type: 'text', value: '', require: true },
                    { id: 'tanto_sha', name: 'ご担当者様指名', type: 'text', value: '', require: true },
                    { id: 'tanto_sha_kana', name: 'ご担当者様指名（カナ）', type: 'text', value: '', require: true },
                    { id: 'up_url', name: 'ホームページURL', type: 'url', value: '', require: false },
                    { id: 'phone_no', name: '電話番号', type: 'tel', value: '', require: false },
                    { id: 'email', name: 'メールアドレス', type: 'email', value: '', require: true },
                ],
            };
        },
        methods: {
            check() {
                window.alert(`
                入力値の確認：
                ${this.input_items[0].name}: ${this.input_items[0].value}
                ${this.input_items[1].name}: ${this.input_items[1].value}
                ${this.input_items[2].name}: ${this.input_items[2].value}
                ${this.input_items[3].name}: ${this.input_items[3].value}
                ${this.input_items[4].name}: ${this.input_items[4].value}
                ${this.input_items[5].name}: ${this.input_items[5].value}
                ${this.input_items[6].name}: ${this.input_items[6].value}
                `);
            },
        },
    }).mount('#main-contents');

    M.AutoInit();
});
