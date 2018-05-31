import 'glamor/reset'
import { render, Component } from 'inferno';
import { Provider } from 'inferno-redux';
import {Container} from 'views/ui';
import {makeStore} from 'store';
import Feeds from 'views/feeds';
import GL from 'views/gl';

const store = makeStore()

render(
  <Provider store={store}>
    <Container>
     <GL/>
    </Container>
  </Provider>,
  document.getElementById('app')
)