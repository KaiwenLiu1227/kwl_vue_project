import PageNotFound from "@/page/PageNotFound";
import Home from "@/page/Home";
import LectuerSelectPage from "@/page/LectuerSelectPage";
import FAQ from "@/page/FAQ";

const routers = [
    {
        path: '/',
        component: Home,
        meta: {
            title: "EasyPass首页",
        }
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            title: "EasyPass首页",
        }
    },
    {
        path: '/discover',
        name: 'discover',
        component: LectuerSelectPage,
        meta: {
            title: "EasyPass在线择师",
        }
    },
    {
        path: '/faq',
        name: 'faq',
        component: FAQ,
        meta: {
            title: "EasyPass常见问答",
        }
    },
    {
        path: '*',
        component: PageNotFound,
        meta: {
            title: "404 Not Found 查无此页面"
        }
    }
]
export default routers