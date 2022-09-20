import Preloader from '@src/shared/components/preloader';
import React, { Suspense } from 'react';
import { HashRouter as Router } from 'react-router-dom';

const withRouter = (component: () => React.ReactNode) => () =>
  (
    <Router>
      <Suspense fallback={<Preloader />}>{component()}</Suspense>
    </Router>
  );

export default withRouter;
