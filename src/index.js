import dva from 'dva';
import './index.css';
import example from './models/example'

// 1. Initialize
// const app = dva();

const app = dva({
  initialState: {
    products: {
      list: [
        { name: 'cz', id: 1 },
        { name: 'ys', id: 2 },
      ]
    }
  }
})

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(example)
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);



console.log(app)
// 5. Start
app.start('#root');
