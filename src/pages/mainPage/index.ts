import React from "react";

const view = React.lazy(() => import("./ui/Page"));

export const MainPage = { view };
