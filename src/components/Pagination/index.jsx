/**
 * 分页组件
 * @example
 *   <Pagination data={{ count: 100, index: 1, size: 100 }}></Pagination>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import { Input } from '@/components';
import keyCode from '@/utils/keyCode';
import './style';

class Pagination extends React.Component {
  
  // 总数count, 页码index, 每页显示数size
  state = {
    index: this.props.data.index || 1,
    size: this.props.data.size || 20,
    total: this.props.data.total
  };

  handleClick(command) {
    let { index, size } = this.state;

    switch (command) {
      case 'prev':
        index = Math.max(index - 1, 1);
        break;
      case 'next':
        index = Math.min(index + 1, this.count);
        break;
      default:
        index = command;
    }

    index = index || 1;

    if (this.state.index != index) {
      this.setState({
        index
      });
      this.props.onChange && this.props.onChange(index, size);
    }
  }

  // props更新
  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      const { data } = nextProps;
      this.setState({
        index: data.index,
        size: data.size,
        total: data.total
      });
    }
  }

  
  // 渲染条数
  renderRecord() {
    const { total = 0, index = 1, size = 10 } = this.state || {};
    this.count = Math.ceil(total / size);

    const n = 5;
    const p = (n - 1) / 2;
    // 补够位
    const fixnumStart = Math.max(0, p - (this.count - index));
    const fixnumEnd = Math.max(0, p + 1 - index);

    const node = [];
    node.push(<li key="prev" onClick={this.handleClick.bind(this, 'prev')}>&laquo;</li>);
    for (let i = 1; i <= this.count; i++) {
      if (i >= index - p - fixnumStart && i <= index + p + fixnumEnd) {
        node.push(<li className={classnames(i == index ? 'active' : null)} key={i} onClick={this.handleClick.bind(this, i)}>{i}</li>);
      }
    } 
    node.push(<li key="next" onClick={this.handleClick.bind(this, 'next')}>&raquo;</li>);
    return node;
  }

  handleKeyUp(e) {
    // 回车
    if (keyCode(e.keyCode).is('enter')) {
      let elem = this.refs.input.$elem;
      let num = parseInt(elem.value);
      elem.value = '';

      num = Math.min(Math.max(0, num), this.count);
      this.handleClick(num);
    }
  }
  
  render() {
    return (
      <div className="pagination">
        <div className="pagination-record">
          总记录数 {this.state.total || 0} 条
        </div>
        <div className="pagination-main">
          <ul className="pagination-num">
            {this.renderRecord()}
          </ul>
          <div className="pagination-goto">
            跳至 <Input ref="input" className="pagination-input" onKeyUp={
              (e) => this.handleKeyUp(e)
            } /> 页
          </div>
        </div>
      </div>
    );
  }
}

export default Pagination;