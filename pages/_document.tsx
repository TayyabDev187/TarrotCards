import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <Script src="https://js.stripe.com/v3/"></Script>
                <Script src="https://crypto-js.stripe.com/crypto-onramp-outer.js"></Script>
                <style data-n-href="/_next/static/css/de06562e817707c2.css">
                    {`
                    .LinkView_link__qx58g{color:var(--white);padding:0 16px;font-size:16px;border-radius:8px;cursor:pointer;transition:background-color var(--hover_transition),color var(--hover_transition),box-shadow var(--hover_transition),opacity var(--loader_time)}.LinkView_link__qx58g:hover{color:var(--active-color)}@media screen and (max-width:767px){.LinkView_link__qx58g{padding:8px 14px;border-radius:0;border-bottom:1px solid #ececec}.LinkView_link__qx58g:hover{background-color:#ececec}}@media screen and (max-width:1023px){.LinkView_link__qx58g{padding:8px 10px}}.LinkView_link__qx58g.LinkView_dark__Ym_XR{color:var(--black)}.LinkView_link__qx58g.LinkView_dark__Ym_XR:hover{color:var(--active-color)}.MobileMenuBlock_button__pxXM_{right:0;width:55px;height:65px;border:none;background:none;cursor:pointer;display:flex;align-items:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.MobileMenuBlock_button__pxXM_>:first-child{width:48px;height:48px}@media screen and (min-width:768px){.MobileMenuBlock_button__pxXM_{display:none}}.MobileMenuBlock_buttonOpen__V02SD{position:absolute;z-index:4}.MobileMenuBlock_buttonOpen__V02SD>:first-child{color:#fff}.MobileMenuBlock_buttonOpen__V02SD.MobileMenuBlock_dark__6EJri>:first-child{color:#000}.MobileMenuBlock_buttonClose__57xWf{right:0;border-bottom:1px solid #ececec;width:250px;display:flex;justify-content:flex-end}.MobileMenuBlock_buttonClose__57xWf>:first-child{color:#000;border-radius:5px;margin-right:10px;transition:background-color var(--hover_transition);scale:1.2}.MobileMenuBlock_buttonClose__57xWf>:first-child:hover{background-color:#ececec}.MobileMenuBlock_mobileMenu__AFcGh{position:fixed;bottom:0;top:0;right:0;background-color:#fff;overflow:hidden;z-index:10;width:250px;height:100%;max-height:100%;background-color:var(--white);display:flex;flex-flow:column;transform:translateX(100%);transition:all .3s}.MobileMenuBlock_mobileMenuOpen__kTm1Y{transform:translateX(0);transition:all .3s}.MobileMenuBlock_nav__zZrQE{display:flex;align-items:flex-end;flex-flow:column}.MobileMenuBlock_menuNav__fl54o{width:240px;display:flex;justify-content:flex-end}.MobileMenuBlock_overlay__L41DW{position:fixed;inset:0;width:100vw;height:100vh;background-color:rgba(20,20,70,.494);opacity:0;z-index:-9;transition:opacity .6s}.MobileMenuBlock_overlayOpened__17THa{opacity:1;z-index:9;transition:opacity .6s,z-index .3s}@media screen and (max-width:767px){.MobileMenuBlock_nav__zZrQE a,.MobileMenuBlock_nav__zZrQE span{color:#000;font-size:26px}}.HeaderView_header__NgO_l{width:100%;display:grid;grid-template-columns:225px 1fr 225px;align-items:center;padding:24px;height:var(--header-height);min-height:var(--header-height);max-height:var(--header-height)}@media screen and (max-width:1023px){.HeaderView_header__NgO_l{grid-template-columns:120px 1fr 120px}}@media screen and (max-width:767px){.HeaderView_header__NgO_l{grid-template-columns:1fr;padding:0}}.HeaderView_nav__3CtV7{display:flex;justify-content:center;align-items:center}@media screen and (max-width:767px){.HeaderView_nav__3CtV7,.HeaderView_session__rprMC{display:none}}.HeaderView_flex__mf1Az{display:flex;align-items:center;justify-content:center;gap:8px}.HeaderView_logo__2qEpP{position:relative;top:10px;left:0}@media screen and (max-width:767px){.HeaderView_logo-wrap__RoyRn{display:none}}.FooterView_footer__A_RvN{max-width:1400px;margin:0 auto;display:grid;grid-template-columns:repeat(4,minmax(250px,1fr));grid-gap:2rem;padding:20px 20px 80px}@media screen and (max-width:1023px){.FooterView_footer__A_RvN{grid-template-columns:repeat(2,minmax(250px,1fr))}}@media screen and (max-width:767px){.FooterView_footer__A_RvN{grid-template-columns:1fr;padding:20px}}.FooterView_nav__1IkZN{display:grid;color:var(--white);font-size:16px}.FooterView_footerLink__PFjzn{padding:0;display:inline-block;cursor:pointer;margin-bottom:4px;transition:background-color var(--hover_transition),color var(--hover_transition),box-shadow var(--hover_transition),opacity var(--loader_time),scale .1s}.FooterView_footerLink__PFjzn:hover{color:var(--active-color);scale:1.1}.FooterView_title__MtyE8{font-size:24px;margin-bottom:12px}.ButtonView_button__P_ilv{background:none;border:none;font:inherit;cursor:pointer;outline:inherit;height:64px;padding:0 40px;font-size:20px;font-style:normal;border-radius:8px;background-color:var(--active-color);color:var(--text-color);display:inline-flex;align-items:center;justify-content:center;text-decoration:none}.ButtonView_button__P_ilv:hover{background-color:var(--active-color-hover)}.ButtonView_outline__aLtro{background-color:transparent;border:2px solid var(--active-color);color:var(--text-color)}.ButtonView_animation__yl21r,.ButtonView_outline__aLtro:hover{background-color:var(--active-color-hover-opacity)}.ButtonView_animation__yl21r{border:none;outline:none;cursor:pointer;position:relative;border-radius:10px}.ButtonView_animation__yl21r:before{content:"";background:linear-gradient(45deg,red,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,red);position:absolute;top:-2px;left:-2px;background-size:400%;z-index:-1;filter:blur(5px);width:calc(100% + 4px);height:calc(100% + 4px);animation:ButtonView_glowing__AYhSo 20s linear infinite;opacity:1;transition:opacity .3s ease-in-out;border-radius:10px}.ButtonView_animation__yl21r:active{color:#000}.ButtonView_animation__yl21r:active:after{background:transparent}.ButtonView_animation__yl21r:after{z-index:-1;content:"";position:absolute;width:100%;height:100%;background:#111;left:0;top:0;border-radius:10px}.ButtonView_button__P_ilv.ButtonView_error__2qiC8{pointer-events:none;background-color:var(--error-color)}.ButtonView_button__P_ilv.ButtonView_success__LHINb{pointer-events:none;background-color:var(--success-color)}.ButtonView_button__P_ilv.ButtonView_loading__YYP6B{pointer-events:none;opacity:.5}@keyframes ButtonView_glowing__AYhSo{0%{background-position:0 0}50%{background-position:400% 0}to{background-position:0 0}}.ButtonView_pink__P2k98{width:100%;background:var(--pink-1);border-radius:12px;height:56px;font-style:normal;font-weight:400;font-size:22px;line-height:40px;color:var(--pink-2);transition:all .2s}.ButtonView_pink__P2k98:hover{background:var(--pink-2);color:var(--white)}.ButtonView_pink-primary__pmyFp{width:100%;background:var(--pink-2);border-radius:12px;height:56px;font-style:normal;font-weight:400;font-size:22px;line-height:40px;color:var(--pink-1);transition:all .2s}.ButtonView_pink-primary__pmyFp:hover{background:var(--pink-3)}.Blog_layout__EsOXc{padding:0 24px;max-width:1248px;margin:48px auto 72px;display:flex;flex-direction:column;gap:48px}.Blog_title__hLd1r{font-weight:700;font-size:42px;line-height:54px;text-align:center;margin-bottom:0}.Blog_list__uZalF{display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));grid-gap:24px;gap:24px;margin-bottom:-24px}.Blog_article__tXxwQ{margin-bottom:24px;position:relative;z-index:1;display:grid;grid-template-rows:repeat(5,min-content);color:#0f0f23;cursor:pointer}.Blog_article__tXxwQ:hover{color:#5339cf}.Blog_post__9VID2{transition:color .15s;font-weight:700;font-size:20px;line-height:32px;font-style:normal;text-decoration:none}.Blog_footer__Z3jdQ{margin-top:8px}.Blog_time__PjnpX{line-height:26px;color:#69697c}.Blog_img__vCPd0{max-width:100%;height:auto;aspect-ratio:2/1;object-fit:cover;border-radius:16px;margin-bottom:16px}.Blog_image-wrap__G_zHE{width:100%;display:flex;align-items:center;justify-content:center}.Blog_content__hUit4>*{color:#000;margin-top:16px;margin-bottom:16px}.Blog_content__hUit4 p{line-height:36px;font-size:20px;color:#0f0f23}.Blog_content__hUit4 ul{counter-reset:ul}.Blog_content__hUit4 li{line-height:36px;padding-left:32px;font-size:20px;position:relative;list-style:none}.Blog_content__hUit4 li:before{vertical-align:baseline;content:counter(ul) ".";counter-increment:ul;text-align:center;font-feature-settings:"tnum" on,"lnum" on}.Blog_content__hUit4 h3{line-height:36px;font-size:26px;margin:24px 0 16px}.Blog_content__hUit4 h2{font-size:32px;line-height:44px;margin:48px 0 16px}.Blog_content__hUit4 h1{font-weight:700;font-size:42px;line-height:54px}.Blog_content__hUit4 img{max-width:856px;max-height:428px;margin:32px auto}.Blog_center__xqcan,.Blog_content__hUit4 img{display:flex;align-items:center;justify-content:center}.Blog_center__xqcan{flex-direction:column}@media screen and (max-width:1023px){.Blog_title__hLd1r{font-size:26px;line-height:36px}.Blog_content__hUit4 img{max-width:100%}}
                    `}
                </style>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
