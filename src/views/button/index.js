import Button from './Button';
const router = (store) => ({
  path: '/button',
  getComponent(nextState, cb) {
    cb(null, Button);
  },
})

export default router;