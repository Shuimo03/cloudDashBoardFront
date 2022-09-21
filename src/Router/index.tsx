import React, { lazy, Suspense } from "react";
import { HashRouter as Router, RouteObject, useRoutes } from "react-router-dom";
type Path = string;

type Page = [Path, React.LazyExoticComponent<() => JSX.Element>, Page[]?];

const Pages: Page[] = [
    ["", lazy(() => import("@/pages/Home"))],
    ["home", lazy(() => import("@/pages/Home"))],
    ["about", lazy(() => import("@/pages/About"))],
    [
        "demo",
        lazy(() => import("@/pages/Demo")),
        [
            ["", lazy(() => import("@/pages/Demo/Demo1"))],
            ["a1", lazy(() => import("@/pages/Demo/Demo1"))],
            ["a2", lazy(() => import("@/pages/Demo/Demo2"))],
        ],
    ],
];
const getRoutes: (pages: Page[]) => RouteObject[] = (Pages) => {
    return Pages.map(([path, LazyJsxElement, children]) => {
        let childrenResult: RouteObject[] = [];
        if (Array.isArray(children) && children.length) {
            childrenResult = getRoutes(children);
        }

        return {
            path,
            element: (
                <Suspense fallback={<span>"加载中..."</span>}>
                    <LazyJsxElement />
                </Suspense>
            ),
            ...(childrenResult.length ? { children: childrenResult } : {}),
        };
    });
};

export default () => {
    const Routes = () => useRoutes(getRoutes(Pages));
    return (
        <Router>
            <Routes />
        </Router>
    );
};
