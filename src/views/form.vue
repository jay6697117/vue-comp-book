<template>
  <div>
    <h3>具有数据校验功能的表单组件——Form</h3>
    <i-form ref="form" :model="formValidate" :rules="ruleValidate">
      <i-form-item label="用户名" prop="name">
        <i-input v-model="formValidate.name"></i-input>
      </i-form-item>
      <i-form-item label="邮箱" prop="mail">
        <i-input v-model="formValidate.mail"></i-input>
      </i-form-item>
    </i-form>
    <button @click="handleSubmit">提交</button>
    <button @click="handleReset">重置</button>
    <button @click="broadcastTest1">broadcast-iForm-test</button>
    <button @click="broadcastTest2">broadcast-iFormItem-test</button>
  </div>
</template>
<script>
import Emitter from '@/mixins/emitter.js';
import iForm from '../components/form/form.vue';
import iFormItem from '../components/form/form-item.vue';
import iInput from '../components/input/input.vue';

export default {
  name: 'iFormView',
  components: { iForm, iFormItem, iInput },
  mixins: [Emitter],
  data() {
    return {
      formValidate: {
        name: '',
        mail: ''
      },
      ruleValidate: {
        name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        mail: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    broadcastTest1() {
      console.log('broadcastTest1 run');
      // this.broadcast('iForm', 'broadcast-iForm-test');
      // this.broadcast('iForm', 'broadcast-iForm-test', 'hello broadcast-iForm-test 1');
      // this.broadcast('iForm', 'broadcast-iForm-test', 'hello broadcast-iForm-test 1', 'hello broadcast-iForm-test 2');
      // this.broadcast('iForm', 'broadcast-iForm-test', [
      //   'hello broadcast-iForm-test 1',
      //   'hello broadcast-iForm-test 11'
      // ]);
      this.broadcast('iForm', 'broadcast-iForm-test', {
        a: 'hello broadcast-iForm-test 1',
        b: 'hello broadcast-iForm-test 11'
      });
    },
    broadcastTest2() {
      console.log('broadcastTest2 run');
      this.broadcast(
        'iFormItem',
        'broadcast-iFormItem-test',
        'hello broadcast-iFormItem-test 1',
        'hello broadcast-iFormItem-test 2'
      );
      // this.broadcast('iFormItem', 'broadcast-iFormItem-test', [
      //   'hello broadcast-iFormItem-test 2',
      //   'hello broadcast-iFormItem-test 22'
      // ]);
      // this.broadcast('iFormItem', 'broadcast-iFormItem-test', {
      //   c: 'hello broadcast-iFormItem-test 2',
      //   d: 'hello broadcast-iFormItem-test 22'
      // });
    },
    handleSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          window.alert('提交成功');
        } else {
          window.alert('表单校验失败');
        }
      });
    },
    handleReset() {
      this.$refs.form.resetFields();
    }
  },
  created() {
    this.$on('dispatch-iFormView-test', param => {
      console.log('dispatch-iFormView-test param:', param);
    });
  }
};
</script>

<style scoped>
button {
  margin-top: 10px;
  margin-right: 10px;
}
</style>
