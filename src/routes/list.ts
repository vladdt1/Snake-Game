import Home from "../layout/pages/Home";
import Level1 from "../layout/pages/level1/Level1";
import Level2 from "../layout/pages/level2/Level2";
import Level3 from "../layout/pages/level3/Level3";

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        auth: true,
    },
    {
        path: '/level1',
        exact: false,
        component: Level1,
        auth: true,
    },
    {
        path: '/level2',
        exact: true,
        component: Level2,
        auth: true,
    },
    {
        path: '/level3',
        exact: true,
        component: Level3,
        auth: true,
    },
]