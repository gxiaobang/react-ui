/**
 * 表单
 */

import React from 'react';
import { Button, Input, Form, Checkbox, Radio, Select, Message } from 'components';

const { FormItem } = Form;
const { Option } = Select;

// console.log(Option)

class Page extends React.Component {

  render() {
    return (
        <div className="page">
          <h3>{this.props.data.title}组件</h3>
          <Form onSubmit={
            (param) => {
              console.log('表单参数：', param);
              Message.warn('保存成功');
            }
          }>
            <FormItem>
              <Input placeholder="请输入用户名" name="user" rules="required" />
            </FormItem>

            <FormItem>
              <Select>
                <Option>请选择</Option>
              </Select>
            </FormItem>

            <FormItem>
              <Select http={
                {
                  mock: true,
                  url: '/select'
                }
              } keys={[ 'code', 'name' ]} name="item2">
                <Option>请选择</Option>
              </Select>
            </FormItem>

            <FormItem>
              <Checkbox name="checkbox">多选框</Checkbox>
            </FormItem>

            <FormItem>
              <Radio name="radio">单选框</Radio>
            </FormItem>

            <FormItem>
              <Button submit type="primary">保存</Button>
            </FormItem>
          </Form>
        </div>
      )
  }
}

export default Page;