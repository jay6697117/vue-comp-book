function broadcast(componentName, eventName, params) {
  console.log('params 000:', params);
  this.$children.forEach(child => {
    const name = child.$options.name;

    if (name === componentName) {
      // child.$emit.apply(child, [eventName].concat([params]));
      // child.$emit.apply(child, [eventName].concat(params));
      child.$emit.apply(child, [eventName, params]);
    } else {
      console.log('params 001:', params);
      // broadcast.apply(child, [componentName, eventName].concat([params]));
      // broadcast.apply(child, [componentName, eventName].concat(params));
      broadcast.apply(child, [componentName, eventName, params]);
    }
  });
}
export default {
  methods: {
    dispatch(componentName, eventName, params) {
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
        // parent.$emit.apply(parent, [eventName].concat(params));
        parent.$emit.apply(parent, [eventName, params]);
      }
    },
    broadcast(componentName, eventName, params) {
      // console.log('mixins broadcast this.$children:', this.$children);
      broadcast.call(this, componentName, eventName, params);
    }
  }
};
