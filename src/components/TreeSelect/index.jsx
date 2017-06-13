/**
 * TreeSelect 树选择
 * @example
 * <TreeSelecte></TreeSelecte>
 */

import React from 'react';
import { Input } from 'components';
import Tree from 'components/Tree';
import classnames from 'classnames';
import _ from 'lodash';
import './style';

class TreeSelect extends React.Component {

  state = {
    value: '',
    treeData: this.props.treeData || []
  };

  // 选择
  handleSelect(item) {
    // console.log(item);
    this.setState({
      label: item.label,
      value: item.value,
      isOpen: false
    });
  }

  // 切换打开列表
  toggleOpen(flag) {
    this.setState({
      isOpen: flag
    });
  }

  // 渲染数据
  renderList(treeData) {
    return (
      <ul>
        {
          treeData.map((item, index) => {
            if (_.isArray(item.children)) {
              return (
                <li key={index}>
                  {item.label}
                  {this.renderList(item.children)}
                </li>
              );
            }
            else {
              return <li className="clickable" onClick={this.handleSelect.bind(this, item)} key={index}>{item.label}</li>
            }
          })
        }
      </ul>
    );
  }

  render() {
    const { name } = this.props;

    return (
      <div className="tree-select">
        <div className="tree-select-input">
          <Input value={this.state.label} onFocus={
            () => {
              this.toggleOpen(true);
            }
          } onBlur={
            () => {
              // this.toggleOpen(false);
            }
          } />
          <input type="hidden" name={name} value={this.state.value} />
        </div>
        <div className={classnames('tree-select-list', this.state.isOpen ? 'open' : '')}>
          {this.renderList(this.state.treeData)}
        </div>
      </div>
    );
  }
}

/*import testComponent from 'utils/testComponent';
testComponent(
  <TreeSelecte></TreeSelecte>
);*/

export default TreeSelect;