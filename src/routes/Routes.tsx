import { Suspense } from "react";
import { Route, Routes as RoutesWrapper } from "react-router-dom";

import { Home } from "@/pages";
import PATHS from "@/routes/paths";

const Routes = () => {
  return (
    <Suspense fallback={null}>
      <RoutesWrapper>
        <Route path={PATHS.HOME} element={<Home />} />
      </RoutesWrapper>
    </Suspense>
  );
};

export default Routes;
