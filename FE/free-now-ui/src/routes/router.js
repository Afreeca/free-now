import { Switch, Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'globalStyle';
import { lightTheme } from 'utils';
import { FreeNowHome, ShareNowHome } from "containers";
import { Layout } from "components";
import { company } from "utils/constants";

const history = createBrowserHistory();

function Routes() {
  return (
    <Router history={history}>
          <ThemeProvider theme={lightTheme}>
              <GlobalStyle />
              <Layout>
                <Switch>
                  <Route path={`/${company.freeNow}`} exact component={FreeNowHome} />
                  <Route path={`/${company.shareNow}`} exact component={ShareNowHome} />
                  <Redirect to={`${company.freeNow}`} />
                </Switch>
              </Layout>
          </ThemeProvider>
      </Router>
  );
}

export default Routes;
