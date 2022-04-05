// function broadcastFn(componentName, eventName, ...params) {
function broadcastFn(componentName, eventName, params) {
  // console.log('broadcastFn params 000:', params);
  this.$children.forEach(child => {
    const name = child.$options.name;

    if (name === componentName) {
      // child.$emit.apply(child, [eventName].concat([params])); // 同第3
      // child.$emit.apply(child, [eventName].concat(params));
      child.$emit.apply(child, [eventName, params]); // 第3
    } else {
      // console.log('broadcastFn params 001:', params);
      // broadcastFn.apply(child, [componentName, eventName].concat([params])); // 同第3
      // broadcastFn.apply(child, [componentName, eventName].concat(params));
      broadcastFn.apply(child, [componentName, eventName, params]); // 第3
    }
  });
}
export default {
  methods: {
    // dispatch(componentName, eventName, ...params) {
    dispatch(componentName, eventName, params) {
      // console.log('dispatch params 000:', params);
      // console.log('mixins dispatch this.$parent:', this.$parent);
      let parent = this.$parent || this.$root;
      let name = parent.$options.name;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.name;
        }
      }
      if (parent) {
        // parent.$emit.apply(parent, [eventName].concat([params])); // 同第3
        // parent.$emit.apply(parent, [eventName].concat(params));
        parent.$emit.apply(parent, [eventName, params]); // 第3
      }
    },
    // broadcast(componentName, eventName, ...params) {
    broadcast(componentName, eventName, params) {
      // console.log('mixins broadcast this.$children:', this.$children);
      // broadcastFn.call(this, componentName, eventName, ...params);
      broadcastFn.call(this, componentName, eventName, params);
    }
  }
};
