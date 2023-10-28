// 他の js から import されるためには、 export が必要。
// React の勉強をしたことがあれば知っていると思う
export default {
    data() {
        return {
            menu_list: [
                {
                    cat: '企業情報',
                    href: 'company.html',
                    sub_menu_list: [
                        { href: 'company_info.html', title: '会社概要' },
                        { href: 'company_history.html', title: '沿革' },
                        { href: 'access.html', title: 'アクセス' },
                    ],
                },
                {
                    cat: '事業内容',
                    href: 'business.html',
                    sub_menu_list: [
                        { href: 'business_contract.html', title: '受託事業' },
                        { href: 'business_ses.html', title: 'SES事業' },
                    ],
                },
                {
                    cat: 'GAKUSHUについて',
                    href: 'about.html',
                    sub_menu_list: [
                        { href: 'management_philosophy.html', title: '会社理念' },
                        { href: 'greetings.html', title: '代表挨拶' },
                        { href: 'attempt.html', title: '取り組み' },
                        { href: 'recreation.html', title: '社外活動' },
                    ],
                },
                {
                    cat: '採用情報',
                    href: 'recruit.html',
                    sub_menu_list: [
                        { href: 'career.html', title: '中途採用' },
                        { href: 'new_graduate.html', title: '新卒採用' },
                        { href: 'contact.html', title: 'お問い合わせ' },
                    ],
                },
            ],
        };
    },
    template: /*html*/ `
    <footer class="page-footer green darken-4">
      <div class="container">
        <div class="row">
          <div class="col m4 s12">
            <h5><a href="/" class="white-text">GAKUSHU</a></h5>
          </div>
          <div class="col m2 s12" v-for="menu in menu_list" :key="menu.cat">
            <div><a :href="menu.href" class="white-text">{{ menu.cat }}</a></div>
            <ul>
              <li v-for="sub in menu.sub_menu_list" :key="sub.title"><a :href="sub.href" class="white-text">{{ sub.title }}</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
        &copy; GAKUSHU
        </div>
      </div>
    </footer>
    `,
};
