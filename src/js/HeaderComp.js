// 他の js から import されるためには、 export が必要。
// React の勉強をしたことがあれば知っていると思う
export default {
    props: {
        // 呼び出し元から受け取るパラメータ。 template での利用方法は、 data で定義したパラメータと同じように利用する
        active_title: String,
    },
    data() {
        return {
            header_title: 'GAKUSHU',
            menu_list: [
                { href: 'company.html', title: 'Company' },
                { href: 'about.html', title: 'About us' },
                { href: 'business.html', title: 'Business' },
                { href: 'recruit.html', title: 'Recruit' },
                { href: 'contact.html', title: 'Contact' },
            ],
        };
    },
    template: /*html*/ `
    <header>
      <div class="navbar-fixed">
        <nav class="green">
          <div class="nav-wrapper container">
            <a href="/" class="brand-logo">{{ header_title }}</a>
            <a href="#" data-target="mobile-menu" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
              <li v-for="menu in menu_list" :key="menu.title" :class="{ active: menu.title == active_title }">
                <a :href="menu.href">{{ menu.title }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul class="sidenav" id="mobile-menu">
        <li v-for="menu in menu_list" :key="menu.title">
          <a :href="menu.href">{{ menu.title }}</a>
        </li>
      </ul>
    </header>
    `,
};
