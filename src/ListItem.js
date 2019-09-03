import React, {Component} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({value}) => 
    <div className="card">
        <div className="title">{value.title}</div>
        <a href="recommendation">{value.recommendation}</a>
        {/* <img src={ value.image }></img> commenting out the image for now */}
        <div className="metrics">improve sales up to {value.metrics}</div>
        <div className="icons">placeholder: snooze, dismiss</div>
    </div>);

const SortableList = SortableContainer(({items}) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </div>
  );
});

class SortableComponent extends Component {
  state = {
    items: [
      { 
          title:'1', 
          image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
          recommendation: "Lorem ipsum dolor sit amet",
          metrics: "15%"
      },
      { 
          title:'2', 
          image:'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
          recommendation: "Lorem ipsum dolor sit amet",
          metrics: "12.4%"
      },
      { 
          title:'3', 
          image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
          recommendation: "Lorem ipsum dolor sit amet",
          metrics: "11%"
      },
      { 
          title:'4', 
          image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
          recommendation: "Lorem ipsum dolor sit amet",
          metrics: "9.8%"
      },
      { 
          title:'5', 
          image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
          recommendation: "Lorem ipsum dolor sit amet",
          metrics: "7.5%"
      },
      { 
          title:'6', 
          image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
          recommendation: "Lorem ipsum dolor sit amet",
          metrics: "7.2%"
      },
      { 
          title:'7', 
          image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
          recommendation: "Lorem ipsum dolor sit amet",
          metrics: "6.8%"
      },
      { 
          title:'8', 
          image:'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
          recommendation: "Lorem ipsum dolor sit amet",
          metrics: "5.5%"
      },
      { 
          title:'9', 
          image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
          recommendation: "Lorem ipsum dolor sit amet",
          metrics: "5%"
      },
      { 
          title:'10', 
          image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
          recommendation: "Lorem ipsum dolor sit amet",
          metrics: "4%"
      },
      { 
          title:'11', 
          image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
          recommendation: "Lorem ipsum dolor sit amet",
          metrics: "3.5%"
      },
      { 
          title:'12', 
          image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
          recommendation: "Lorem ipsum dolor sit amet",
          metrics: "2.5%"
      }],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };
  render() {
    return <SortableList axis="xy" items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

export default SortableComponent;