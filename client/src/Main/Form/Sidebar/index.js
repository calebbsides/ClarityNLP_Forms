import React, { Component } from 'react';
import { ButtonGroup, Button } from 'reactstrap';

export default class SideBar extends Component {
  render() {
    const { groups, selectedGroup, handleGroupChange } = this.props;

    return (
      <div className='sidebar'>
        <ButtonGroup vertical>
          <Button
            className={
              selectedGroup === null ? 'active text-left' : 'text-left'
            }
            onClick={() => {
              handleGroupChange(null);
            }}
          >
            All Questions
          </Button>
          {groups.map(g => {
            return (
              <Button
                className={
                  g === selectedGroup ? 'active text-left' : 'text-left'
                }
                key={g}
                onClick={() => {
                  handleGroupChange(g);
                }}
              >
                {g}
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
    );
  }
}
